import React from 'react';

function ExpCard({url, name, title, text}) {
  return ( 
    <div className="card" style={{ width: '700px' }}>
        <div className='card-top'>
        <img src={url} className="card-img-top" style={{width: '260px'}} />
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className='card-title'>{title} </p>
        </div>
      </div>
   <hr />
      <p className="card-text">{text}</p>
    </div>
  );
}

export default ExpCard;
