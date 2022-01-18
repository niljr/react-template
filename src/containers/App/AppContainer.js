import React from 'react';
import { Switch, Route, useLocation, useHistory, Redirect  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdDashboard, MdStar } from 'react-icons/md';
// import Spinner from 'react-bootstrap/Spinner';
import routes from '../../config/routes';
import AppLoadingContainer from '../AppLoading/AppLoadingContainer';
import AppModal from '../../components/base/Modal/Modal';
import FlashNotification from '../../components/modules/FlashNotification/FlashNotification';
import CollapsibleSidebar from '../../components/base/CollapsibleSidebar/CollapsibleSidebarContainer';
import Navbar from '../../components/base/Navbar/Navbar';
import { clearModalContent } from '../../redux/modules/modalEvent';

function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { modalContent, onToggle, ...modalEvent } = useSelector(({ modalEvent }) => modalEvent);
    const { isAuthed, profileData: { roles } } = useSelector(({ authentication }) => authentication);

    const handleCloseModal = () => {
        dispatch(clearModalContent());
        onToggle && onToggle();

        // To show modal, do this something like this:
        // dispatch(setModalContent({
        //     modalContent: <LoginContainer />,
        //     title: 'Login'
        // }));
    };

    const menu = [{
        label: 'Dashboard',
        onClick: () => history.push('/dashboard'),
        icon: MdDashboard,
        key: 'one',
        isAdminOnly: false
    },
    {
        label: 'User Management ',
        onClick: () => history.push('/user-management'),
        icon: MdDashboard,
        key: 'one',
        isAdminOnly: true
    },
    ];

    return (
        <AppLoadingContainer>
            <div id='outer-container'>
                {isAuthed && (
                    <CollapsibleSidebar className='p-2' menu={menu}>
                    </CollapsibleSidebar>
                )}

                <div id='content'>
                    {isAuthed && (
                        <Navbar />
                    )}
                    <div id='page-wrap' className={isAuthed ? '-authed' : ''}>
                        <Switch>
                            {routes.map((route, i) => (
                                !route.isPrivate
                                    ? <RouteWithSubRoutes key={i} {...route} />
                                    : <PrivateRoute key={i} {...route} isAuthed={isAuthed}
                                        roles={roles} />
                            ))}
                        </Switch>
                    </div>
                </div>
            </div>

            <FlashNotification/>
            <AppModal
                {...modalEvent}
                isShow={!!modalContent}
                onToggle={handleCloseModal}>
                {modalContent}
            </AppModal>
        </AppLoadingContainer>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )} />
    );
}

function PrivateRoute({ component: Component, isAuthed, roles, ...rest }: {component: any, isAuthed: boolean}) {
    return (
        <Route {...rest} render={(routeProps) => (
            isAuthed
                ? rest.isAdminOnly && !roles.includes('admin')
                    ? <Redirect  to={{
                        pathname: '/dashboard',
                        state: { from: routeProps.location }
                    }}/>
                    : <Component {...routeProps} />
                : <Redirect  to={{
                    pathname: '/login',
                    state: { from: routeProps.location }
                }}/>
        )}/>
    );
}

export { RouteWithSubRoutes };

export default App;
