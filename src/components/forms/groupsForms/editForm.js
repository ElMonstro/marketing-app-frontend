import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import { yupNewMemberObj } from '../validation';
import Swal from 'sweetalert2';
import './groupsForms.scss';
import GroupsService from '../../../services/groupsServices';

const NewMemberForm = (props) => {
    var dialog = document.querySelector('#edit-member-form');
    const {fetchGroups} = props;
    const [member, updateMember] = useState(props.memberToBeEditted);
    const [groups, updateAllGroups] = useState(props.groups);
    console.log('MEMBER TO BE EDITTED', member);

    useEffect(() => {
        updateMember(props.memberToBeEditted);
      }, [props]);

      useEffect(() => {
        updateAllGroups(props.groups);
      }, [props]);

    const formik = useFormik({
            enableReinitialize: true,
            initialValues: {
                firstName: `${member.first_name}`,
                secondName: `${member.last_name}`,
                phoneNumber: `${member.phone}`,
            },
            validationSchema: yupNewMemberObj,
            onSubmit: async values => {
                    //get group member belong to
                    const groupMemberBelongsTo = groups.filter(
                        eachGroup => eachGroup.members.includes(member.id)
                    )
                const edittedMember = await GroupsService.editGroupMember(member.id, values, groupMemberBelongsTo[0])
                console.log('EDIT GROUP MEMBER BELONGS TO', edittedMember);
                dialog.close();
                if (edittedMember.status === 200){
                    fetchGroups()
                    return Swal.fire({
                        title: 'Success!',
                        text: 'group member editted successfully',
                        icon: 'success',
                        confirmButtonText: 'close',
                })
                }
                dialog.close()
            },
        });

    return(
        <dialog id="edit-member-form" class="mdl-dialog">
            <span class="mdl-dialog__title" style={{fontSize: '24px', color: '#1B7EC2'}}>EDIT MEMBER</span>
            <div class="mdl-dialog__content"></div>
                    <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
                            
                            <div className="group-input-container">
                                <div className="group-input-label">
                                <span >first name</span>
                                    {formik.touched.firstName && formik.errors.firstName ? 
                                        <span className="error-span">{formik.errors.firstName}</span>
                                    : null}
                                </div>
                                <input name="firstName" {...formik.getFieldProps('firstName')}>
                                </input>
                            </div> 

                            <div className="group-input-container">
                                <div className="group-input-label">
                                <span >second name</span>
                                    {formik.touched.secondName && formik.errors.secondName ? 
                                        <span className="error-span">{formik.errors.secondName}</span>
                                    : null}
                                </div>
                                <input name="secondName" {...formik.getFieldProps('secondName')}>
                                </input>
                            </div> 

                            <div className="group-input-container">
                                <div className="group-input-label">
                                <span >phone number</span>
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? 
                                        <span className="error-span">{formik.errors.phoneNumber}</span>
                                    : null}
                                </div>
                                <input name="phoneNumber" {...formik.getFieldProps('phoneNumber')}>
                                </input>
                            </div> 

                        <div class="dialog-actions">
                            <button className="dialog-buttons" type="button" className="close" onClick={() => dialog.close()}>CANCEL</button>
                            <button className="dialog-buttons" type="submit">SUBMIT</button>
                        </div>
                    </form>
            
    </dialog>
    );
}

export default NewMemberForm;