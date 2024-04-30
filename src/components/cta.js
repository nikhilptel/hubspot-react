import React, { useEffect } from 'react';

function CtaComponent({ portalId, ctaId }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hscta.net/cta/current.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.cta.load(portalId, ctaId, {});
      }
    });

    return () => {
      // Cleanup: remove the script element when the component unmounts
      document.body.removeChild(script);
    };
  }, [portalId, ctaId]);

  return (
    <div className="cta-container">
     
    </div>
  );
}

export default CtaComponent;
