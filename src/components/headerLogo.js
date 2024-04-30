import React from "react";

function Logo(props) {
  return (
    <div className="headerLogo">
        <a href={props.href}>
      <img src={props.url} alt={props.alt} />
      </a>
    </div>
  );
}

export default Logo;

