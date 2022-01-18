// @flow
import React, { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Form from '../../base/Form/Form';
import formStructure from './RecordDateSubmissionFormStructure';
import formStructureAdmin from './RecordDateSubmissionFormStructureAdmin';
import { setFlashNotification } from '../../../redux/modules/flashNotification';
import { clearModalContent } from '../../../redux/modules/modalEvent';
import { zeroPadded } from '../../../utils/helpers';
import './department-authority-form.scss';
import moment from 'moment';

type Props = {
    className?: string,
    timeExtension?: any,
    handleUpdatedTimeExtension: (newEntry: any, isUpdating: boolean) => void,
    count: number,
    onChangeFormInput: func,
    createReport: func,
    isAdmin: boolean
}

const schema = yup.object().shape({
    // role: yup.string().required(),
    // submittedTo: yup.string().required(),
    // title: yup.string().required(),
    // submissionType: yup.string().required(),
    // dueDate: yup.string().required(),
    // name: yup.string().required()
});

export default function RecordDateSubmissionForm({
    className = '',
    timeExtension = {},
    count,
    handleUpdatedTimeExtension,
    createReport,
    onChangeFormInput,
    onSubmit,
    item,
    handleUpdateReport,
    isAdmin
}: Props): React$Element<any> {
    const isAddMode = !Object.keys(item).length;
    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [employees, setEmployees] = useState([]);
    const defaultValue = {
        reason: '',
        ...item,
        submissionDate: new Date()
    };

    const dispatch = useDispatch();

    const onSubmitForm = async (data) => {
    };

    return (
        <div className={`time-extension-form ${className}`} >
            <Form
                data={defaultValue}
                structure={isAdmin ? formStructureAdmin : formStructure}
                onSubmitForm={onSubmitForm}
                schema={schema}
                formSize='sm'
                withCloseButton={true}
                isProcessing={isProcessing}
                isAddMode={!isAddMode}/>
        </div>
    );
}
