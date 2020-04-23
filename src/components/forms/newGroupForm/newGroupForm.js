import React from 'react';
import { useFormik } from 'formik';

import { yupNewGroupObj } from '../validation';
import './newGroupForm.scss';

const NewGroupForm = (props) => {
    const { allEventsStateHandler } = props;
    var dialog = document.querySelector('dialog');

    const formik = useFormik({
            initialValues: {
                groupName: '',
                description: '',
            },
            validationSchema: yupNewGroupObj,
            onSubmit: values => {
                const {groupName, description} = values;
                allEventsStateHandler();
                dialog.close();
            },
        });

    return(
        <dialog class="mdl-dialog">
            <span class="mdl-dialog__title" style={{fontSize: '24px', color: '#1B7EC2'}}>New Group</span>
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
                            <button className="dialog-buttons" type="submit" >ADD EVENT</button>
                        </div>
                    </form>
            
    </dialog>
    );
}

export default NewGroupForm;