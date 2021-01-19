import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: 'Admin', label: 'Admin' },
  { value: 'View', label: 'View' },
  { value: 'Edit', label: 'Edit' },
  { value: 'RemoveUser', label: 'Remove User' },
];

const customStyles = {
  control: () => ({
    width: '100%',
    display: 'flex',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: 14,
    height: 32,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#333' : '#333',
    backgroundColor:
      state.isFocused && !state.isSelected
        ? '#eee'
        : state.isSelected
        ? '#dae0e5'
        : '#eee',
    padding: 5,
  }),
};

const members = [
  { name: 'Sara P.', email: 'Sarap@gmail.com', select: options[0] },
  { name: 'Daniel W.', email: 'wdan@hotmail.com', select: options[1] },
  { name: 'James C.', email: 'jcamp@gmail.com', select: options[2] },
];

export const Profile = () => {
  return (
    <div>
      <h4 className='text-capitalize mb-4'>Profile & Organization</h4>
      <div>
        <Form>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>Name</Form.Label>
              <Form.Control size='sm' type='text' />
            </Form.Group>
          </Col>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>Email</Form.Label>
              <Form.Control size='sm' type='Email' />
            </Form.Group>
          </Col>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>Phone</Form.Label>
              <Form.Control size='sm' type='number' />
            </Form.Group>
          </Col>

          <Col className='px-0' md={10} lg={8} xl={6}>
            <Form.Group>
              <Form.Label className='small'>Organization Members</Form.Label>
              <div className='text-uppercase'>GQ</div>

              <div className='border p-2 small mt-2'>
                {members.map((value) => (
                  <div className='row align-items-center my-2'>
                    <div className='col-12 col-md-4 mt-3 mt-md-0'>
                      {value.name}
                    </div>
                    <div className='col-12 col-md-4 mt-3 mt-md-0'>
                      {value.email}
                    </div>
                    <div className='col-12 col-md-4 mt-3 mt-md-0'>
                      <Select
                        styles={customStyles}
                        options={options}
                        defaultValue={value.select}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
