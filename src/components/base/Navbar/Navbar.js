// @flow
import React, { useEffect, useState, Fragment } from 'react';
import { IoIosNotifications, IoMdArrowDropdown } from 'react-icons/io';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { setModalContent } from '../../../redux/modules/modalEvent';
import { setLoggingOut } from '../../../redux/modules/authentication';
import { } from '../../../utils/RelativeTime';
import Typography from '../Typography/Typography';
import CustomToggle from '../CustomToggle';
import './navbar.scss';

type Props = {
    className?: string
}

type Menu = {label: string | null, route?: string, component?: any | null, isDivider: null | boolean};

export default function AppNavbar({ className = '' }: Props): React$Element<any> {
    const [hasUpdate, setHasUpdate] = useState(false);
    const [newDataUpdate, setNewDataUpdate] = useState([]);
    const dispatch = useDispatch();
    const { profileData } = useSelector(({ authentication }) => authentication);

    const menu: Array<Menu> = [{
        label: `Hello!  ${profileData.username}`,
        route: '/dashboard',
        isDivider: false
    }, {
        isDivider: true,
        label: null
    }, {
        label: 'Sign Out',
        route: '/login',
        isDivider: false
    }];

    if (profileData.role === 'admin') {
        // menu.splice(1, 0, {
        //     label: 'Add Task',
        //     component: AddTask,
        //     isDivider: false
        // });
    }

    const history = useHistory();
    const { pathname } = useLocation();

    const isDashboard = pathname === '/dashboard';

    const getCurrentMenu = ():Menu | void => menu.find(m => pathname.includes(m.route));

    const [currentMenu, setCurrentMenu] = useState<Menu | void>(getCurrentMenu());

    useEffect(() => {
        setCurrentMenu(getCurrentMenu());
        subscribe();
    }, [pathname]);

    const subscribe = async() => {
        try {
           
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnClick = (item) => {
        if (item.label === 'Sign Out') {
            signOut();
        }

        if (item.route) {
            if (item.route === '/login') {
                dispatch(setLoggingOut());
                localStorage.clear();
            } else {
                history.push(item.route);
            }
        } else {
            const Component: any = item.component;

            // dispatch(setModalContent({
            //     modalContent: <Component />,
            //     title: 'Add Task',
            //     size: 'lg'
            // }));
        }
    };

    const signOut = async() => {
      
    };

    return (
        <Navbar expand='lg' className={isDashboard ? '' : 'colored'}>
            {/* {isDashboard && <Brand />} */}
            <Nav className='ml-auto'>
                <Dropdown >
                    <Dropdown.Toggle as={CustomToggle} id='notification' className='navbar__toggle mr-2'>
                        <div className='navbar__notification'>
                            <IoIosNotifications size={25} color={isDashboard ? '#464646' : '#464646'}/>
                            {hasUpdate && <div className='navbar__notification-new'/> }
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align='right' className='navbar__notification-menu'>
                        {newDataUpdate.length
                            ? newDataUpdate.map((item, m) =>
                                <Fragment key={m}>
                                    <Dropdown.Item>
                                        <div className='flex-spaced'>
                                            <Typography weight='semi-bold' variant='size-18'>{item.title}</Typography>
                                            <Typography>{moment(item.date).format('L')}</Typography>
                                        </div>
                                        <Typography className='navbar__notification-description'>
                                            {item.submittedTo}
                                        </Typography>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                </Fragment>
                            )
                            : <p>No new update</p>}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components' className='navbar__toggle'>
                        <Typography color={isDashboard ? 'color-dark' : 'color-light'}>
                            {currentMenu?.label} <IoMdArrowDropdown size={20}/>
                        </Typography>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align='right'>
                        {menu.filter(m => m.label !== currentMenu?.label).map((item, m) =>
                            item.isDivider
                                ? <Dropdown.Divider key={m}/>
                                : <Dropdown.Item onClick={() => handleOnClick(item)} key={m}>{item.label}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    );
}
