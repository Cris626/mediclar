import React from 'react'
import { useForm } from 'react-hook-form';


import logoMediclarForm from '../../img/logoForm.jpg'
import backgroundForm from '../../img/background-form.jpg'

import imagenCRT from '../../img/imagenCRT.jpg'
import imagenCRTValor from '../../img/imagenCRTValor.jpg'

import '../form-admin/styleForm.css';

const FormAdmin = () => {

    const{register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit = (data, e) => {
        e.target.reset()
        console.log(data)
    }

    return (
        <div className="container-primary">

            <div className="container-background">
                <img className="background-login" src={ backgroundForm } alt="background"/>
            </div>

            <div className="overlay-header"></div>



            <div className="container-form-primary">

                <div align="center" className="container-logo">

                    <p className="titulo-numero-registro">No. De Registro</p>
                    <p className="numero-registro">100253</p>
                    
                    <img className="logo-login" src={ logoMediclarForm } alt="logo"/>
                    <p className="titulo-logo-login">DOCUMENTO DE INTERPRETACIÓN DE RESULTADO</p>
                </div>

                
                <div className="container-form">

                    <form className="form" onSubmit={ handleSubmit( onSubmit ) }>

                        <div className="container-block-primary">

                            <div className="container-block">

                                <div className="container-1">

                                    <label
                                        htmlFor="paciente" 
                                        className="label-form"
                                    >
                                        Paciente: (Nombre como se muestra en el pasaporte)
                                    </label>

                                    <input
                                        type="text"
                                        name="paciente"
                                        autoComplete="off"
                                        className="input-form-paciente"
                                        placeholder="Nombre Completo"

                                        {...register("paciente", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 25,
                                                message: 'Maximo 25 Caracteres'
                                            },
                        
                                            minLength:{
                                                value: 2,
                                                message: 'Minimo 2 Caracteres'
                                            },
                        
                                            pattern:{
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Error, Espacio solo para ingresar texto.'
                                            }
                        
                                        })}
                                    />


                                    <div className="container-1-1">

                                        <div className="container-pasiente">

                                            <label
                                                htmlFor="paciente" 
                                                className="label-form"
                                            >
                                                Fecha de nacimiento:
                                            </label>

                                            <input
                                                type="text"
                                                name="nacimiento"
                                                autoComplete="off"
                                                className="input-form-nacimiento"
                                                placeholder="DD / MM / YYYY"

                                                {...register("nacimiento", {
                                                    required:{
                                                        value: true,
                                                        message: 'Campo Requerido'
                                                    }, 

                                                    maxLength:{
                                                        value: 25,
                                                        message: 'Maximo 25 Caracteres'
                                                    },
                                
                                                    minLength:{
                                                        value: 2,
                                                        message: 'Minimo 2 Caracteres'
                                                    },
                                
                                                    pattern:{
                                                        value: /^[A-Za-z]+$/i,
                                                        message: 'Error, Espacio solo para ingresar texto.'
                                                    }
                                
                                                })}
                                            />
                                        </div>
                                        


                                        <div className="container-pasiente">

                                            <label
                                                htmlFor="Passport" 
                                                className="label-form"
                                            >
                                                CURP: (Passport)
                                            </label>

                                            <input
                                                type="text"
                                                name="passport"
                                                autoComplete="off"
                                                className="input-form-Passport"
                                                placeholder="Agregar…"

                                                {...register("passport", {
                                                    required:{
                                                        value: true,
                                                        message: 'Campo Requerido'
                                                    }, 

                                                    maxLength:{
                                                        value: 25,
                                                        message: 'Maximo 25 Caracteres'
                                                    },
                                
                                                    minLength:{
                                                        value: 2,
                                                        message: 'Minimo 2 Caracteres'
                                                    },
                                
                                                    pattern:{
                                                        value: /^[A-Za-z]+$/i,
                                                        message: 'Error, Espacio solo para ingresar texto.'
                                                    }
                                
                                                })}
                                            />
                                        </div>

                                    </div> 




                                    <div className="container-1-1">

                                        <div className="container-pasiente">

                                            <label
                                                htmlFor="genero" 
                                                className="label-form"
                                            >
                                                Género: (Gender)
                                            </label>


                                            <select
                                                name="genero"
                                                className="input-form-genero"
                                                {...register("genero", { 
                                                    required:{
                                                    message: 'Campo Requerido' 
                                                    }
                                                })}
                                                
                                            >
                                                <option value="">Selecciona...</option>
                                                <option value="Femenino">Femenino</option>
                                                <option value="Masculino">Masculino</option>

                                            </select>

                                        </div>



                                        <div className="container-pasiente">

                                            <label
                                                htmlFor="mail" 
                                                className="label-form"
                                            >
                                                E-mail:
                                            </label>

                                            <input
                                                type="text"
                                                name="mail"
                                                autoComplete="off"
                                                className="input-form-mail"
                                                placeholder="corre@electronico.com"

                                                {...register("mail", {
                                                    required:{
                                                        value: true,
                                                        message: 'Campo Requerido'
                                                    }, 

                                                    maxLength:{
                                                        value: 25,
                                                        message: 'Maximo 25 Caracteres'
                                                    },

                                                    minLength:{
                                                        value: 2,
                                                        message: 'Minimo 2 Caracteres'
                                                    },

                                                    pattern:{
                                                        value: /^[A-Za-z]+$/i,
                                                        message: 'Error, Espacio solo para ingresar texto.'
                                                    }

                                                })}
                                            />
                                        </div>

                                    </div>





                                    <div className="container-1-1">

                                        <div className="container-pasiente">

                                            <label
                                                htmlFor="mail" 
                                                className="label-form"
                                            >
                                                Confirmar E-mail:
                                            </label>

                                            <input
                                                type="conf-mail"
                                                name="nacimiento"
                                                autoComplete="off"
                                                className="input-form-mail"
                                                placeholder="corre@electronico.com"

                                                {...register("conf-mail", {
                                                    required:{
                                                        value: true,
                                                        message: 'Campo Requerido'
                                                    }, 

                                                    maxLength:{
                                                        value: 25,
                                                        message: 'Maximo 25 Caracteres'
                                                    },

                                                    minLength:{
                                                        value: 2,
                                                        message: 'Minimo 2 Caracteres'
                                                    },

                                                    pattern:{
                                                        value: /^[A-Za-z]+$/i,
                                                        message: 'Error, Espacio solo para ingresar texto.'
                                                    }

                                                })}
                                            />
                                        </div>






                                        <div className="container-pasiente">

                                            <div className="container-telefonos-primary">

                                                <div className="container-codigo-area">

                                                    <label
                                                        htmlFor="codigo-area" 
                                                        className="label-form"
                                                    >
                                                        Código:
                                                    </label>

                                                    <select
                                                        name="codigo-area"
                                                            className="input-form-telefono"
                                                            {...register("codigo-area", { 
                                                                required:{
                                                                message: 'Campo Requerido' 
                                                                }
                                                            })}
                                                            
                                                        >
                                                            <option value="">+000</option>
                                                            <option value="355">+51</option>
                                                            <option value="355">+54</option>
                                                            <option value="355">+55</option>
                                                            <option value="355">+56</option>
                                                            <option value="355">+57</option>
                                                            <option value="355">+58</option>
                                                            <option value="355">+500</option>
                                                            <option value="355">+591</option>
                                                            <option value="355">+592</option>
                                                            <option value="355">+593</option>
                                                            <option value="355">+594</option>
                                                            <option value="355">+595</option>
                                                            <option value="355">+596</option>
                                                            <option value="355">+597</option>
                                                            <option value="355">+598</option>
                                                    </select>

                                                    {/* <input
                                                        type="text"
                                                        name="codigo-area"
                                                        autoComplete="off"
                                                        className="input-form-telefono"
                                                        placeholder="+00 0"

                                                        {...register("codigo-area", {
                                                            required:{
                                                                value: true,
                                                                message: 'Campo Requerido'
                                                            }, 

                                                            maxLength:{
                                                                value: 25,
                                                                message: 'Maximo 25 Caracteres'
                                                            },

                                                            minLength:{
                                                                value: 2,
                                                                message: 'Minimo 2 Caracteres'
                                                            },

                                                            pattern:{
                                                                value: /^[A-Za-z]+$/i,
                                                                message: 'Error, Espacio solo para ingresar texto.'
                                                            }

                                                        })}
                                                    /> */}

                                                </div>

                                                <div className="container-telefonos">

                                                    
                                                    <label
                                                        htmlFor="codigo-area" 
                                                        className="label-form"
                                                    >
                                                        Teléfono:
                                                    </label>


                                                    <input
                                                        type="text"
                                                        name="telefono"
                                                        autoComplete="off"
                                                        className="input-form-telefono"
                                                        placeholder="000 00 0000 0000"

                                                        {...register("telefono", {
                                                            required:{
                                                                value: true,
                                                                message: 'Campo Requerido'
                                                            }, 

                                                            maxLength:{
                                                                value: 25,
                                                                message: 'Maximo 25 Caracteres'
                                                            },

                                                            minLength:{
                                                                value: 2,
                                                                message: 'Minimo 2 Caracteres'
                                                            },

                                                            pattern:{
                                                                value: /^[A-Za-z]+$/i,
                                                                message: 'Error, Espacio solo para ingresar texto.'
                                                            }

                                                        })}
                                                    />
                                                    
                                                </div>

                                            </div>
                                            
                                        </div>


                                    </div>




                                    <div className="container-motivo-control-primary">
                                        <p className="titulo-motivo">Motivo por el cual se esta haciendo una prueba:</p>
                                        
                                        <div className="container-motivo-control">
                                            

                                            <div className="container-motivo">
                                                
                                                <div className="container-radio-motivo">
                                                    <input
                                                        type= "radio"
                                                        value="voy a viajar"
                                                        name="motivo"
                                                        className="radio-control"
                                                    />
                                                    <label className="label-control">Voy a viajar</label>
                                                </div>
                                                
                                                <div className="container-radio-motivo">
                                                    <input
                                                        type= "radio"
                                                        value="tengo sintomas"
                                                        name="motivo"
                                                        className="radio-control"
                                                    />
                                                    <label className="label-control">Tengo sintomas</label>
                                                </div>

                                            </div>    
                                            


                                            <div className="container-control-primary">

                                                <p className="titulo-Control">Control</p>
                                                
                                                <div className="container-control">
                                                    
                                                    <div className="container-radio-control">
                                                        <input
                                                            type= "radio"
                                                            value="empresa"
                                                            name="control"
                                                            className="radio-control"
                                                        />
                                                        <label className="label-control">Empresa</label>
                                                    </div>
                                                    
                                                    <div className="container-radio-control">
                                                        <input
                                                            type= "radio"
                                                            value="escuela"
                                                            name="control"
                                                            className="radio-control"
                                                        />
                                                        <label className="label-control">Escuela</label>
                                                    </div>


                                                </div>
                                            </div>
                                            

                                        </div>

                                    </div>








                                    <div className="container-1-1">

                                        <div className="container-fecha-hora-primary">

                                           <div className="container-fecha-hora">

                                                <label
                                                    htmlFor="fecha" 
                                                    className="label-form"
                                                >
                                                    Fecha:
                                                </label>

                                                <input
                                                    type="conf-mail"
                                                    name="fecha"
                                                    autoComplete="off"
                                                    className="input-form-fecha"
                                                    placeholder="DD / MM / YYYY"

                                                    {...register("fecha", {
                                                        required:{
                                                            value: true,
                                                            message: 'Campo Requerido'
                                                        }, 

                                                        maxLength:{
                                                            value: 25,
                                                            message: 'Maximo 25 Caracteres'
                                                        },

                                                        minLength:{
                                                            value: 2,
                                                            message: 'Minimo 2 Caracteres'
                                                        },

                                                        pattern:{
                                                            value: /^[A-Za-z]+$/i,
                                                            message: 'Error, Espacio solo para ingresar texto.'
                                                        }

                                                    })}
                                                />

                                            </div>


                                            <div className="container-fecha-hora">

                                                <label
                                                    htmlFor="hora" 
                                                    className="label-form"
                                                >
                                                    Hora:
                                                </label>

                                                <input
                                                    type="hora"
                                                    name="nacimiento"
                                                    autoComplete="off"
                                                    className="input-form-hora"
                                                    placeholder="00:00"

                                                    {...register("hora", {
                                                        required:{
                                                            value: true,
                                                            message: 'Campo Requerido'
                                                        }, 

                                                        maxLength:{
                                                            value: 25,
                                                            message: 'Maximo 25 Caracteres'
                                                        },

                                                        minLength:{
                                                            value: 2,
                                                            message: 'Minimo 2 Caracteres'
                                                        },

                                                        pattern:{
                                                            value: /^[A-Za-z]+$/i,
                                                            message: 'Error, Espacio solo para ingresar texto.'
                                                        }

                                                    })}
                                                />

                                            </div>

                                        </div>
                                           

                                        <div className="container-pasiente">

                                            <label
                                                htmlFor="resultado" 
                                                className="label-form"
                                            >
                                                Resultado:
                                            </label>

                                            <input
                                                type="text"
                                                name="resultado"
                                                autoComplete="off"
                                                className="input-form-resultado"
                                                placeholder="Agregar…"

                                                {...register("resultado", {
                                                    required:{
                                                        value: true,
                                                        message: 'Campo Requerido'
                                                    }, 

                                                    maxLength:{
                                                        value: 25,
                                                        message: 'Maximo 25 Caracteres'
                                                    },

                                                    minLength:{
                                                        value: 2,
                                                        message: 'Minimo 2 Caracteres'
                                                    },

                                                    pattern:{
                                                        value: /^[A-Za-z]+$/i,
                                                        message: 'Error, Espacio solo para ingresar texto.'
                                                    }

                                                })}
                                            />
                                        </div>

                                    </div>


                                    <div className="container-resultado-primary">
                                        
                                        <table>
                                            <thead>
                                                <tr>   
                                                    <th className="container-titulo-resultado">
                                                        <p className="titulo-linea-c">Línea de control C</p>
                                                        <p className="titulo-linea-t">Línea de control T</p>
                                                    </th>
                                                    
                                                    <th>Recomendación</th>
                                                    <th>Resultados</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr>
                                                    <td className="resultadoCRT">
                                                        <div className="resultadoTitulo"><p>NEGATIVO</p></div>
                                                        <div className="resultadoCRT-Negativo"><img src={imagenCRT} alt="imagenCRT" /></div>
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
                                                    <td className="resultadoCRT">
                                                        <div className="resultadoTitulo"><p>POSITIVO</p></div>
                                                        <div className="resultadoCRT-Positivo"><img src={imagenCRTValor} alt="imagenCRT" /></div>
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








                                    <div className="container-controInterno-primary">
                                        
                                        <div className="container-sangre">

                                            <div className="container-sangre-radio">
                                                
                                                <div>
                                                    
                                                    <input
                                                        className="input-sangre"
                                                        type="radio"
                                                        name="sangre"
                                                        value="Antigeno"
                                                    />
                                                    <label className="label-sangre">Antigeno</label>
                                                </div>
                                                
                                                <div>
                                                    
                                                    <input
                                                        className="input-sangre"
                                                        type="radio"
                                                        name="sangre"
                                                        value="PCR"
                                                    />
                                                    <label className="label-sangre">PCR</label>
                                                </div>
                                                
                                                <div>
                                                    
                                                    <input
                                                        className="input-sangre"
                                                        type="radio"
                                                        name="sangre"
                                                        value="Anticuerpo"
                                                    />
                                                    <label className="label-sangre">Anticuerpo</label>
                                                </div>

                                            </div>
                                            <hr/>



                                            <div className="container-sangre-texto">
                                                <p>Este es un formato interno de Mediclar Laboratorios, la presente se realiza a solicitud del interesado, el resultado valido se envía en formato digital al interesado a cualquiera de los medios proporcionados. En caso de resultado negativo la posibilidad de contraer la infección permanece, si el resultado es negativo y presenta síntomas se recomienda realizar PCR. Este documento es la interpretación de la prueba realizada pon un profesional. </p>
                                            </div>      

                                        </div>

                                        <div className="container-control-sangre">
                                                <div className="control-titulo">
                                                    <h3>CONTROL INTERNO</h3>
                                                </div>
                                                
                                                
                                                <div className="control-firma">
                                                    <p>Nombre y firma de persona que realiza la prueba</p>
                                                </div>
                                        </div>

                                    </div>





                                </div>          


                                <div className="container-2">

                                    <label
                                        htmlFor="hotel" 
                                        className="label-form"
                                    >
                                        Hotel:
                                    </label>

                                    <input
                                        type="text"
                                        name="hotel"
                                        autoComplete="off"
                                        className="input-form-hotel"
                                        placeholder="Agregar nombre del hotel…"

                                        {...register("paciente", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 25,
                                                message: 'Maximo 25 Caracteres'
                                            },
                        
                                            minLength:{
                                                value: 2,
                                                message: 'Minimo 2 Caracteres'
                                            },
                        
                                            pattern:{
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Error, Espacio solo para ingresar texto.'
                                            }
                        
                                        })}
                                    />



                                    <label
                                        htmlFor="habitación" 
                                        className="label-form"
                                    >
                                        Habitación:
                                    </label>

                                    <input
                                        type="text"
                                        name="habitación"
                                        autoComplete="off"
                                        className="input-form-habitacion"
                                        placeholder="Agregar número de habitación…"

                                        {...register("habitación", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 25,
                                                message: 'Maximo 25 Caracteres'
                                            },
                        
                                            minLength:{
                                                value: 2,
                                                message: 'Minimo 2 Caracteres'
                                            },
                        
                                            pattern:{
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Error, Espacio solo para ingresar texto.'
                                            }
                        
                                        })}
                                    />

                                    <div className="container-firma">
                                        <p className="firma">Firma Hotel</p>
                                    </div>

                                    <div className="container-muestra-resultado">
                                        <p className="muestra-resultado">Muestra de Resultados</p>

                                        <div className="container-primary-img">
                                            <div className="container-img"></div>
                                        </div>

                                    </div>
                               

                                </div>
                            </div>
                        </div>






                        <span className="">
                            {errors.name && errors.name.message}
                        </span>

                        <div className="container-btn">
                            <button className="btn-login">AVISO DE PRIVACIDAD</button>
                        </div>

                    </form>

                </div>

                <div className="pie-pagina">
                    <p>© 2021 Mediclar es una marca registrada de Barter Box SA de CV</p>
                </div>
                
            </div>
        </div>
    )
}

export default FormAdmin

