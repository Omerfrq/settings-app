export default function Support() {
  return (
    <div className='panel-content h-100'>
      <section className='d-flex flex-column align-items-center justify-content-center text-center h-100'>
        <h5 className='mb-0'>
          <div className='text-muted mb-1'>
            Have a question? Try visiting our community
          </div>
          <span>
            <span className='text-muted'>for</span>
            <a
              href='/'
              className='text-capitalize font-weight-bold ml-1 text-body text-underline'
            >
              Frequently Asked Questions.
            </a>
          </span>
        </h5>
        <div className='my-5'>
          <span className='badge badge-danger rounded-lg p-4 mr-3'>
            <img
              height={35}
              width={35}
              src={require('../../images/main/support/question.svg').default}
              alt='question'
            />
          </span>
          <span className='text-muted h5 mb-0'>FAQ</span>
        </div>
        <h5 className='mb-0'>
          <div className='text-muted mb-1'>Can't find a solution?</div>
          <a
            href='/'
            className='text-capitalize font-weight-bold ml-1 text-body text-underline'
          >
            Email your success manager.
          </a>
        </h5>
      </section>
    </div>
  );
}
