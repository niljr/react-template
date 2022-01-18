// @flow
import React from 'react';
import Table from '../../components/base/Table/Table';
import Button from '../../components/base/Button/Button';
import Typography from '../../components/base/Typography/Typography';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import Breadcrumbs from '../../components/base/Breadcrumbs/Breadcrumbs';
import './reports.scss';

type Props = {
    tableHeader: Array<any>,
    assignments: Array<any>,
    data: Object,
    routes: Array<any>
}

export default function ReportAuthoritiesScreen({ routes, tableHeader, reports, handleSearch, handleToggleModal, data }: Props): React$Element<any> {
    const handleClick = () => {
        handleToggleModal('add');
    };

    return (
        <div className='report-authorities'>
            <Breadcrumbs current='Report Authorities'/>
            <div className='report-authorities__header'>
                <div className='report-authorities__header--search'>
                    <input onChange={handleSearch} placeholder='Search'/>
                </div>

                <div className='report-authorities__header--add'>
                    <Button onClick={handleClick}>
                        <Typography color='color-light' weight='bold'>ADD REPORT</Typography>
                    </Button>
                </div>
            </div>

            <div className='report-authorities__content'>
                <TableDetails
                    headers={[
                        { key: 'status', label: 'Status' },
                        { key: 'title', label: 'Title of Report' },
                        { key: 'role', label: 'Role' },
                        { key: 'name', label: 'Name' },
                        { key: 'submittedTo', label: 'Submitted To' },
                        { key: 'submissionType', label: 'Type of Submission' },
                        { key: 'dueDate', label: 'Due Date' },
                        { key: 'edit', label: 'Edit' }]}
                    list={data}
                    className='pb-3'/>
            </div>
        </div>
    );
}
