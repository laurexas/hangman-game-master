import React from 'react';
import  './index.css';


const Loader = (props) => {
  if(props.loading){
    return (
      <div className={`lds_ripple ${props.className}`}>
        <div/>
        <div/>
      </div>
    )
  }else{
    return null
  }
};


export default Loader;