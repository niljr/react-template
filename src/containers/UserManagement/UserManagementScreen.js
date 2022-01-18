// @flow
import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '../App/AppContainer';
import Table from '../../components/base/Table/Table';
import Button from '../../components/base/Button/Button';
import Typography from '../../components/base/Typography/Typography';
import TableDetails from '../../components/base/TableDetails/TableDetails';
import Breadcrumbs from '../../components/base/Breadcrumbs/Breadcrumbs';
import './users.scss';

type Props = {
    tableHeader: Array<any>,
    assignments: Array<any>,
    data: Object,
    routes: Array<any>
}

export default function UserManagementScreen({ routes, data, tableHeader, assignments, handleSearch, handleToggleModal }: Props): React$Element<any> {
    const handleClick = () => {
        handleToggleModal('add');
    };

    return (
        <div className='user-management'>
            <Breadcrumbs current='User Management'/>
            <div className='user-management__header'>
                <div className='user-management__header--search'>
                    {/* <Typography weight='semi-bold' className='mr-2'>Search:</Typography> */}
                    <input onChange={handleSearch} placeholder='Search'/>
                </div>

                <div className='user-management__header--add'>
                    <Button onClick={handleClick}>
                        <Typography color='color-light' weight='bold'>Add</Typography>
                    </Button>
                </div>
            </div>

            <div className='user-management__content'>
                <TableDetails
                    headers={[
                        { key: 'username', label: 'Username' },
                        { key: 'name', label: 'Name' },
                        { key: 'email', label: 'Email' },
                        { key: 'section', label: 'Section' },
                        { key: 'email_verified', label: 'Verified' },
                        { key: 'edit', label: 'Edit' }
                    ]}
                    list={data}
                    isStriped={true}/>
            </div>
        </div>
    );
}
