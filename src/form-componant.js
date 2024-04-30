import React from 'react';
import './style.css';
import HubspotContactForm from './components/hubspot-form';
import HubspotForm from 'react-hubspot-form'



function Form({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  
  return (
 <HubspotContactForm portalId="476360"  formId={moduleData.form_field.form_id} /> 

   );
}

export default Form;
