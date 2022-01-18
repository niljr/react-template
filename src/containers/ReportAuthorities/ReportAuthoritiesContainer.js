// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReportAuthoritiesScreen from './ReportAuthoritiesScreen';
import { FaRegEdit } from 'react-icons/fa';
import moment from 'moment';

import Button from '../../components/base/Button/Button';
import { setModalContent, clearModalContent } from '../../redux/modules/modalEvent';
import DepartmentAuthorityForm from '../../components/modules/DepartmentAuthority/DepartmentAuthorityForm';
import { setFlashNotification } from '../../redux/modules/flashNotification';

type Props = {
    routes: Array<any>
}
const initialFormState = { role: '', name: '', title: '', submittedTo: '', submissionType: '', dueDate: '', status: '' };

export default function ReportAuthoritiesContainer({ routes }: Props): React$Element<any> {
    const dispatch = useDispatch();
    const [reports, setReports] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filters, setFilters] = useState([
        { total: 0, label: 'all', buttonVariant: 'primary' },
        { total: 0, label: 'nys', buttonVariant: 'warning' },
        { total: 0, label: 'ongoing', buttonVariant: 'success' },
        { total: 0, label: 'completed', buttonVariant: 'info' },
        { total: 0, label: 'accepted', buttonVariant: 'secondary' },
        { total: 0, label: 'terminated', buttonVariant: 'danger' }]);

    useEffect(() => {
        prepareData();
    }, []);

    const prepareData = () => {
        fetchReports();
    };

    const onSubmit = async inputData => {
        try {
            createReport(inputData);
        } catch (error) {
            dispatch(setFlashNotification({
                message: error,
                isError: true
            }));
        }
    };

    /**
     * CREATE REPORT
     * @param {Object} inputData
     * @returns {Promise}
     */
    const createReport = async (inputData) => {
       
    };

    /**
     * GET ALL REPORTS
     * @returns {Promise}
     */
    const fetchReports = async() => {
       
    };

    const handleEdit = (item: any) => {
        handleToggleModal('edit', item);
    };

    const onChangeFormInput = (e, field) => {
        setFormData({ ...formData, field: e.target.value });
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const handleUpdateReport = (report, isUpdating) => {
        if (isUpdating) {
            prepareData();
        } else {
            setReports([...reports, report]);
        }
    };

    const handleToggleModal = (status: string, item: any = {}) => {
        dispatch(setModalContent({
            modalContent: <DepartmentAuthorityForm
                count={reports.length}
                handleUpdateReport={handleUpdateReport}
                item={item}/>,
            title: `${status === 'add' ? 'Add' : 'Edit'} Report`,
            size: 'md'
        }));
    };

    return <ReportAuthoritiesScreen
        filters={filters}
        routes={routes}
        reports={reports}
        data={reports}
        handleSearch={handleSearch}
        handleToggleModal={handleToggleModal}/>;
}
