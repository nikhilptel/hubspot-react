import React from 'react';
import './style.css'



function ThreeCard({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,
  );
  
  return (
    
    <section class="community-section">
      <div class="page-center">
        <div class="inner-community-container">
          <div class="community-heading">
            <h2>{moduleData.heading}</h2>
          </div>
          <div class="community-content">
            <p class="p">{moduleData.subtitle}</p>
          </div>

          <div className="card-container community-card">
      {moduleData.card.map((card, index) => (
        <div key={index} className="card inner-community-card">
          <img src={card.card_image.src} alt={card.card_image.alt} width={card.card_image.width} height={card.card_image.height} />
          <h3>{card.card_title}</h3>
          <div dangerouslySetInnerHTML={{ __html: card.card_paragraph_text }} />
        </div>
      ))}
    </div>
          </div>
          </div>
          </section>
 
  );
}

export default ThreeCard;
