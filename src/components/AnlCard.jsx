import React from 'react';

function AnlCard({title, url, text, sectext}) {
  return (
    <div className="card mb-3" style={{ maxWidth: '1500px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={url}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="anl-title">{title}</h2>
            <p className="card-text">
              {text}
              </p>
            <p className="card-text">
              <small className="text-body-secondary">{sectext}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnlCard;
