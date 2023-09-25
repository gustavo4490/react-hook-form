import React from 'react';
import { useForm } from 'react-hook-form';

const RegistroFormulario = () => {
    const estiloFormulario = {
        backgroundColor: '#222',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        width: '70%',
        margin: 'auto',
    };

    const estiloInput = {

        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#444',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        width: '80%',
    };

    const estiloBoton = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const estiloBotonHover = {
        backgroundColor: '#0056b3',
    };
    const estiloLabel = {
        display: 'block',
        color: '#fff',
        width: '80%',
        margin: 'auto',
        textAlign: 'start',
    };
    const estiloSpan = {
        display: 'block',
        color: 'red',
        width: '80%',
        margin: 'auto',
        textAlign: 'start',
        fontSize: '12px'
    };

    const estiloLabelDark = {
        color: '#fff',
    };
    const { register, handleSubmit,
        formState: {
            errors
        } } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <div>
            <form style={estiloFormulario} onSubmit={onSubmit}>
                <h1 style={{ color: '#fff' }}>Registro</h1>
                <label style={estiloLabel}>Nombre:</label>
                <input type="text" placeholder="Nombre" style={estiloInput}
                    {...register("nombre", {
                        required: {
                            value: true,
                            message: 'Nombre requerido'
                        },
                        minLength: {
                            value: 5,
                            message: 'El nombre debe tener al menos 5 caracteres'
                        },
                        maxLength: {
                            value: 20,
                            message: 'El nombre debe tener maximo 25 caracteres'
                        }
                    })} />
                {errors.nombre && <span style={estiloSpan}>{errors.nombre.message}</span>}
                <br />
                <label style={estiloLabel}>Correo:</label>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    style={estiloInput}
                    {...register("correo")}

                />
                <br />
                <label style={estiloLabel}>Contraseña:</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    style={estiloInput}
                    {...register("contraseña")}
                />
                <br />
                <label style={estiloLabel}>Confirmar contraseña:</label>
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    style={estiloInput}
                    {...register("confirmarContraseña")}
                />
                <br />
                <label style={estiloLabel}>Fecha de nacimiento:</label>
                <input
                    type="date"
                    style={estiloInput}
                    {...register("fechaNacimiento")}
                />
                <label style={estiloLabel}>pais:</label>
                <select style={estiloInput}
                    {...register("pais")}
                >
                    <option value="mx">Mexico</option>
                    <option value="gt">Guatemala</option>
                    <option value="co">Colombia</option>
                    <option value="ar">Argentina</option>
                </select>
                <br />
                <label style={estiloLabel}>Terminos y condiciones</label>
                <input
                    type="checkbox"
                    style={estiloInput}
                    {...register("terminos")}
                />
                <br />
                <input
                    type="submit"
                    value="Registrar"
                    style={estiloBoton}
                    onMouseOver={(e) =>
                        (e.target.style.backgroundColor = estiloBotonHover.backgroundColor)
                    }
                    onMouseOut={(e) =>
                        (e.target.style.backgroundColor = estiloBoton.backgroundColor)
                    }
                />
            </form>
        </div>
    );
};

export default RegistroFormulario;
