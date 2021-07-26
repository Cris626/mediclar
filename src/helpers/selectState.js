import React, {useEffect, useState} from 'react';
import Select from 'react-select';

const SelectStates = props => {
    const [states, setStates] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [municipio, setMunicipio] = useState();

    useEffect(()=>{
        setTimeout(() => {
            selectStates();
            
        }, 1000);
    },[])

    const selectStates = () => {
        let { data } = props;
        let resulData = [];
        if(data!==undefined){
            data.map(x=>{
                resulData.push({ label: x.estado, value: x.id, key: x.id })
            });
            setStates(resulData);
        }
    }

    let selectCity = (id) => {
        let { data } = props;
        let resulData = [];
        if(data!==undefined){
            data.map(x=>{
                if(x.id===id){
                    x.municipios.map(y=>{
                        resulData.push({ label: y.municipio, value: y.id, key: y.id})
                    })
                }
            })
        }
        setCity(resulData);
    }
    
    return(
        <div>
            <Select
                className="select-state"
                placeholder="Seleccionar"
                options={states}
                value={state}
                onChange={value=>selectCity(value.value)}
            />
            <Select
                className="select-state"
                placeholder="Seleccionar"
                options={city}
                value={municipio}
                onChange={value=>setMunicipio(value)}
            />
            <button onClick={()=> console.log(props.data)}>Eliminar</button>
        </div>
    )
}

export default SelectStates;