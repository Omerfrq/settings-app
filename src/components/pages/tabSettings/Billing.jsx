import React from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const tableArr = [{}, {}, {}];

export const Billing = () => {
  return (
    <div>
      <h4 className='text-capitalize mb-4'>Billing & Invoices</h4>
      <div>
        <Form>
          <Col className='px-0' md={10} lg={8} xl={6}>
            <Row>
              <Col md={6} xl={4}>
                <div className='mb-2 mb-md-0 small'>
                  <h6 className='font-weight-bold'>Subscription</h6>
                  <div>
                    <span>⭐️</span>
                    <span>Preferred Pro</span>
                  </div>
                  <div className='font-italic'>Next invoice 05/05/2021</div>
                  <Link className='text-underline'>Change</Link>
                </div>
              </Col>
              <Col md={6} xl={4}>
                <div className='mb-2 mb-md-0 small'>
                  <h6 className='font-weight-bold'>Payment Method</h6>
                  <div>
                    <span>Visa</span>
                  </div>
                  <div className='font-italic'>•••• •••• •••• 5512</div>
                  <Link className='text-underline'>Change</Link>
                </div>
              </Col>
            </Row>

            <div className='mt-5'>
              <Table hover className='small border-0'>
                <thead className='small'>
                  <tr>
                    <th className='border-0'>Invoice Date</th>
                    <th className='border-0'>Subscription</th>
                    <th className='border-0'>Amount</th>
                    <th className='border-0'></th>
                  </tr>
                </thead>
                <tbody className='small border-bottom'>
                  {tableArr.map((value) => (
                    <tr>
                      <td className='p-0' style={{ height: 28 }}>
                        <div className='d-flex h-100 align-items-center px-2'>
                          12/12/2020
                        </div>
                      </td>
                      <td className='p-0' style={{ height: 28 }}>
                        <div className='d-flex h-100 align-items-center px-2'>
                          Preferred Pro
                        </div>
                      </td>
                      <td className='p-0' style={{ height: 28 }}>
                        <div className='d-flex h-100 align-items-center px-2'>
                          $600.00
                        </div>
                      </td>
                      <td className='p-0' style={{ height: 28 }}>
                        <div className='d-flex h-100 align-items-center px-2'>
                          <Link className='text-underline'>View</Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
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
