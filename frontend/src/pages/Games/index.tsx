import Article from 'components/Article';
import Form from 'components/Form/index ';
import React from 'react';

export default function Game() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-md-6 col-lg-4">
          <Form />
        </div>
        <div className="col-sm-8 col-md-6 offset-md-2 col-lg-8 offset-lg-0">
          <Article />
        </div>
      </div>
      </div>
    </>
  );
}