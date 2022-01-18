// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import Form from '../../components/base/Form/Form';
import Typography from '../../components/base/Typography/Typography';
import LOGO from '../../assets/logo-placeholder.jpg';
import formStructure from './loginForm';
import schema from './loginSchema';

type Props = {
    onSubmit: Function,
    isProcessing: boolean
}


function Login({ onSubmit, isProcessing }:Props): React$Element<any> {
    return (
        <div className='login'>
            <div className='login__wrapper'>
                <div className='login__image' />
            </div>

            <div className='login__wrapper'>

                <div className='login__form'>
                    <img src={LOGO} alt='logo' />

                    <Typography
                        variant='size-26' color='color-dark' weight='bold'
                        className='text-center mt-3 mb-5'>
                        Webapp template
                    </Typography>
                    <Form
                        isShowLabels={false}
                        structure={formStructure}
                        onSubmitForm={onSubmit}
                        schema={schema}
                        submitLabel='Login'
                        isAddMode={true}
                        isProcessing={isProcessing} />

                    {/* <Link to='/create-account'>Create an Account</Link> */}
                </div>
            </div>
        </div>
    );
}

// export default withAuthenticator(Login);
export default Login;
