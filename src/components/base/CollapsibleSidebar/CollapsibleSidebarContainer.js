// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';
import CollapsibleSidebar from './CollapsibleSidebar';
import Storage from '../../../utils/Storage';
import { usePathname } from '../../../utils/Route';
import { storageKey } from '../../../config/constants';
import type { Menu } from '../../../types';

type Props = {
    className?: string,
    children?: any,
    menu?: Array<Menu>
}

export default function CollapsibleSidebarContainer({ children, ...props }: Props): React$Element<any> {
    const pathName = usePathname();

    const { profileData } = useSelector(({ authentication }) => authentication);
    const [isOpen, setToggleOpen] = React.useState(true);

    const handleToggleSidebar = () => {
        const updateState = !isOpen;

        setToggleOpen(updateState);
        Storage.setItem(storageKey.sidebarState, JSON.stringify(updateState));
    };

    const getMenu = () => {
        return props.menu.filter(({ isAdminOnly }) => {
            if (!isAdminOnly) {
                return true;
            } else {
                return profileData.roles.includes('admin');
            }
        });
    };

    return (
        <CollapsibleSidebar
            {...props}
            menu={getMenu()}
            pathName={pathName}
            handleToggleSidebar={handleToggleSidebar}
            isOpen={isOpen}>
            {children}
        </CollapsibleSidebar>
    );
}
