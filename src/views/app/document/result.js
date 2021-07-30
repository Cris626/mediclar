import React, { useState ,useEffect } from 'react';
import IntlMessages from '../../../helpers/IntlMessages';

import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/es_ES'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'

import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { registerPatient } from '../../../redux/actions';
import logoMediclarForm from '../../../img/logoForm.jpg'
import backgroundForm from '../../../img/background-form.jpg'

import '../../../styles/styleFormRegister.css';
import 'antd/dist/antd.css'; 

const Result = (props) => {
    const [birth, setBirth] = useState();
    const [date, setDate] = useState();

    const{register, handleSubmit, formState: { errors }} = useForm()

    const handleDate = data => {
        let date = new Date(data._d)
        let resultDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        return resultDate;
    }

    const onSubmit = (data, e) => {
        e.target.reset()
        props.registerPatient({data, birth, date});
    }

    useEffect(()=>{
        const { patient, history } = props;
        const { register } = patient;
        if(register){
            if(register.status===200){
                history.push('/mediclar/app/result-document/success-register');
            }else{
                console.log('error')
            }
        }
    },[props])

    return(
        <div className="container-register-primary">

            <div className="container-register-background">
                <img src={ backgroundForm } alt="background"/>
            </div>

            <div className="overlay-register-header"></div>
            
            <div className="head-icon">
                <div className="icon-return">
                    <FontAwesomeIcon className="icon-button" icon={ faArrowAltCircleLeft }/>
                </div>

                <div className="icon-web">
                    <FontAwesomeIcon className="icon-style" icon={ faGlobe }/>
                    <p>www.mediclarlab.com</p>
                </div>

                <div className="icon-mail">
                    <FontAwesomeIcon className="icon-style" icon={ faEnvelope }/>
                    <p>info@mediclarlab.com</p>
                </div>

                {/* <div className="icon-mail">
                    <FontAwesomeIcon className="icon-style" icon={ faInstagram }/>
                    <p>mediclar_lab</p>
                </div> */}

                <div className="icon-phone">
                    <FontAwesomeIcon className="icon-style" icon={ faPhoneSquareAlt }/>
                    <p>+52 1 33 1441 4922</p>
                </div>

                <div className="icon-exit">
                        <FontAwesomeIcon className="icon-button" icon={ faSignOutAlt }/>
                </div>

            </div>

            <div className="container-form-register-primary">



                <div align="center" className="container-logo-primary">

                    <p className="title-number-register"><IntlMessages id="form.num-register"/></p>
                    <p className="number-register">100253</p>
                    
                    <div className="container-logo-register">
                        <img className="logo-login" src={ logoMediclarForm } alt="logo"/>
                    </div>

                    <p className="title-logo-login"><IntlMessages id="form.title"/></p>

                </div>



                <div className="container-form-register">

                    <form className="form-register" onSubmit={ handleSubmit( onSubmit ) }>
                        

                        <div className="container-block-register-primary">

                            
                            
                            
                            <div className="container-block-register">

                                <div className="container-register">
                                    <label
                                        htmlFor="name" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.name"/><span className="required-label">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                        className="input-register-name"
                                        placeholder="Agregar..."

                                        {...register("name", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 10,
                                                message: 'Maximo 10 Caracteres'
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
                                    <span className="error-message">
                                        {errors.name && errors.name.message}
                                    </span>
                                </div>





                                <div className="container-register">
                                    <label
                                        htmlFor="surname" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.first-name"/><span className="required-label">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="surname"
                                        autoComplete="off"
                                        className="input-register-surname"
                                        placeholder="Agregar..."

                                        {...register("surname", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 10,
                                                message: 'Maximo 10 Caracteres'
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
                                    <span className="error-message">
                                        {errors.surname && errors.surname.message}
                                    </span>
                                </div>




                                <div className="container-register">
                                    <label
                                        htmlFor="secondSurname" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.last-name"/><span className="required-label">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="secondSurname"
                                        autoComplete="off"
                                        className="input-register-second-surname"
                                        placeholder="Agregar..."

                                        {...register("secondSurname", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 10,
                                                message: 'Maximo 10 Caracteres'
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
                                    <span className="error-message">
                                        {errors.secondSurname && errors.secondSurname.message}
                                    </span>
                                </div>

                            </div>

                            












                            <div className="container-block-register">

                                <div className="container-register">
                                    <label
                                        htmlFor="birth" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.date-of-birth"/><span className="required-label">*</span>
                                    </label>
                                    
                                    <div className="container-register-birth">
                                        <DatePicker 
                                            locale={locale}
                                            name="birth"
                                            className="input-register-birth"
                                            placeholder="DD/MM/YYYY"
                                            onChange={(date) => setBirth(handleDate(date))}
                                        />
                                    </div>
                                        <span className="error-message">
                                            {errors.birth && errors.birth.message}
                                        </span>
                                </div>





                                <div className="container-register">
                                    <label
                                        htmlFor="curp" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.curp"/><span className="required-label">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="curp"
                                        autoComplete="off"
                                        className="input-register-curp"
                                        placeholder="Agregar..."

                                        {...register("curp", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 10,
                                                message: 'Maximo 10 Caracteres'
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
                                    <span className="error-message">
                                        {errors.curp && errors.curp.message}
                                    </span>
                                </div>




                                <div className="container-register">
                                    <label
                                        htmlFor="gender" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.gender"/><span className="required-label">*</span>
                                    </label>

                                    <select
                                        name="gender"
                                        className="input-register-gender"
                                            {...register("gender", { 
                                                    required:{
                                                    value: 'Selecciona...',
                                                    message: 'Campo Requerido' 
                                                    }
                                            })}    
                                    >
                                        <option value="">Selection..</option>
                                        <option value="Feminine">Femenino</option>
                                        <option value="Male">Masculino</option>

                                    </select>

                                    <span className="error-message">
                                        {errors.gender && errors.gender.message}
                                    </span>
                                </div>


                            </div>












                            <div className="container-block-register">

                                <div className="container-register">

                                    <label
                                        htmlFor="passport" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.passport"/><span className="required-label">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="passport"
                                        autoComplete="off"
                                        className="input-register-passport"
                                        placeholder="Agregar..."

                                        {...register("passport", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 20,
                                                message: 'Maximo 20 Caracteres'
                                            },
                        
                                            minLength:{
                                                value: 2,
                                                message: 'Minimo 2 Caracteres'
                                            },
                        
                                        })}
                                    />
                                    <span className="error-message">
                                        {errors.passport && errors.passport.message}
                                    </span>

                                </div>





                                <div className="container-register">
                                    <label
                                        htmlFor="email" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.email"/><span className="required-label">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="email"
                                        autoComplete="off"
                                        className="input-register-email"
                                        placeholder="email@electronic.com"

                                        {...register("email", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 20,
                                                message: 'Maximo 20 Caracteres'
                                            },
                        
                                            minLength:{
                                                value: 2,
                                                message: 'Minimo 2 Caracteres'
                                            },
                        
                                            pattern:{
                                                value: /^\S+@\S+$/i,
                                                message: 'Error, Espacio solo para ingresar texto.'
                                            }
                        
                                        })}
                                    />
                                    <span className="error-message">
                                        {errors.email && errors.email.message}
                                    </span>
                                </div>




                                <div className="container-register">

                                    <label
                                        htmlFor="confirmEmail" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.confirm-email"/><span className="required-label">*</span>
                                    </label>

                                    <input
                                        type="text"
                                        name="confirmEmail"
                                        autoComplete="off"
                                        className="input-register-confirm-email"
                                        placeholder="email@electronic.com"

                                        {...register("confirmEmail", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 20,
                                                message: 'Maximo 20 Caracteres'
                                            },
                        
                                            minLength:{
                                                value: 2,
                                                message: 'Minimo 2 Caracteres'
                                            },
                        
                                            pattern:{
                                                value: /^\S+@\S+$/i,
                                                message: 'Error, Espacio solo para ingresar texto.'
                                            }
                        
                                        })}
                                    />
                                    <span className="error-message">
                                        {errors.confirmEmail && errors.confirmEmail.message}
                                    </span>
                                </div>

                            </div>







                            <div className="container-block-register">

                                <div className="container-register-result">


                                    <div className="container-phone-register-primary-result">

                                        <div className="container-register-code-result">

                                            <label
                                                htmlFor="codeArea" 
                                                className="label-form-register"
                                            >
                                                <IntlMessages id="form.phone"/><span className="required-label">*</span>
                                            </label>

                                            <select
                                                name="codeArea"
                                                    className="input-register-code-result"
                                                    {...register("codeArea", { 
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
                                            <span className="error-message">
                                                {errors.gender && errors.gender.message}
                                            </span>
                                        </div>

                                        <div className="container-register-phone-result">

                                            
                                            <label
                                                htmlFor="codigo-area" 
                                                className="label-form-register"
                                            >
                                                
                                            </label>


                                            <input
                                                type="text"
                                                name="phone"
                                                autoComplete="off"
                                                className="input-register-phone-result"
                                                placeholder="000 00 0000 0000"

                                                {...register("phone", {
                                                    required:{
                                                        value: true,
                                                        message: 'Campo Requerido'
                                                    }, 

                                                    maxLength:{
                                                        value: 15,
                                                        message: 'Maximo 15 Caracteres'
                                                    },

                                                    minLength:{
                                                        value: 4,
                                                        message: 'Minimo 4 Caracteres'
                                                    },

                                                })}
                                            />
                                            <span className="error-message">
                                                {errors.phone && errors.phone.message}
                                            </span>
                                            
                                        </div>

                                    </div>

                                </div>









                                <div className="container-motive-proof-register-result">

                                    <p className="title-motive-proof"><IntlMessages id="form.test-reason"/><span className="required-label">*</span></p>
                                             
                                    <div className="container-motive">
                                        
                                        <div>
                                            <input
                                                type= "radio"
                                                value="trip"
                                                name="motive"
                                            />
                                            <label className="label-control"><IntlMessages id="form.test-reason.option.first"/></label>
                                        </div>
                                        
                                        <div>
                                            <input
                                                type= "radio"
                                                value="symptoms"
                                                name="motive"
                                            />
                                            <label className="label-control"><IntlMessages id="form.test-reason.option.second"/></label>
                                        </div>

                                    </div>  
                                    
                                </div> 


                                <div className="container-control-proof-register-result">

                                    <p className="title-motive-proof"><IntlMessages id="form.control"/><span className="required-label">*</span></p>
                                            
                                    <div className="container-motive">
                                        
                                        <div>
                                            <input
                                                type= "radio"
                                                value="Business"
                                                name="control"
                                            />
                                            <label className="label-control"><IntlMessages id="form.control.option.first"/></label>
                                        </div>
                                        
                                        <div>
                                            <input
                                                type= "radio"
                                                value="School"
                                                name="control"
                                            />
                                            <label className="label-control"><IntlMessages id="form.control.option.second"/></label>
                                        </div>

                                    </div>  

                                </div> 

                            </div>




                            <div className="container-test-type-register-result">

                                <p className="title-motive-proof"><IntlMessages id="form.test-type"/><span className="required-label">*</span></p>
                                            
                                <div className="container-motive">
                                    
                                    <div>
                                        <input
                                            type= "radio"
                                            value="0"
                                            name="test"
                                        />
                                        <label className="label-control"><IntlMessages id="form.test-type.option.first"/></label>
                                    </div>
                                    
                                    <div>
                                        <input
                                            type= "radio"
                                            value="1"
                                            name="test"
                                        />
                                        <label className="label-control"><IntlMessages id="form.test-type.option.second"/></label>
                                    </div>

                                    <div>
                                        <input
                                            type= "radio"
                                            value="1"
                                            name="test"
                                        />
                                        <label className="label-control"><IntlMessages id="form.test-type.option.third"/></label>
                                    </div>

                                </div>  

                            </div> 

                            <div className="line-bottom"></div>
                                                
                            
                        </div>

                        



                        <div className="container-block-register-privacy-primari">
                        
                            <div className="title-privacy">
                                <p><IntlMessages id="doc.title-privacy"/></p>
                            </div>
                                
                            <div className="container-block-register-privacy">

                                <div className="block-privacy-first">
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-one"/></p>

                                    <p className="paragraph-privacy-title"><IntlMessages id="doc.title-one"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-two"/></p>

                                    <p><IntlMessages id="doc.paragraph-two.option-a"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-two.option-b"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-three"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-three.option-a"/></p>

                                    <p className="paragraph-privacy-title"><IntlMessages id="doc.title-two"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-four"/></p>

                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-four.option-a"/></p>

                                    <textarea
                                        type="text"
                                        name="space1-privacy"
                                        autoComplete="off"
                                        className="input-register-space-privacy"
                                        

                                        {...register("space1-privacy", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 100,
                                                message: 'Maximo 100 Caracteres'
                                            },

                                            minLength:{
                                                value: 4,
                                                message: 'Minimo 4 Caracteres'
                                            },

                                        })}
                                    />

                                    <textarea
                                        type="text"
                                        name="space2-privacy"
                                        autoComplete="off"
                                        className="input-register-space-privacy"
                                        

                                        {...register("space2-privacy", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 100,
                                                message: 'Maximo 100 Caracteres'
                                            },

                                            minLength:{
                                                value: 4,
                                                message: 'Minimo 4 Caracteres'
                                            },

                                        })}
                                    />

                                    <p className="paragraph-privacy-title"><IntlMessages id="doc.title-three"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-five"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-six"/></p>
                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">A)</p><p className="paragraph-privacy"><IntlMessages id="doc.clause-a"/></p>
                                    </div>
                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">B)</p><p className="paragraph-privacy"><IntlMessages id="doc.clause-b"/></p>
                                    </div>
                                    <p><IntlMessages id="doc.clause-b.option-a"/></p>
                                    <p><IntlMessages id="doc.clause-b.option-b"/></p>
                                    <p><IntlMessages id="doc.clause-b.option-c"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.clause-b.option-d"/></p>
                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">C)</p><p className="paragraph-privacy"><IntlMessages id="doc.clause-c"/></p>
                                    </div>
                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">D)</p><p className="paragraph-privacy"><IntlMessages id="doc.clause-d"/></p>
                                    </div>
                                </div>

                                <div className="block-privacy-second">
                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">E)</p><p className="paragraph-privacy"><IntlMessages id="doc.clause-e"/></p>
                                    </div>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-seven"/></p>
                                    <p><IntlMessages id="doc.paragraph-seven.option-a"/></p>
                                    <p><IntlMessages id="doc.paragraph-seven.option-b"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-seven.option-c"/></p>

                                    <p><IntlMessages id="doc.paragraph-eight"/></p>
                                    <p><IntlMessages id="doc.paragraph-nine"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-ten"/></p>

                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">A)</p><p className="paragraph-privacy"><IntlMessages id="doc.paragraph-ten.option-a"/></p>
                                    </div>
                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">B)</p><p className="paragraph-privacy"><IntlMessages id="doc.paragraph-ten.option-b"/></p>
                                    </div>
                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">C)</p><p className="paragraph-privacy"><IntlMessages id="doc.paragraph-ten.option-c"/></p>
                                    </div>
                                    <div className="paragraph-container">
                                        <p className="paragraph-privacy-title">D)</p><p className="paragraph-privacy"><IntlMessages id="doc.paragraph-ten.option-d"/></p>
                                    </div>
                                    
                                    <p className="paragraph-privacy-title"><IntlMessages id="doc.title.four"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-twelve"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-thirteen"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-fourteen"/></p>
                                    <p className="paragraph-privacy"><IntlMessages id="doc.paragraph-fifteen"/></p>
                                </div>

                            </div>

                            <div>
                                <p className="paragraph-notice-title"><IntlMessages id="form.accept-privacy"/></p>        
                            </div> 



                            <div className="container-form-register-notice">

                                <div className="notice-input-name">

                                    <label
                                        htmlFor="email" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.name-firm"/><span className="required-label">*</span>
                                    </label>
                                    
                                    <input
                                        type="text"
                                        name="namePasser"
                                        autoComplete="off"
                                        className="input-register-confirm-name-passer"
                                        

                                        {...register("namePasser", {
                                            required:{
                                                value: true,
                                                message: 'Campo Requerido'
                                            }, 

                                            maxLength:{
                                                value: 20,
                                                message: 'Maximo 20 Caracteres'
                                            },

                                            minLength:{
                                                value: 4,
                                                message: 'Minimo 4 Caracteres'
                                            },

                                            pattern:{
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Error, Espacio solo para ingresar texto.'
                                            }

                                        })}
                                    />
                                </div>


                                <div className="notice-input-date">

                                    <label
                                        htmlFor="date" 
                                        className="label-form-register"
                                    >
                                        <IntlMessages id="form.date"/><span className="required-label">*</span>
                                    </label>
                                    <div className="container-register-birth">
                                        <DatePicker 
                                            locale={locale}
                                            name="date"
                                            className="input-register-confirm-date"
                                            placeholder="DD/MM/YYYY"
                                            onChange={(date) => setDate(handleDate(date))}
                                        />
                                        
                                    </div>
                                        <span className="error-message">
                                            {errors.date && errors.date.message}
                                        </span>
                                </div>  

                            </div>

                        </div>

                        <div className="container-btn">
                            <button className="btn-login-cancel"><IntlMessages id="data.cancel"/></button>
                            <button className="btn-login-accept"><IntlMessages id="data.send"/></button>
                        </div>

                    </form>

                </div>
                
                <div className="footer">
                    <p>© 2021 Mediclar es una marca registrada de Barter Box SA de CV</p>
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = ({ patient }) => {
    return { patient };
}

const mapDispatchToProps = dispatch => ({
    registerPatient: value => dispatch(registerPatient(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result);
