import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
    return (
        <div className='home'>
            Home
            <Link to='/login'>Login</Link>
        </div>
    );
}
