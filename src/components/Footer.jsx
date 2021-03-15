import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

export default function Footer() {
  return (
    <div className="footer">
      <span>Copyright 2016-18 Company. All Rights Reserved.</span>

      <div className="float-right">
        <span className="footer-link">
          <Link to={routes.PRIVACY}>Privacy Policy</Link>
        </span>
        <span className="footer-link">
          <Link to={routes.TERMS}>Terms of Service</Link>
        </span>
        <span className="footer-link">
          <Link to={routes.HELP}>Help Center</Link>
        </span>
      </div>
    </div>
  );
}
