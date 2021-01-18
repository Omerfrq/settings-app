import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export const Password = () => {
  return (
    <div>
      <h4 className='text-capitalize mb-4'>Application Settings</h4>
      <div>
        <Form>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>Old Password</Form.Label>
              <Form.Control size='sm' type='password' />
              <span
                className='position-absolute'
                style={{ top: '54%', right: -33 }}
              >
                <img
                  src={require('../../../images/main/error.svg').default}
                  alt='checked'
                />
              </span>
            </Form.Group>
          </Col>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>New Password</Form.Label>
              <Form.Control size='sm' type='password' />
              <span
                className='position-absolute'
                style={{ top: '54%', right: -33 }}
              >
                <img
                  src={require('../../../images/main/check.svg').default}
                  alt='checked'
                />
              </span>
            </Form.Group>
          </Col>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>Confirm New Password</Form.Label>
              <Form.Control size='sm' type='password' />
              <span
                className='position-absolute'
                style={{ top: '54%', right: -33 }}
              >
                <img
                  src={require('../../../images/main/check.svg').default}
                  alt='checked'
                />
              </span>
            </Form.Group>
          </Col>

          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>2 Factor Authentication</Form.Label>
              <Form.Check
                className='small'
                type='switch'
                id='custom-switch'
                label='Enabled'
              />
            </Form.Group>
          </Col>
          <div className='d-flex mt-4 mb-2'>
            <Button variant='outline-dark' type='button' className='px-5 mr-3'>
              Cancel
            </Button>
            <Button variant='primary' type='submit' className='px-5'>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
