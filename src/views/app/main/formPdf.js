import React from 'react';
import { useForm } from 'react-hook-form';

import logoMediclarForm from '../../../img/logoForm.jpg'
import backgroundForm from '../../../img/background-form.jpg'

import imagenCRT from '../../../img/imagenCRT.jpg'
import imagenCRTValor from '../../../img/imagenCRTValor.jpg'

import '../../../styles/stylePrinter.css'

const FormPdf = () => {


    const{register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data, e) => {
        e.target.reset()
        console.log(data)
    }


    return(
        <div className="container-primary-print">

            <div className="container-background-print">
                <img src={ backgroundForm } alt="background"/>
            </div>

            <div className="overlay-header-print"></div>



            <div className="container-print-primary">

                <div align="center" className="container-print-logo">

                    <p className="title-record-number">No. De Registro</p>
                    <p className="number-registro">100253</p>
                    
                    <img className="logo-print" src={ logoMediclarForm } alt="logo"/>
                    <p className="title-logo-print">DOCUMENTO DE INTERPRETACIÓN DE RESULTADO</p>
                </div>

            
                <div className="container-print">

                    <form className="form" onSubmit={ handleSubmit( onSubmit ) }>

                        <div className="container-info-prymari"> 

                            <div className="containerInfo">
                                <div className="">
                                    <p>Nombre(s)</p>   
                                                                                            
                                    <div className="container-printer">
                                        <p>Flavio</p>
                                    </div>
                                </div>
                            </div>

                            <div className="containerInfo">
                                <div className="">
                                    <p>Primer Apellido</p>   
                                                                                            
                                    <div className="container-printer">
                                        <p>Torres</p>
                                    </div>
                                </div>
                            </div>

                            <div className="containerInfo">
                                <div className="">
                                    <p>Segundo Apellido</p>   
                                                                                            
                                    <div className="container-printer">
                                        <p>González</p>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="container-info-prymari"> 

                            <div className="containerInfo">
                                <div className="">
                                    <p>Fecha de nacimiento</p>   
                                                                                            
                                    <div className="container-printer">
                                        <p>19 / DIC / 1984</p>
                                    </div>
                                </div>
                            </div>

                            <div className="containerInfo">
                                <div className="">
                                    <p>CURP</p>   
                                                                                            
                                    <div className="container-printer">
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>

                            <div className="containerInfo">
                                <div className="">
                                    <p>Género</p>   
                                                                                            
                                    <div className="container-printer">
                                        <p>Masculino</p>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="container-info-prymari"> 

                            <div className="containerInfo">
                                <div className="">
                                    <p>Pasaporte(s)</p>   
                                                                                            
                                    <div className="container-printer">
                                        <p>GP938903</p>
                                    </div>
                                </div>
                            </div>

                            <div className="containerInfo">
                                <div className="">
                                    <p>E-mail</p>   
                                                                                            
                                    <div className="container-printer">
                                        <p>flavio.tg@mediclarlab.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="containerInfo-tlf-primary">
                                <div className="containerInfo-tlf">
                                    <p>Teléfono</p>   
                                                                                            
                                    <div className="container-printer-code">
                                        <p>+52</p>
                                    </div>
                                    <div className="container-printer-tlf">
                                        <p>33 1551 1563</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        <div className="container-block-primary">

                            <div className="container-block">

                                <div className="container-proof">

                                    <div className="container-reason-control-primary">
                                            
                                            <div className="containerMotive">
                                                <div className="">
                                                    <p>Motivo por el cual se esta haciendo una prueba:</p>   
                                                                                                            
                                                    <div className="container-printer">
                                                        <p>Voy de Viaje</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="containerTipe">
                                                <div className="">
                                                    <p>Tipo de prueba </p>   
                                                                                                            
                                                    <div className="container-printer">
                                                        <p>PCR</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>








                                    <div className="container-date">

                                        <div className="container-date-time-primary">

                                        <div className="container-date-time">

                                                <label
                                                    htmlFor="fecha" 
                                                    className="label-form"
                                                >
                                                    Fecha:
                                                </label>

                                                <div className="container-printer">
                                                    <p>25/07/2021</p>
                                                </div>

                                            </div>


                                            <div className="container-date-time">

                                                <label
                                                    htmlFor="hora" 
                                                    className="label-form"
                                                >
                                                    Hora:
                                                </label>

                                                <div className="container-printer">
                                                    <p>2:25pm</p>
                                                </div>

                                            </div>

                                        </div>
                                        

                                        <div className="container-passenger">

                                            <label
                                                htmlFor="resultado" 
                                                className="label-form"
                                            >
                                                Resultado:
                                            </label>

                                                <div className="container-printer">
                                                    <p>54545</p>
                                                </div>
                                        </div>

                                    </div>


                                    <div className="container-result-primary">
                                        
                                        <table>
                                            <thead>
                                                <tr>   
                                                    <th className="container-title-result">
                                                        <p className="title-line-c">Línea de control C</p>
                                                        <p className="title-line-t">Línea de control T</p>
                                                    </th>
                                                    
                                                    <th>Recomendación</th>
                                                    <th>Resultados</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr>
                                                    <td className="resultCRT">
                                                        <div className="resultTitle"><p>NEGATIVO</p></div>
                                                        <div className="resultCRT-Negative"><img src={imagenCRT} alt="imagenCRT" /></div>
                                                    </td>
                                                    <td>No se requiere aislamiento, ni tratamiento medico. Debe continuar con las medida preventivas de sana distancia, uso de cubrebocas y lavado de manos.</td>
                                                    <td>
                                                        <input
                                                        type="radio"
                                                        name="resultado"
                                                        value="No se requiere aislamiento, ni tratamiento medico. Debe continuar con las medida preventivas de sana distancia, uso de cubrebocas y lavado de manos."
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="resultCRT">
                                                        <div className="resultTitle"><p>POSITIVO</p></div>
                                                        <div className="resultCRT-Positive"><img src={imagenCRTValor} alt="imagenCRT" /></div>
                                                    </td>
                                                    <td>Se recomienda aislar 14 días de acuerdo a la evolución. En caso de presentar síntomas consultar a su medico especialista.</td>
                                                    <td>
                                                        <input
                                                        type="radio"
                                                        name="resultado"
                                                        value="Se recomienda aislar 14 días de acuerdo a la evolución. En caso de presentar síntomas consultar a su medico especialista."
                                                        />
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>


                                    </div>
                                    
                                </div>     






                                <div className="container-sample">


                                    <div className="container-sample-result">
                                        <p className="sample-result">Muestra de Resultados</p>

                                        <div className="container-primary-img">
                                            <div className="container-img"></div>
                                        </div>

                                    </div>
                            

                                </div>
                            </div>
                        </div>


                        <div className="container-btn-print">
                            <button className="btn-print">IMPRIMIR</button>
                            <button className="btn-cancel">CANCELAR</button>
                        </div>

                    </form>

            </div>

            <div className="footer-print">
                <p>© 2021 Mediclar es una marca registrada de Barter Box SA de CV</p>
            </div>
            
        </div>
    </div>
    )
}

export default FormPdf;