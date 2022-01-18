// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useLocation, useHistory } from 'react-router-dom';

import withLoading from '../../components/modules/withLoading/withLoading';
import Breadcrumbs from '../../components/base/Breadcrumbs/Breadcrumbs';
import Button from '../../components/base/Button/Button';
import Typography from '../../components/base/Typography/Typography';
import Card from '../../components/base/Card/Card';
import './dashboard.scss';

type Props = {
    tableHeader: Array<any>,
    assignments: Array<any>,
    filters: Array<any>,
    handleSelectedFilter: (type: string) => void,
    selectedFilter: string,
    handleSearch: (e: Object) => void,
    data: Object,
    roles: any
}

function DashboardScreen({ filters, roles }) {
    const history = useHistory();

    return (
        <div className='report-authorities'>
            <Breadcrumbs current='Dasboard'/>
            <div className='report-authorities__header'>
                {/* <h1>Dashboard</h1> */}

                {/* <div>
                    <Card header='Users'>
                        Total Registered Users: 20
                    </Card>

                </div> */}
            </div>
            {roles.includes('admin')
                ? <Row className='dashboard__filter'>
                    {filters.map(filter =>
                        <Col key={filter.label} xs={4} lg={2}>
                            <Button
                                className={`dashboard__filter-item -${filter.label}`}
                                variant={filter.buttonVariant}
                                // onClick={() => handleSelectedFilter(filter.label)}>
                                onClick={() => { history.push(filter.path); }}>
                                <div className='flex-spaced'>
                                    <Typography variant={filter.label === 'all' ? 'size-34' : 'size-14'} color='color-light'>{filter.label.toUpperCase()}</Typography>
                                    {/* {selectedFilter === filter.label && ( */}
                                    <FaCheckCircle color='#EFEFEF' className='dashboard__filter-item__icon'/>
                                    {/* )} */}
                                </div>
                                {filter.label !== 'all' && (
                                    <Typography variant='size-24' color='color-light' weight='semi-bold'>
                                        {filter.total}
                                    </Typography>
                                )}
                            </Button>
                        </Col>
                    )}
                </Row>
                : null}
        </div>
    );
}

const Dashboard: any = withLoading(DashboardScreen);

export default Dashboard;
