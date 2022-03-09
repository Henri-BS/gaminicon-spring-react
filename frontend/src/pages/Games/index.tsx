import Article from 'components/Article';
import Form from 'components/Form/index ';
import React from 'react';

export default function Game() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <Form />
        </div>
        <div className="col-sm-6 col-md-8 col-lg-9">
          <Article />
        </div>
      </div>
      </div>
    </>
  );
}