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
    routes: Array<any>,
    headers: Array<Object>
}

export default function ReportActivitiesScreen({ routes, tableHeader, reports, handleSearch, handleToggleModal, data, headers }: Props): React$Element<any> {
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

            </div>

            <div className='report-authorities__content'>
                <TableDetails
                    headers={headers}
                    list={data}
                    className='pb-3'/>
            </div>
        </div>
    );
}
