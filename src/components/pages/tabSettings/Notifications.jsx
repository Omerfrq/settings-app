import { Button, Col, Form } from 'react-bootstrap';
import React from 'react';

export const Notifications = () => {
  return (
    <div>
      <h4 className='text-capitalize mb-4'>Notifications</h4>
      <div>
        <Form>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>Billing Alerts</Form.Label>
              <Form.Check
                className='small'
                type='switch'
                id='custom-switch-1'
                label='Enabled'
              />
            </Form.Group>
          </Col>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>Disabled Tag Alerts</Form.Label>
              <Form.Check
                className='small'
                type='switch'
                id='custom-switch-2'
                label='Enabled'
              />
            </Form.Group>
          </Col>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>
                Organization Member Updates
              </Form.Label>
              <Form.Check
                className='small'
                type='switch'
                id='custom-switch-3'
                label='Enabled'
              />
            </Form.Group>
          </Col>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>
                New Features and Updates
              </Form.Label>
              <Form.Check
                className='small'
                type='switch'
                id='custom-switch-4'
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
