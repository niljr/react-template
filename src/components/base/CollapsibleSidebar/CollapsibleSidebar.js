// @flow
import React from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Accordion, Card } from 'react-bootstrap';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import type { Menu } from '../../../types';
import './collapsible-sidebar.scss';
import Brand from '../Brand/Brand';

type Props = {
    className?: string,
    children?: any,
    handleToggleSidebar: Function,
    isOpen: boolean,
    pathName: string,
    menu?: Array<Menu>
};

export default function CollapsibleSidebar({
    className = '', children, handleToggleSidebar, isOpen, pathName, menu = []
}: Props): React$Element<any> {
    const Icon = isOpen ? FaAngleDoubleLeft : FaAngleDoubleRight;

    return (
        <div className={`collapsible-sidebar${!isOpen ? ' is-open' : ''}`} >
            <Brand className='collapsible-sidebar__brand'/>
            <div className='collapsible-sidebar__control'>
                <div onClick={handleToggleSidebar} className='collapsible-sidebar__control-button'>
                    <Icon color='#fff' size={18}/>
                </div>
            </div>

            <div className={`collapsible-sidebar__content${!isOpen ? ' is-visible' : ''}  ${className}`}>
                <div className='collapsible-sidebar__content-menu'>
                    {menu.map((item, i) =>
                        <Accordion key={i}>
                            <Card>
                                <Card.Header>
                                    <div onClick={item.onClick || null}>
                                        <CustomToggle eventKey={i} withSubmenu={!!item.subMenu}>
                                            <item.icon size={20}/>
                                            <p className='ml-3 mb-0'>{item.label}</p>
                                        </CustomToggle>
                                    </div>
                                </Card.Header>
                                {item.subMenu && (
                                    <Accordion.Collapse eventKey={i}>
                                        <div>
                                            {item.subMenu.map(sub =>
                                                <div
                                                    key={sub.key}
                                                    onClick={sub.onClick || null}
                                                    className={`collapsible-sidebar__menu-item ${pathName === `/${sub.key}` ? 'is-active' : ''}`}>
                                                    <item.icon size={20} color='transparent'/>
                                                    <p className='ml-3 mb-0'>{sub.label}</p>
                                                </div>
                                            )}
                                        </div>
                                    </Accordion.Collapse>
                                )}
                            </Card>
                        </Accordion>
                    )}
                </div>

                {children}
            </div>
        </div>
    );
}

function CustomToggle({ children, eventKey, withSubmenu }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <div
            className='collapsible-sidebar__menu-item justify-content-between'
            onClick={decoratedOnClick}>
            <div className='d-flex'>
                {children}
            </div>
            {withSubmenu && <MdKeyboardArrowDown size={18}/> }
        </div>
    );
}
