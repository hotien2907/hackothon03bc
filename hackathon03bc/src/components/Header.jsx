import React from "react";

function Header({money}) {
  return (
    <header className="header">
      <p>
        To Spend <span>${money.toLocaleString()}</span> You have mney
      </p>
    </header>
  );
}

export default Header;
