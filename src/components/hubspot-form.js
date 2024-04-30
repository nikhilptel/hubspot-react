import React, { useEffect } from "react";

const HubspotContactForm = ({ portalId, formId }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: portalId,
                    formId: formId,
                    target: '#hubspotFormContainer'
                });
            }
        });

        return () => {
            document.body.removeChild(script);
        };
    }, [portalId, formId]);

    return (
        <div id="hubspotFormContainer"></div>
    );
};

export default HubspotContactForm;