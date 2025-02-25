import { useState, useEffect } from 'react';
import './StudentForm.css';
import { Message } from './Message';

export const StudentForm = () => {
    const [formState, setFormState] = useState({
        matricula: '',
        nombre: '',
        apellidos: '',
        edad: '',
        universidad: '',
        carrera: ''
    });
    const [showMessage, setShowMessage] = useState(false);

    const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(() => {
        if (nombre.toLowerCase() === 'Eugenio') {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    }, [nombre]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formState);
    };

    return (
        <div className="form-container">
            <h1>Formulario de Estudiante</h1>
            <hr />
            <form onSubmit={onSubmit} className="form">
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Matrícula" 
                    name="matricula"
                    value={matricula}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Nombre" 
                    name="nombre"
                    value={nombre}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Apellidos" 
                    name="apellidos"
                    value={apellidos}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <input 
                    type="number" 
                    className="input" 
                    placeholder="Edad" 
                    name="edad"
                    value={edad}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Universidad" 
                    name="universidad"
                    value={universidad}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Carrera" 
                    name="carrera"
                    value={carrera}
                    onChange={onInputChange}
                    autoComplete="off"
                />
                <button type="submit" className="button">Enviar</button>
            </form>
            
            {showMessage && <Message />}
            
            <div className="data-display">
                <h2>Datos Ingresados</h2>
                <p><strong>Matrícula:</strong> {matricula}</p>
                <p><strong>Nombre:</strong> {nombre}</p>
                <p><strong>Apellidos:</strong> {apellidos}</p>
                <p><strong>Edad:</strong> {edad}</p>
                <p><strong>Universidad:</strong> {universidad}</p>
                <p><strong>Carrera:</strong> {carrera}</p>
            </div>
        </div>
    );
};

