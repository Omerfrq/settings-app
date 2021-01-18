import { Pagination, Table } from 'react-bootstrap';
import { SelectCustom } from '../select/SelectCustom';

const searchFilters = [
  { title: 'Color', name: 'white' },
  { title: 'Fit', name: 'Relaxed' },
  { title: 'type', name: 'Sweatershirt' },
  { title: 'season', name: 'AW2020' },
  { title: 'Collection', name: 'Main' },
];

const tableArr = [
  { status: 'badge-success rounded-circle' },
  { status: 'badge-danger rounded-circle' },
  { status: 'rounded-0 btn-light active' },
];

export default function Library() {
  return (
    <div className='panel-content h-100 d-flex flex-column'>
      <div className='row'>
        <div className='col-12 col-md-8 mb-3 mb-md-0'>
          <SelectCustom />
        </div>
        <div className='col-6 col-md-2'>
          <button type='button' className='btn btn-primary btn-block'>
            Apply
          </button>
        </div>

        <div className='col-6 col-md-2 ml-auto text-right'>
          <small>
            <span>Export:</span>{' '}
            <a href='#' className='text-underline active'>
              CSV
            </a>
          </small>
        </div>
      </div>

      <div className='small mt-3'>
        <small>Search filters:</small>
        <div className='row mx-0 mt-2'>
          {searchFilters.map((value) => (
            <button className='btn btn-light px-2 py-0 mr-1 mb-1'>
              <div className='d-flex align-items-center text-muted'>
                <span className='small'>
                  <small className='font-weight-bold text-capitalize'>
                    {value.title}: {value.name}
                  </small>
                </span>
                <span className='ml-2 h5 mb-0'>&times;</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className='mt-5'>
        <Table bordered hover className='small border-0'>
          <thead className='small'>
            <tr>
              <th className='border-0 active'>
                <div>
                  <span>Date Added</span>
                  <span className='arrow down ml-1 mb-1'></span>
                </div>
              </th>
              <th className='border-0'>Display Title</th>
              <th className='border-0'>Price</th>
              <th className='border-0'>Destination URL</th>
              <th className='border-0'>Content URL</th>
              <th className='border-0 pl-0'>Status</th>
            </tr>
          </thead>
          <tbody className='small'>
            {tableArr.map((value) => (
              <tr>
                <td className='p-0' style={{ height: 28 }}>
                  <div className='d-flex h-100 align-items-center px-2'>
                    12/12/2020
                  </div>
                </td>
                <td className='p-0' style={{ height: 28 }}>
                  <div className='d-flex h-100 align-items-center px-2'>
                    Cool Shoes
                  </div>
                </td>
                <td className='p-0' style={{ height: 28 }}>
                  <div className='d-flex h-100 align-items-center px-2'>
                    $600.00
                  </div>
                </td>
                <td className='p-0' style={{ height: 28 }}>
                  <div className='d-flex h-100 align-items-center px-2'>
                    https://nike.co...
                  </div>
                </td>
                <td className='p-0' style={{ height: 28 }}>
                  <div className='d-flex h-100 align-items-center px-2'>
                    https://gq.co...
                  </div>
                </td>
                <td className='p-0' style={{ height: 28, width: 1 }}>
                  <div className='d-flex h-100 align-items-center px-2'>
                    <div className='border-right pr-2 h-100 d-flex align-items-center'>
                      <span
                        className={`badge ${value.status} d-flex`}
                        style={{ height: 10, width: 10 }}
                      ></span>
                    </div>
                    <div className='border-right px-2 h-100 d-flex align-items-center'>
                      <button type='button' className='btn p-0'>
                        <img
                          src={
                            require('../../images/library/icon-1.svg').default
                          }
                          alt='edit'
                        />
                      </button>
                    </div>
                    <div className='pl-2 h-100 d-flex align-items-center'>
                      <button type='button' className='btn p-0'>
                        <img
                          src={
                            require('../../images/library/icon-2.svg').default
                          }
                          alt='edit'
                        />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className='ml-auto mt-auto'>
        <Pagination size='sm'>
          <Pagination.First />
          {/* <Pagination.Prev /> */}
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{14}</Pagination.Item>
          <Pagination.Item>{15}</Pagination.Item>
          <Pagination.Item>{16}</Pagination.Item>
          {/* <Pagination.Next /> */}
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}
