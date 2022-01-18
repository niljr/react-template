// @flow
import * as React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import type { ButtonVariant } from '../../../types';
// import './button.scss';

type Props = {
    variant?: ButtonVariant,
    label?: string,
    className?: string,
    onClick?: Function,
    children?: React.Node,
    icon?: any,
    isProcessing?: boolean
}

export default function Breadcrumbs({ current, variant, label, className = '', onClick, icon: Icon, isProcessing, ...rest }: Props): React$Element<any> {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
            <Breadcrumb.Item active={true}>{current}</Breadcrumb.Item>
        </Breadcrumb>
    );
}
