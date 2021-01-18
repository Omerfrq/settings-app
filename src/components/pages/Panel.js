import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../../css/panel.css';

export default function Panel({ component: Component }) {
  let location = useLocation();
  location = location.pathname.split('/');

  return (
    <div className='panel'>
      <Row className='m-0 p-0 h-100'>
        <Col xs={12} className='p-0'>
          <p className='panel-address-bar'>
            <span className='font-weight-bold text-muted'>{location[1]}</span>
            {/* <span className='mx-2'>{`>`}</span> */}
            <span>{location[2]}</span>
          </p>
          <div className='panel-body h-100'>
            <Component />
          </div>
        </Col>
      </Row>
    </div>
  );
}
