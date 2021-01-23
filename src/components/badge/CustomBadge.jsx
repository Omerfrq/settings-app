import React from 'react';

const badgeItems = [
  { label: 'Color', value: 'White' },
  { label: 'Fit', value: 'Relaxed' },
  { label: 'Type', value: 'Sweatershirt' },
  { label: 'Collection', value: 'Main' },
  { label: 'Brand', value: 'Gap Kids' },
  { label: 'Product', value: 'Ultra Boost' },
  { label: 'Brand', value: 'New Balance' },
  { label: 'Medium', value: 'Website' },
];

export const CustomBadge = () => {
  return (
    <>
      <div className='row mx-0 mt-2'>
        {badgeItems.map((value) => (
          <button className='btn btn-light px-2 py-0 mr-1 mb-1'>
            <div className='d-flex align-items-center text-muted'>
              <span>
                <small className='font-weight-bold text-capitalize'>
                  {value.label}: {value.value}
                </small>
              </span>
              <span className='ml-2 h5 mb-0'>&times;</span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};
