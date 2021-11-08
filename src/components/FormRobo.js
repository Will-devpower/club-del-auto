import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendFormRobo } from "../actions/cda";

const initialState = {
    patenteSeleccionada: '',        
    patente: '',    
    elementosRobados: '',
    lugar: '',
    fecha: '',    
    descRobo: '',
    descSituacion: ''        
}
export const FormRobo = () => {

    const [files, setFiles] = useState([]);
    const [pictures, setPictures] = useState([]);   
    const [constanciaName, setConstanciaName] = useState('');   
    const filesInput = useRef(null);
    const constanciaInput = useRef(null);
    const fotosInput = useRef(null);        
    const [ values, setValues ] = useState(initialState);
    const dispatch = useDispatch();
    const { vehiculos } = useSelector(state => state.auth);
    
    const {            
        patenteSeleccionada,
        patente,        
        elementosRobados,
        lugar,
        fecha,
        descRobo,
        descSituacion    
    } = values;

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.type === 'file' ? target.files : target.value
        });
        
        if(target.type === 'file'){
            const campo = document.querySelector(`#${target.id}`);
            const file = campo.files;
            if (target.name === 'constancia') {
                setConstanciaName(file[0].name)
            }             
        }                
    }

    const handleDelete = ({target}) => {
        const id = target.parentElement.id;
        if(id === 'constanciaName') {
            setConstanciaName('');           
            document.querySelector('#constancia').value = '';
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

    const handleSubmit = (e) => { 
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("data", JSON.stringify(values));
                
        for(let i = 0; i < filesInput.current.files.length; i++) {            
            formdata.append("files.documentos_vehiculo", filesInput.current.files[i]);
        }
        formdata.append("files.constancia", constanciaInput.current.files[0]);
        for(let i = 0; i < fotosInput.current.files.length; i++) {            
            formdata.append("files.fotos", fotosInput.current.files[i]);
        }                
        console.log(elementosRobados)
        dispatch(sendFormRobo(formdata));               
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
    }, [])
    return (        
        
        <div className="formulario">
            <Link to='/form-select' className="goHome">Pagina Anterior</Link>            
            <div className="rendered-form">
                <div>
                    <h1 className="heading-7">En caso de Robo</h1>
                </div>
                <div>
                    <p className="paragraph-4-copy">¿Qué le robaron?</p>
                </div>
                <div className="formbuilder-radio-group form-group field-elementosRobados">
                    <label htmlFor="elementosRobados" style={{ marginBottom: '10px'}}className="formbuilder-radio-group-label"></label>
                    <div className="radio-group">
                        <div className="formbuilder-radio-inline">
                            <label htmlFor="elementosRobados-0" className="paragraph-4-copy">Vehículo completo</label>
                            <input 
                                name="elementosRobados" 
                                access="false" 
                                id="elementosRobados-0" 
                                value="option-1" 
                                type="radio"
                                onChange={handleInputChange}
                            />
                            <span className="radio-replacer"></span>                           
                        </div>
                        <div className="formbuilder-radio-inline">
                            <label htmlFor="elementosRobados-1" className="paragraph-4-copy">Partes y/o accesorios</label>
                            <input 
                                name="elementosRobados" 
                                access="false" 
                                id="elementosRobados-1" 
                                value="option-2" 
                                type="radio"
                                onChange={handleInputChange}
                            />
                            <span className="radio-replacer"></span>                            
                        </div>
                    </div>
                </div>
                <div className="formbuilder-select form-group select-div">
                    <label htmlFor="patenteSeleccionada" className="formbuilder-select-label paragraph-5-copy">Elige una Patente</label>
                    <select 
                        name="patenteSeleccionada" 
                        id="patenteSeleccionada" 
                        className="input-control"
                        onChange={handleInputChange}
                    >
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
                {/* DATOS DEL ACCIDENTE */}

                <div>
                    <h3 className="heading-11-copy _2">Relato</h3></div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text"                                                                      
                        placeholder="Lugar del accidente" 
                        name="lugar"                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={lugar}       
                    />
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Fecha y hora" 
                        name="fecha"                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={fecha}       
                    />
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Descripción de lo robado" 
                        name="descRobo"                        
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={descRobo}       
                    />
                </div>
                <div className="formbuilder-text form-group">                    
                    <input 
                        type="text" 
                        placeholder="Descripción de la situación" 
                        name="descSituacion"                         
                        className="input-control input-field"
                        onChange={handleInputChange}
                        value={descSituacion}       
                    />
                </div>                

                {/* DOCUMENTOS */}                
                
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
                <div className="formbuilder-button form-group">
                    <button 
                        type="submit" 
                        className="pagar-seguro-auto-2 w-button" 
                        name="submit-button"                        
                        onClick={handleSubmit}
                    >
                        Enviar
                    </button>
                </div>
                              
            </div>
        </div>            
        
    )
}
