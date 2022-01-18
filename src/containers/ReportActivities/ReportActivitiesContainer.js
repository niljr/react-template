// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReportActivitiesScreen from './ReportActivitiesScreen';
import { FaPlus, FaRegEdit } from 'react-icons/fa';
import moment from 'moment';

import Button from '../../components/base/Button/Button';
import { setModalContent, clearModalContent } from '../../redux/modules/modalEvent';
import RecordDateSubmissionForm from '../../components/modules/RecordDateSubmission/RecordDateSubmissionForm';
import { setFlashNotification } from '../../redux/modules/flashNotification';

type Props = {
    routes: Array<any>
}
const initialFormState = { role: '', name: '', title: '', submittedTo: '', submissionType: '', dueDate: '', status: '' };

export default function ReportActivitiesContainer({ routes }: Props): React$Element<any> {
    const dispatch = useDispatch();
    const [reports, setReports] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    const [searchValue, setSearchValue] = useState('');
    const [filters, setFilters] = useState([
        { total: 0, label: 'all', buttonVariant: 'primary' },
        { total: 0, label: 'nys', buttonVariant: 'warning' },
        { total: 0, label: 'ongoing', buttonVariant: 'success' },
        { total: 0, label: 'completed', buttonVariant: 'info' },
        { total: 0, label: 'accepted', buttonVariant: 'secondary' },
        { total: 0, label: 'terminated', buttonVariant: 'danger' }]);
    const [headers, setHeaders] = useState([
        { key: 'title', label: 'Title of Report' },
        { key: 'submissionType', label: 'Type of Report' },
        { key: 'submittedTo', label: 'Submitted To' },
        { key: 'status', label: 'Status' },
        { key: 'dueDate', label: 'Due Date' },
        { key: 'submission', label: 'Submission' }
    ]);
    const { profileData: { username, roles } } = useSelector(({ authentication }) => authentication);

    useEffect(() => {
        prepareData();
    }, []);

    const prepareData = async() => {
        roles.includes('admin') && setHeaders([
            { key: 'title', label: 'Title of Report' },
            { key: 'submissionType', label: 'Type of Report' },
            { key: 'name', label: 'Responsible Person' },
            { key: 'section  ', label: 'Section/Unit ' },
            { key: 'dueDate', label: 'Due Date' },
            { key: 'status', label: 'Status' },
            { key: 'edit', label: 'Edit' }]);
        fetchReports();
    };

    /**
     * GET ALL REPORTS
     * @returns {Promise}
     */
    const fetchReports = async() => {
        
    };

    const objectIsAdmin = (item) => {
        if (roles.includes('admin')) {
            return {
                edit: <Button variant='link' onClick={() => handleEdit(item)}>
                    <FaRegEdit />
                </Button>
            };
        } else {
            return {
                submission: item.submissionDate
                    ? item.submissionDate
                    : <Button variant='link' onClick={() => handleDateSubmission(item)}>
                        <FaPlus />  Record Submission
                    </Button>
            };
        }
    };

    const handleDateSubmission = (item: any) => {
        handleToggleModal('Record Date of Submission', item);
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
            modalContent: <RecordDateSubmissionForm
                count={reports.length}
                handleUpdateReport={handleUpdateReport}
                item={item}
                isAdmin={roles.includes('admin')}/>,
            title: status,
            size: 'md'
        }));
    };

    return <ReportActivitiesScreen
        filters={filters}
        routes={routes}
        reports={reports}
        data={reports}
        headers={headers}
        handleSearch={handleSearch}
        handleToggleModal={handleToggleModal}/>;
}
