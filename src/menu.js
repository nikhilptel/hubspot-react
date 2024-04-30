import React from 'react';
import Logo from './components/headerLogo';
import './App.scss';




function Header({ moduleData }) {
  // eslint-disable-next-line no-console
  console.log(
    'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
    moduleData,moduleData.logo_image.src
  );
  return (
    <div className="cms-react-hedaer">

    <Logo url={moduleData.logo_image.src} alt={moduleData.logo_image.alt} href={moduleData.logo_link.url.href}/>
   <div class="navigation-menu">
   
   </div>
    </div>
  );
}

export default Header;