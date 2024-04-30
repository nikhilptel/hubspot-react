import React from 'react';
import './style.css'
import CtaComponent from './components/cta';


function TwoColumnZigzag({ moduleData }) {
// eslint-disable-next-line no-console
console.log(
  'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
  moduleData,
);
const containerClassName = moduleData.swap_image_right ? "inner-two-column-container reversed d-flex flex-wrap" : "inner-two-column-container d-flex flex-wrap";
return (
  
  <section class="two-column-section">
  <div class="page-center">
    <div class={containerClassName}>
      <div class="two-column-image-side">
        <div class="inner-two-column-image-side">
          <div class="two-column-image">
            <img src={moduleData.image_field.src} alt="image"/>
          </div>
        </div>
      </div>
      <div class="two-column-content-side d-flex flex-wrap">
        <div class="inner-two-column-content-side">
          <div class="two-column-heading">
            <h2>{moduleData.heading}</h2>
          </div>
          <div class="two-column-content" dangerouslySetInnerHTML={{ __html: moduleData.paragraph_text }}>
            
          </div>
          <div class="two-column-btn">
              {moduleData.add_buttons.filter(button => button.choose_custom_button_or_cta_button === "custom-button").map((button, index) => (
                <a
                  key={index}
                  href={button.add_button.link_field.url.href}
                  className={`button ${button.add_button.button_style} ${button.add_button.button_size ? `${button.add_button.button_size}` : ''}`}
                >
                  {button.add_button.button_name}
                </a>


              ))}

              {moduleData.add_buttons.filter(button => button.choose_custom_button_or_cta_button === "cta-button").map((button, index) => (
                <CtaComponent key={index} portalId='476360' ctaId='158818054034' />

              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

export default TwoColumnZigzag;
