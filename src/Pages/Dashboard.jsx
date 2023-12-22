import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Components/LeftSideHeader';
import "../css/dashboard.css"
import MainContent from '../Components/MainContent';
import SideBar from '../Components/SideBar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Container fluid className="dashboard-container">
            <Row>
                <Col className="headerWrapper">
                    <Header />
                </Col>
                <Col className='contentWrapper'>
                    <MainContent />
                </Col>
                <Col className='sideBarWrapper'>
                    <SideBar />
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Dashboard;
