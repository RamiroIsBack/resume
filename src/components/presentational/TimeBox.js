import React from 'react';
import LazyLoad from 'react-lazy-load';

function TimeBox({ copy, urlClick }) {
  const pointer = { cursor: copy.urlLink === 'falta' ? 'auto' : 'pointer' };
  return (
    <div className='leaf__container'>
      <div className='timeBox__headline__container'>
        <h3
          className='timeBox__name'
          style={pointer}
          onClick={() => urlClick(copy.urlLink)}
        >{copy.nombre}</h3>
        <div className='logo__photo__container'>
          <LazyLoad height={60} offsetVertical={200}>
            <img
              className='logo__photo'
              src={copy.urlPic}
              alt=''
              style={pointer}
              onClick={() => urlClick(copy.urlLink)}
            />
          </LazyLoad>
        </div>
      </div>
      <div className='fecha_container'>
        <h3 className='fecha__inicio'>{copy.fechaInicio} -</h3>
        <h3 className='fecha__fin'>{'-> '}{copy.fechaFin}</h3>
      </div>
      <div className='description__container'>
        {copy.description.split('\n').map((item, key) => (
          <span className='description__text' key={key}>{item}<br /></span>
        ))}
      </div>
    </div>
  );
}

export default TimeBox;
