import React from 'react';
import { useUI } from '../../context/UIContext';
import { ui } from '../../i18n/ui';
import '../../css'; // eslint-disable-line no-unused-vars

function NombreContainer() {
  const { lang } = useUI();
  const t = ui[lang];
  return (
    <div className='nombre__contaniner'>
      <h3 className='saludo'>{t.greeting}</h3>
      <h3 className='nombre'>Ramiro Santamaria</h3>
      <h3 className='puesto'>{t.jobTitle}</h3>
      <h3 className='puesto puesto__second'>{t.jobTitle2}</h3>
    </div>
  );
}

export default NombreContainer;
