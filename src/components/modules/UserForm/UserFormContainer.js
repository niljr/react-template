// @flow
import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../base/Form/Form';
import formStructure from './UserForm';
import { setFlashNotification } from '../../../redux/modules/flashNotification';
import { clearModalContent } from '../../../redux/modules/modalEvent';
import { zeroPadded } from '../../../utils/helpers';
import moment from 'moment';

import './department-authority-form.scss';

// import { addTimeExtension, updateTimeExtension } from '../../../api/timeExtensions';

type Props = {
    className?: string,
    timeExtension?: any,
    handleUpdatedTimeExtension: (newEntry: any, isUpdating: boolean) => void,
    count: number
}

const schema = yup.object().shape({
    // timeExtensionNumber: yup.string(),
    // reasonForTimeExtension: yup.string(),
    // approvedBy: yup.string(),
    // duration: yup.number().min(1),
    // designation: yup.string(),
    // additionalDuration: yup.number().min(0),
    // dateApproved: yup.date().nullable(),
    // status: yup.string()
});

export default function UserFormContainer({
    className = '', timeExtension = {},
    count, handleUpdatedTimeExtension,
    item,
    handleUpdateUser
}: Props): React$Element<any> {
    const isAddMode = !Object.keys(item).length;
    const defaultValue = {
        name: '',
        email: '',
        section: '',
        username: '',
        password: '',
        ...item
    };

    const dispatch = useDispatch();
    const [isProcessing, setIsProcessing] = useState(false);

    const signUp = async (data) => {
        
    };

    const addToGroup = async(username) => {
    };

    const onSubmitForm = async (data) => {
    };

    const handleDelete = async() => {
    };

    return (
        <div className={`time-extension-form ${className}`} >
            <Form
                data={defaultValue}
                structure={formStructure}
                onSubmitForm={signUp}
                schema={schema}
                formSize='sm'
                withCloseButton={true}
                isProcessing={isProcessing}
                isAddMode={isAddMode}
                handleDelete={handleDelete}/>
        </div>
    );
}
