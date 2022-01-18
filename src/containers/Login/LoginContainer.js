// @flow
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Login from './LoginScreen';

import Storage from '../../utils/Storage';
import { authUser, setLoggingOut } from '../../redux/modules/authentication';
import { setFlashNotification } from '../../redux/modules/flashNotification';
import { storageKey } from '../../config/constants';

export default function LoginContainer(): React$Element<any> {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoggingOut());
    }, []);

    const [isProcessing, setIsProcessing] = useState(false);

    const onSubmit = async (formInput) => {
       
        dispatch(authUser({user: {}, roles: 'admin'}));
    };

    return <Login
        onSubmit={onSubmit}
        isProcessing={isProcessing} />;
}
