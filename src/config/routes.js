import Home from '../containers/Home/HomeContainer';
import Login from '../containers/Login/LoginContainer';
import NotFound from '../containers/NotFound/NotFoundContainer';
import Dashboard from '../containers/Dashboard/DashboardContainer';
import UserManagement from '../containers/UserManagement/UserManagementContainer';
import Typography from '../components/base/Typography/Typography';
// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE

const routes = [{
    path: '/login',
    name: 'Login',
    isPrivate: false,
    component: Login
}, {
    path: '/',
    exact: true,
    name: 'Home',
    isPrivate: false,
    component: Home
}, {
    path: '/dashboard',
    name: 'Dashboard',
    isPrivate: true,
    isAdminOnly: false,
    component: Dashboard
}, {
    path: '/user-management',
    name: 'User Management',
    isPrivate: true,
    isAdminOnly: true,
    component: UserManagement
},
{
    path: '*',
    name: 'NotFound',
    component: NotFound
}];

export default routes;
