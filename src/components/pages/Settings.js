import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { Application } from './tabSettings/Application';
import { Password } from './tabSettings/Password';

export default function Settings() {
  return (
    <div className='panel-content'>
      <Tab.Container defaultActiveKey='application'>
        <Row className='mx-0 px-3'>
          <div>
            <Nav variant='pills-2' className='border-bottom'>
              <Nav.Item>
                <Nav.Link eventKey='application' className='pl-md-0'>
                  Application
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='profile'>Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='integrations'>Integrations</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='password'>Password</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='billing'>Billing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='notifications'>Notifications</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Col xs={12} className='px-0 mt-4'>
            <Tab.Content>
              <Tab.Pane eventKey='application'>
                <Application />
              </Tab.Pane>
              <Tab.Pane eventKey='profile'>Profile</Tab.Pane>
              <Tab.Pane eventKey='integrations'>Integrations</Tab.Pane>
              <Tab.Pane eventKey='password'>
                <Password />
              </Tab.Pane>
              <Tab.Pane eventKey='billing'>Billing</Tab.Pane>
              <Tab.Pane eventKey='notifications'>Notifications</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
