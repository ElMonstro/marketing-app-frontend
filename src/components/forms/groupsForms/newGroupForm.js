import React from 'react';
import { useFormik } from 'formik';

import { yupNewGroupObj } from '../validation';
import Swal from 'sweetalert2';
import './groupsForms.scss';
import GroupsService from '../../../services/groupsServices';

const NewGroupForm = (props) => {
    var dialog = document.querySelector('#new-group-form');
    const {fetchGroups} = props;

    const formik = useFormik({
            initialValues: {
                groupName: '',
                description: '',
            },
            validationSchema: yupNewGroupObj,
            onSubmit: async values => {
                alert(JSON.stringify(values, null, 2));
                const {groupName, description} = values;
                const response = await GroupsService.postNewGroup({groupName, description});
                dialog.close();
                fetchGroups();

                    if (response.status === 201){
                        return Swal.fire({
                            title: 'Success!',
                            text: `${response.data.name} added successfully`,
                            icon: 'success',
                            confirmButtonText: 'close',
                    })
                }
            },
        });

    return(
        <dialog id="new-group-form" class="mdl-dialog">
            <span class="mdl-dialog__title" style={{fontSize: '24px', color: '#1B7EC2'}}>ADD NEW GROUP</span>
            <div class="mdl-dialog__content"></div>
                    <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
                            
                            <div className="group-input-container">
                                <div className="group-input-label">
                                <span >name</span>
                                    {formik.touched.groupName && formik.errors.groupName ? 
                                        <span className="error-span">{formik.errors.groupName}</span>
                                    : null}
                                </div>
                                <input name="groupName" {...formik.getFieldProps('groupName')}>
                                </input>
                            </div>      

                            <div className="group-input-container">
                                <div className="group-input-label">
                                    <span >description</span>
                                    {formik.touched.description && formik.errors.description ? 
                                        <span className="error-span">{formik.errors.description}</span>
                                    : null}
                                </div>
                                <textarea name="description" {...formik.getFieldProps('description')}>
                                </textarea>
                            </div>              

                        <div class="dialog-actions">
                            <button className="dialog-buttons" type="button" className="close" onClick={() => dialog.close()}>CANCEL</button>
                            <button className="dialog-buttons" type="submit" >ADD GROUP</button>
                        </div>
                    </form>
            
    </dialog>
    );
}

export default NewGroupForm;