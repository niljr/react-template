// @flow
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../base/Form/Form';
import formStructure from './departmentAuthorityFormStructure';
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
    createReport: func
}

const schema = yup.object().shape({
    role: yup.string().required(),
    submittedTo: yup.string().required(),
    title: yup.string().required(),
    submissionType: yup.string().required(),
    dueDate: yup.string().required(),
    name: yup.string().required()
});

export default function DepartmentAuthorityForm({ className = '', timeExtension = {}, count, handleUpdatedTimeExtension, createReport, onChangeFormInput, onSubmit, item, handleUpdateReport }: Props): React$Element<any> {
    const isAddMode = !Object.keys(item).length;
    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [employees, setEmployees] = useState([]);
    const defaultValue = {
        role: '',
        title: '',
        submittedTo: '',
        submissionType: '',
        status: '',
        ...item,
        dueDate: item ? moment(item.dueDate).toDate() : 'MM-DD-YYYY'
    };

    const structure = formStructure;

    useEffect(() => {
        getListOfUsers();
    }, []);

    const dispatch = useDispatch();

    const onSubmitForm = async (data) => {
    };

    console.log(item);

    const handleDelete = async() => {
       
    };

    const getListOfUsers = async() => {
        
    };

    if (isLoading) return <div />;

    return (
        <div className={`time-extension-form ${className}`} >
            <Form
                data={defaultValue}
                structure={structure}
                onSubmitForm={onSubmitForm}
                schema={schema}
                formSize='sm'
                withCloseButton={true}
                isProcessing={isProcessing}
                isAddMode={isAddMode}
                handleDelete={handleDelete}/>
        </div>
    );
}
