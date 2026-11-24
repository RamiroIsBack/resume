import React from 'react';
import { localize } from '../../utils/localize';

function TimeBox({ copy, urlClick, lang }) {
  const nombre      = localize(copy, 'nombre', lang);
  const description = localize(copy, 'description', lang);
  const fechaFin    = localize(copy, 'fechaFin', lang);
  const pointer = { cursor: copy.urlLink === 'falta' ? 'auto' : 'pointer' };
  return (
    <div className='leaf__container'>
      <div className='timeBox__headline__container'>
        <h3
          className='timeBox__name'
          style={pointer}
          onClick={() => urlClick(copy.urlLink)}
        >{nombre}</h3>
        <div className='logo__photo__container'>
          {copy.urlPic && (
            <img
              className='logo__photo'
              src={copy.urlPic}
              alt=''
              height='60'
              loading='lazy'
              decoding='async'
              style={pointer}
              onClick={() => urlClick(copy.urlLink)}
            />
          )}
        </div>
      </div>
      <div className='fecha_container'>
        <h3 className='fecha__inicio'>{copy.fechaInicio} -</h3>
        <h3 className='fecha__fin'>{'-> '}{fechaFin}</h3>
      </div>
      <div className='description__container'>
        {description.split('\n').map((item, key) => (
          <span className='description__text' key={key}>{item}<br /></span>
        ))}
      </div>
    </div>
  );
}

export default TimeBox;
