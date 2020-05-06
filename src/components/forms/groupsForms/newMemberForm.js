import React from 'react';
import { useFormik } from 'formik';

import { yupNewMemberObj } from '../validation';
import Swal from 'sweetalert2';
import './groupsForms.scss';
import GroupsService from '../../../services/groupsServices';

const NewMemberForm = (props) => {
    var dialog = document.querySelector('#new-member-form');
    const {activeGroupId:group, fetchGroups, activeGroupIndex, fetchGroupMembers, groups} = props;

    const formik = useFormik({
            initialValues: {
                firstName: '',
                secondName: '',
                phoneNumber: '',
            },
            validationSchema: yupNewMemberObj,
            onSubmit: async values => {
                const {firstName, secondName, phoneNumber} = values;
                const response = await GroupsService.postNewMember({group, firstName, secondName, phoneNumber});
                dialog.close();
                fetchGroups();
                fetchGroupMembers(groups, activeGroupIndex)

                    if (response.status === 201){
                        return Swal.fire({
                            title: 'Success!',
                            text: `added successfully`,
                            icon: 'success',
                            confirmButtonText: 'close',
                    })
                }
            },
        });

    return(
        <dialog id="new-member-form" class="mdl-dialog">
            <span class="mdl-dialog__title" style={{fontSize: '24px', color: '#1B7EC2'}}>ADD NEW MEMBER</span>
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
                            <button className="dialog-buttons" type="submit">ADD MEMBER</button>
                        </div>
                    </form>
            
    </dialog>
    );
}

export default NewMemberForm;