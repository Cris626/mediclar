import React from 'react';

const CreatePlaces = props => {

    const handleNext=()=>{
        let {history} = props;
        history.push('/mediclar/app/places/register-successful')
    }

    return(
        <div>
            <h1>AGREGAR LUGARES DE ORIGEN</h1>
            <button onClick={()=> handleNext()}>ACEPTAR</button>
        </div>
    )
}

export default CreatePlaces;