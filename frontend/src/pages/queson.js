import React from 'react';
import  '../styles/informate.css';


function Informate (){
    return (
        <div>
     <section className="informa">
          <h1>Informate</h1>
        </section>
    <section className="parrafo1">
        <p>Esta es una plataforma que por medio de un comunicado, permite mantener informados a los 
            ciudadanos de la zona noroccidental de medellin sobre el estado de sus servicios públicos, los usuarios podran informar las 
            dificultades que presentan los servicios públicos en la zona en que te encuentras.</p>
           </section>

         //ACÁ VA IMAGEN//

           <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>

    </div>

      
    );
    
}
export default Informate;