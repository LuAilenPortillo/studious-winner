import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <div>
        <nav>
          <div className="d-flex flex-row mb-3 justify-content-center">
            <div className="p-2">¿Querés adoptar?</div>
            <div className="p-2">¿Querés visitarnos?</div>
            <div className="p-2">¿Querés colaborar?</div>
          </div>
        </nav>
    </div>
  );
};

export default Header;
