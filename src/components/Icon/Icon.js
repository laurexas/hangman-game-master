import React from 'react';
import sprites from '../Assets/icons/sprite-sheet.svg';


const Icon = ({icon, className,style, onClick,disableOutsideClick}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         style={style}
         onClick={onClick}
         data-outsideclick={disableOutsideClick ? 'disabled':''}
         className={className}>
      <use xlinkHref={sprites+'#'+icon}
        data-outsideclick={disableOutsideClick ? 'disabled':''}
      />
    </svg>
  )
};


export default Icon;