import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { sendFormChoque } from "../actions/cda";
import { Header } from "../layout/Header";
import { LoginScreen } from "./LoginScreen";

const initialState = {
    patenteSeleccionada: '',
    rut: '',
    nombre: '',
    telefono: '',
    correo: '',
    rutConductor: '',
    nombreConductor: '',
    telefonoConductor: '',
    correoConductor: '',
    rutTercero: '',
    nombreTercero: '',
    telefonoTercero: '',
    correoTercero: '',    
    patente: '',
    marca: '',
    modelo: '',
    color: '',
    tieneSeguro: '',
    lugar: '',
    fecha: '',
    danios: '',
    descripcion: '',
    responsable: '',
    tipoIncidente: 'Accidente'        
}
export const FormChoque = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [files, setFiles] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [picturesT, setPicturesT] = useState([]);
    const [licenciaName, setLicenciaName] = useState('');
    const [constanciaName, setConstanciaName] = useState('');
    const [licenciaTName, setLicenciaTName] = useState('');
    const licenciaInput = useRef(null);
    const filesInput = useRef(null);
    const constanciaInput = useRef(null);
    const fotosInput = useRef(null);
    const licenciaTInput = useRef(null);
    const fotosTInput = useRef(null);    
    const [ values, setValues ] = useState(initialState);
    const dispatch = useDispatch();
    const { uid, nombre, correo, telefono, vehiculos } = useSelector(state => state.auth);
    
    const {            
        rutConductor,    
        nombreConductor, 
        telefonoConductor,   
        correoConductor, 
        rutTercero, 
        nombreTercero,  
        telefonoTercero,    
        correoTercero,  
        patente,    
        marca,  
        modelo, 
        color,            
        lugar,  
        fecha,  
        danios,  
        descripcion,    
        responsable,
        tieneSeguro      
    } = values;

    const handleInputChange = ({ target }) => {        
        setValues({
            ...values,
            [ target.name ]: target.type === 'file' ? target.files : target.value
        });
        if(target.type === 'file'){
            const campo = document.querySelector(`#${target.id}`);
            const file = campo.files;
            if(target.name === 'licencia') {
                setLicenciaName(file[0].name);
            } else if (target.name === 'constancia') {
                setConstanciaName(file[0].name)
            } else if (target.name === 'licenciaT') {
                setLicenciaTName(file[0].name)
            }
            
        }                
    }

    const handleDelete = ({target}) => {
        const id = target.parentElement.id;
        if( id === 'licenciaName') { 
            setLicenciaName('');           
            document.querySelector('#licencia').value = '';
        } else if(id === 'constanciaName') {
            setConstanciaName('');           
            document.querySelector('#constancia').value = '';
        } else if(id === 'licenciaTName') {
            setLicenciaTName('');           
            document.querySelector('#licenciaT').value = '';
        }
    }
    const removeFile = ({target}) => {
        const id = target.parentElement.id;        
        const index = files.indexOf(id);
        const newState = [...files];
        if(index > -1 ) { newState.splice(index, 1) };  
        setFiles(newState);
         
        if(newState.length === 0) {
            filesInput.current.value = '';
        }            
    }
    const removeFoto = ({target}) => {
        const id = target.parentElement.id;        
        const index = pictures.indexOf(id);
        const newState = [...pictures];
        if(index > -1 ) { newState.splice(index, 1) };  
        setPictures(newState);
         
        if(newState.length === 0) {
            fotosInput.current.value = '';
        }            
    }
    const removeFotoT = ({target}) => {
        const id = target.parentElement.id;        
        const index = picturesT.indexOf(id);
        const newState = [...picturesT];
        if(index > -1 ) { newState.splice(index, 1) };  
        setPicturesT(newState);
         
        if(newState.length === 0) {
            fotosTInput.current.value = '';
        }            
    }

    const onSubmit = (e) => { 
        // e.preventDefault();
        setValues({
            ...values,
            rut: uid,
            nombre: nombre,
            correo: correo,
            telefono: telefono
        });
        let formdata = new FormData();
        formdata.append("data", JSON.stringify(values));
        formdata.append("files.licencia", licenciaInput.current.files[0]);        
        for(let i = 0; i < filesInput.current.files.length; i++) {            
            formdata.append("files.documentos_vehiculo", filesInput.current.files[i]);
        }
        formdata.append("files.constancia", constanciaInput.current.files[0]);
        for(let i = 0; i < fotosInput.current.files.length; i++) {            
            formdata.append("files.fotos", fotosInput.current.files[i]);
        }
        formdata.append("files.licencia_tercero", fotosTInput.current.files[0]);
        for(let i = 0; i < fotosTInput.current.files.length; i++) {            
            formdata.append("files.fotos_tercero", fotosTInput.current.files[i]);
        }                      
        
        dispatch(sendFormChoque(formdata));               
    }    
    useEffect(() => {        
        
        filesInput.current.addEventListener('change', function() {
            const files = filesInput.current.files;                        
            const filesArr = Object.values(files);
            const fileNames = filesArr.map(({ name }) =>  name );            
            setFiles(fileNames)                      
        }); 
        
        fotosInput.current.addEventListener('change', function() {
            const fotos = fotosInput.current.files;                        
            const fotosArr = Object.values(fotos);
            const fotosNames = fotosArr.map(({ name }) =>  name );            
            setPictures(fotosNames)                      
        });

        fotosTInput.current.addEventListener('change', function() {
            const fotos = fotosTInput.current.files;                        
            const fotosArr = Object.values(fotos);
            const fotosNames = fotosArr.map(({ name }) =>  name );            
            setPicturesT(fotosNames)                      
        });
    }, [])
    return (        
        
        <div className="formulario choque-form">
            <div className="popup-container">
                <LoginScreen />
            </div>            
            <Header />
            <Link to='/form-select' className="cda-btn2 prev-page">Pagina anterior</Link>            
            <div className="rendered-form robo-form">
                <div className="mt-70">
                    <h1 className="heading-7">En caso de choque</h1>
                </div>
                <div>
                    <h3 className="heading-11-copy _2">Tus datos</h3>
                </div>
                <div className="formbuilder-select form-group select-div">
                    <label htmlFor="patenteSeleccionada" className="formbuilder-select-label paragraph-5-copy">Elige una Patente</label>
                    <select 
                        name="patenteSeleccionada" 
                        id="patenteSeleccionada" 
                        className="input-control"
                        onChange={handleInputChange}
                    >
                        <option>Seleccione una opción</option>
                        {
                            (vehiculos.length > 0) &&
                            vehiculos.map((vehiculo, key) => {
                                return (
                                    <option key={key} value={vehiculo.patente} id={vehiculo.patente}>{vehiculo.patente}</option>
                                )
                            })
                        }                        
                        
                    </select>
                </div>
                
                {/* DATOS DEL CONDUCTOR */}

                <div className="mt-20">
                    <h3 className="paragraph-5-copy">Identificación del conductor</h3>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="RUT" 
                        {...register("rutConductor", {required: 'Campo Obligatorio'})} 
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={rutConductor}                        
                    />
                    <p className="formErroMsg">{errors.rutConductor?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Nombre y Apellido" 
                        {...register("nombreConductor", {required: 'Campo Obligatorio'})}                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={nombreConductor}                        
                    />
                    <p className="formErroMsg">{errors.nombreConductor?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text"                        
                        placeholder="Teléfono" 
                        {...register("telefonoConductor", {required: 'Campo Obligatorio'})} 
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={telefonoConductor}                        
                    />
                    <p className="formErroMsg">{errors.telefonoConductor?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="email" 
                        placeholder="Correo" 
                        {...register("correoConductor", {required: 'Campo Obligatorio'})}                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={correoConductor}
                    />
                    <p className="formErroMsg">{errors.correoConductor?.message}</p>
                </div>

                {/* DATOS DEL TERCERO */}

                <div>
                    <h3 className="heading-11-copy _2">Datos del tercero</h3></div>
                <div className="">
                    <h3 className="paragraph-5-copy">Identificación del conductor</h3>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="RUT"
                        {...register("rutTercero", {required: 'Campo Obligatorio'})}                                                
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={rutTercero}
                    />
                    <p className="formErroMsg">{errors.rutTercero?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Nombre y Apellido" 
                        {...register("nombreTercero", {required: 'Campo Obligatorio'})}                        
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={nombreTercero}
                    />
                    <p className="formErroMsg">{errors.nombreTercero?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text"                         
                        placeholder="Teléfono" 
                        {...register("telefonoTercero", {required: 'Campo Obligatorio'})}                        
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={telefonoTercero}
                    />
                    <p className="formErroMsg">{errors.telefonoTercero?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="e-mail" 
                        placeholder="Correo" 
                        {...register("correoTercero", {required: 'Campo Obligatorio'})} 
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={correoTercero}
                    />
                    <p className="formErroMsg">{errors.correoTercero?.message}</p>
                </div>

                {/* DATOS DEL VEHICULO */}

                <div>
                    <h3 className="paragraph-5-copy">Identificación del vehículo</h3></div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Patente" 
                        {...register("patente", {required: 'Campo Obligatorio'})}                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={patente}
                    />
                    <p className="formErroMsg">{errors.patente?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Marca" 
                        {...register("marca", {required: 'Campo Obligatorio'})}                    
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={marca}
                    />
                    <p className="formErroMsg">{errors.marca?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Modelo" 
                        {...register("modelo", {required: 'Campo Obligatorio'})}                          
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={modelo}
                    />
                    <p className="formErroMsg">{errors.modelo?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Color" 
                        {...register("color", {required: 'Campo Obligatorio'})}                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={color}
                    />
                    <p className="formErroMsg">{errors.color?.message}</p>
                </div>
                <div>
                    <p className="paragraph-4-copy">¿Cuenta con seguro?</p>
                </div>
                <div className="formbuilder-radio-group form-group field-tieneSeguro">
                    <label htmlFor="tieneSeguro" style={{ marginBottom: '10px'}}className="formbuilder-radio-group-label"></label>
                    <div className="radio-group">
                        <div className="formbuilder-radio-inline">
                            <label htmlFor="tieneSeguro-0" className="paragraph-4-copy">Si</label>
                            <input 
                                name="tieneSeguro" 
                                access="false" 
                                id="tieneSeguro-0" 
                                value="option-1" 
                                type="radio"
                                onChange={handleInputChange}
                            />
                            <span className="radio-replacer"></span>                           
                        </div>
                        <div className="formbuilder-radio-inline">
                            <label htmlFor="tieneSeguro-1" className="paragraph-4-copy">No</label>
                            <input 
                                name="tieneSeguro" 
                                access="false" 
                                id="tieneSeguro-1" 
                                value="option-2" 
                                type="radio"
                                onChange={handleInputChange}
                            />
                            <span className="radio-replacer"></span>                            
                        </div>
                    </div>
                </div>
                {
                    (tieneSeguro === 'option-1') &&
                    <div className="formbuilder-text form-group">
                        <p className="paragraph-4-copy">Nombre de su compañia de seguro</p>                    
                        <input 
                            type="text" 
                            {...register("suSeguro", {required: 'Campo Obligatorio'})}                          
                            id="suSeguro" 
                            className="input-control input-field"
                        />
                    </div>
                }

                {/* DATOS DEL ACCIDENTE */}

                <div>
                    <h3 className="heading-11-copy _2">Relato</h3>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text"                                                                      
                        placeholder="Lugar del accidente" 
                        {...register("lugar", {required: 'Campo Obligatorio'})}                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={lugar}       
                    />
                    <p className="formErroMsg">{errors.lugar?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="datetime-local" 
                        placeholder="Fecha y hora" 
                        {...register("fecha", {required: 'Campo Obligatorio'})}                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={fecha}       
                    />
                    <p className="formErroMsg">{errors.fecha?.message}</p>
                </div>
                <div className="formbuilder-text form-group">                    
                    <textarea                         
                        placeholder="Daños observados" 
                        {...register("danios", {required: 'Campo Obligatorio'})}                        
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={danios}       
                    ></textarea>
                </div>
                <div className="formbuilder-text form-group">                    
                    <textarea                          
                        placeholder="Descripción de la situación" 
                        {...register("descripcion", {required: 'Campo Obligatorio'})}                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={descripcion}       
                    ></textarea>
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Responsable del accidente" 
                        {...register("responsable", {required: 'Campo Obligatorio'})}                        
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={responsable}       
                    />
                    <p className="formErroMsg">{errors.responsable?.message}</p>
                </div>

                {/* DOCUMENTOS */}

                <div className="formbuilder-file form-group field-licencia">
                    <label htmlFor="licencia" className="formbuilder-file-label">Licencia de conducir<span className="formbuilder-required">*</span></label>
                    <input 
                        type="file"                         
                        name="licencia" 
                        access="true" 
                        multiple={false} 
                        id="licencia" 
                        required="required" 
                        ref={licenciaInput}
                        aria-required="true"
                        onChange={handleInputChange}                         
                    />
                </div>
                <div className="filesUploaded">
                    {
                        (licenciaName !== '') &&
                        <p className="fileTitle" id="licenciaName">
                            {licenciaName}
                            <i className="fas fa-trash" onClick={ handleDelete }></i>                        
                        </p>
                    }
                </div>
                <div className="formbuilder-file form-group">
                    <label htmlFor="fileUploader" className="formbuilder-file-label">Documentos del vehículo<span className="formbuilder-required">*</span></label>
                    <input type="file" ref={filesInput} name="documentos" access="false" multiple={true} id="fileUploader" required="required" aria-required="true" />
                </div>
                <div className="filesUploaded">
                    { files.map(file => {
                        return (
                            <p key={file} id={file} className="fileTitle">
                                {file}
                                <i className="fas fa-trash" onClick={ removeFile }></i>
                            </p>
                        )
                    })}
                </div>
                <div className="formbuilder-file form-group">
                    <label htmlFor="constancia" className="formbuilder-file-label">Constancia policial (Si aplica)</label>
                    <input 
                        type="file" 
                        name="constancia" 
                        access="false" 
                        multiple={false} 
                        id="constancia"
                        ref={constanciaInput}
                        onChange={handleInputChange}                        
                    />
                </div>
                <div className="filesUploaded">
                    {
                        (constanciaName !== '') &&
                        <p className="fileTitle" id="constanciaName">
                            {constanciaName}
                            <i className="fas fa-trash" onClick={ handleDelete }></i>                        
                        </p>
                    }
                </div>
                <div className="formbuilder-file form-group">
                    <label htmlFor="fotosUploader" className="formbuilder-file-label">Fotos de daños<span className="formbuilder-required">*</span></label>
                    <input type="file"ref={fotosInput} name="fotos" access="false" multiple={true} id="fotosUploader" required="required" aria-required="true" />
                </div>
                <div className="fotosUploaded">
                    { pictures.map(pic => {
                        return (
                            <p key={pic} id={pic}className="fileTitle">
                                {pic}
                                <i className="fas fa-trash" onClick={ removeFoto }></i>
                            </p>
                        )
                    })}
                </div>
                <div className="formbuilder-file form-group">
                    <label htmlFor="licenciaT" className="formbuilder-file-label">Licencia de tercero<span className="formbuilder-required">*</span></label>
                    <input 
                        type="file" 
                        name="licenciaT" 
                        access="false" 
                        multiple={false} 
                        id="licenciaT" 
                        required="required"
                        ref={licenciaTInput} 
                        aria-required="true"
                        onChange={handleInputChange}                         
                    />
                </div>
                <div className="filesUploaded">
                    {
                        (licenciaTName !== '') &&
                        <p className="fileTitle" id="licenciaTName">
                            {licenciaTName}
                            <i className="fas fa-trash" onClick={ handleDelete }></i>                        
                        </p>
                    }
                </div>
                <div className="formbuilder-file form-group">
                    <label htmlFor="fotosTUploader" className="formbuilder-file-label">Fotos de daños tercero<span className="formbuilder-required">*</span></label>
                    <input type="file" ref={fotosTInput} className="" name="fotosTercero" access="false" multiple={true} id="fotosTUploader" required="required" aria-required="true" />
                </div>
                <div className="fotosUploaded">
                    { picturesT.map(pic => {
                        return (
                            <p key={pic} id={pic}className="fileTitle">
                                {pic}
                                <i className="fas fa-trash" onClick={ removeFotoT }></i>
                            </p>
                        )
                    })}
                </div>
                <div className="formbuilder-button form-group">
                    <button 
                        type="submit" 
                        className="pagar-seguro-auto-2 w-button" 
                        name="submit-button"                        
                        onClick={handleSubmit(onSubmit)}
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>            
        
    )
}
