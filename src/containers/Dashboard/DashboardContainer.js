// @flow
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// import { listReports } from '../../graphql/queries';
import DashboardScreen from './DashboardScreen';

export default function DashboardContainer(): React$Element<any> {
    const { profileData: { roles } } = useSelector(({ authentication }) => authentication);
    const [searchValue, setSearchValue] = useState('');
    const [filters, setFilters] = useState([
        { total: 0, label: 'Total Employees', buttonVariant: 'primary', id: 'employees' },
        { total: 0, label: 'Total Reports', buttonVariant: 'primary', id: 'reports' }
    ]);

    useEffect(() => {
        prepareData();
    }, []);

    const prepareData = async () => {
       
    };

    const fetchAllUsers = async() => {
        
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    return <DashboardScreen handleSearch={handleSearch} filters={filters} roles={roles}/>;
}
