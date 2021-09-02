import React from 'react';
import './WeatherApp.scss';


function Modal ({message,active}) {
   if(active) {
       return(
            <div className="modal">
                <h1>{message}</h1>
            </div>
       )
   }else{
       return null
   }
}
export default Modal;