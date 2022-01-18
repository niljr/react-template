// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserManagementScreen from './UserManagementScreen';
import { setModalContent } from '../../redux/modules/modalEvent';
import UserFormContainer from '../../components/modules/UserForm/UserFormContainer';
import { dummy } from './dummy';
import Button from '../../components/base/Button/Button';
import { FaRegEdit } from 'react-icons/fa';

type Props = {
    routes: Array<any>
}

export default function UserManagementContainer({ routes }: Props): React$Element<any> {
    const dispatch = useDispatch();
    const [data, setData] = useState(dummy);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
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

    const prepareData = async() => {
        
    };

    const handleEdit = (item: any) => {
        const user = {
            username: item.Username,
            email: item.Attributes[4].Value,
            name: item.Attributes[3].Value,
            section: item.Attributes[2].Value,
            email_verified: item.Attributes[1].Value
        };

        handleToggleModal('edit', user);
    };

    const handleSearch = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const handleUpdateUser = (user, isUpdating) => {
        if (isUpdating) {
            prepareData();
        } else {
            setUsers([...users, user]);
        }
    };

    const handleToggleModal = (status: string, item: any = {}) => {
        dispatch(setModalContent({
            modalContent: <UserFormContainer
                count={users.length}
                handleUpdateUser={handleUpdateUser}
                item={item}/>,
            title: `${status === 'add' ? 'Add' : 'Edit'} User Management`,
            size: 'md'
        }));
    };

    // const getUsers = () => {
    //     console.log('getPlayers');
    //     API.get('getUsers', '/users', {})
    //         .then(response => {
    //             console.log('success');
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log('error');
    //             console.log(error);
    //         });
    // };

    return <UserManagementScreen
        filters={filters}
        routes={routes}
        data={users}
        handleSearch={handleSearch}
        handleToggleModal={handleToggleModal}/>;
}
