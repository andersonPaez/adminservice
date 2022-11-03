import React from 'react';
import { Link } from 'react-router-dom';

export default function ContentHeader({titulo,pathName,path, current}){



  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>{titulo}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <Link to={path}>{pathName}</Link>
              </li>
              <li className="breadcrumb-item active">{current}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
