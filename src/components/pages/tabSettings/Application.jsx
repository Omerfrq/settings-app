import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: 'DarkTransperent', label: 'Dark Transperent' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
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
};

export const Application = () => {
  return (
    <div>
      <h4 className='text-capitalize mb-4'>Application Settings</h4>
      <div>
        <Form>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>
                Verified Enabled Domains
              </Form.Label>
              <Form.Control
                size='sm'
                type='text'
                value='gq.com'
                placeholder='Verified Enabled Domains'
              />
              <span
                className='position-absolute'
                style={{ top: '54%', right: 12 }}
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
              <Form.Label className='small'>Default Tag Styling</Form.Label>
              <Select
                styles={customStyles}
                options={options}
                placeholder='Default Tag Styling'
              />
            </Form.Group>
          </Col>
          <Col className='px-0' md={6} lg={4} xl={3}>
            <Form.Group>
              <Form.Label className='small'>Google Analytics ID</Form.Label>
              <Form.Control
                size='sm'
                type='text'
                value='UA-34756821'
                placeholder='Google Analytics ID'
              />
            </Form.Group>
          </Col>
          <Form.Group>
            <Form.Label className='small'>
              Your Domain Scopa Analytics Script
            </Form.Label>
            <Form.Control
              as='textarea'
              rows={7}
              placeholder='Your Domain Scopa Analytics Script'
              value='<!-- Start of Analytics script 
              --><script>var om681_15296,om681_15296_poll=function(){var
             r=0;return
             function(n,l){clearInterval(r),r=setInterval(n,l)}}();!function(e,t,n){if(e.getElementById(n)){om681_15296_poll(function(){if(window[‘om_loaded’]){if(!om681_15296){om681_15296=new
              AnalyticsApp();return
             om681_15296.init({“a”:15296,“staging”:0,“dev”:0,“beta”:0});}}},25);return;}var
              d=false,o=e.createElement(t);o.id=n,o.src=“https://a.optmstr.com/app/js/api.min.js”,o.async=true,o.onload=o.onreadystatechange=function(){if(!d){if(!this.readyState||this.readyState===“loaded”||this.readyState===“complete”){try{d=om_loaded=true;om681_15296=newScopaAnalyticsApp();om681_15296.init({“a”:15296,“staging”:0,“dev”:0,“beta”:0});o.onload=o.onreadystatechange=null;}catch(t){}}}};(document.getElementsByTagName(“head”)[0]||document.documentElement).appendChild(o)}(document,“script”,“omapi-script”);</script><!--
              / End of  Analytics script --> '
            />
          </Form.Group>
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
