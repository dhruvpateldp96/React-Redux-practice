import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              Sumit Rawat
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external data API hosted on Github
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
