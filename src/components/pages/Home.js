import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CustomBadge } from '../badge/CustomBadge';
import { SelectCustom } from '../select/SelectCustom';

const notificationArr = [{}, {}, {}];

const organizationTag = [
  {
    title: 'Enabled Tags',
    value: '310',
    percentage: '12',
    percentageClassName: `text-success align-items-center`,
    arrow: ` border-success up`,
  },
  {
    title: 'Sample Text',
    value: '$109,0040',
    percentage: '7',
    percentageClassName: `text-success align-items-center`,
    arrow: ` border-success up`,
  },
  {
    title: 'Sample Text',
    value: '5.56%',
    percentage: '2',
    percentageClassName: `text-danger`,
    arrow: ` border-danger down`,
  },
  {
    title: 'Sample Text',
    value: '725',
    percentage: '213',
    percentageClassName: `text-success align-items-center`,
    arrow: ` border-success up`,
  },
];

export default function Home() {
  const [selectedItems, setSelectedItems] = useState([]);

  const removeItems = (label) => {
    const filtered = selectedItems.filter((value) => value.label !== label);
    setSelectedItems(filtered);
  };
  return (
    <div className='panel-content'>
      <section>
        <h4 className='mb-3'>Welcome back!</h4>

        <Row>
          <Col xs={12} lg={8} xl={9} className='d-flex flex-column'>
            <div className='border shadow-sm rounded p-4'>
              <h5 className='mb-3'>Tag Content</h5>

              <SelectCustom
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            </div>

            <div className='border shadow-sm rounded p-4 mt-3 flex-grow-1'>
              <h5 className='mb-3'>Browse Recent Attributes</h5>
              <CustomBadge />
            </div>
          </Col>
          <Col md={8} lg={4} xl={3} className='mx-auto'>
            <div className='border shadow-sm rounded mt-3 mt-lg-0'>
              <div className='d-flex justify-content-between pt-4 px-4'>
                <h5 className='mb-0'>Notifications</h5>
                <span>
                  <img
                    src={require('../../images/header/bell.svg').default}
                    alt='edit'
                  />
                </span>
              </div>
              {notificationArr.map((value) => (
                <div className='d-flex justify-content-between small border-bottom p-4'>
                  <span
                    className='badge badge-danger d-flex rounded-circle align-self-center'
                    style={{ height: 13, width: 15 }}
                  ></span>
                  <span className='font-weight-bold mx-3'>
                    Notification 1 message text here in sentence form.
                  </span>
                  <span className='small text-black-50 text-nowrap'>
                    45 min
                  </span>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12}>
            <div className='h5 my-4 mx-3'>
              <span> Organization Tag Activity </span>
              <span className='text-black-50 ml-2'>
                Last Updated Today May 25, 2021 at 12:00am
              </span>
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
              {organizationTag.map((value) => (
                <div className='col mb-3'>
                  <div className='border shadow-sm rounded p-4 text-center'>
                    <h6 className='mb-0 text-muted text-capitalize'>
                      {value.title}
                    </h6>
                    <h2 className='font-weight-bold my-2'>{value.value}</h2>
                    <div
                      className={`d-flex justify-content-center ${value.percentageClassName}`}
                    >
                      <span className='mr-2'>
                        <div className='d-flex flex-column align-items-center mt-1'>
                          <div className={`arrow-2${value.arrow}`}></div>
                          <div className={`arrow-2${value.arrow}`}></div>
                        </div>
                      </span>
                      <span>{value.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
