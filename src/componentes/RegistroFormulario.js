import React from 'react';

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

    const estiloLabelDark = {
        color: '#fff',
    };


    return (
        <div>
            <form style={estiloFormulario}>
                <h1 style={{ color: '#fff' }}>Registro</h1>
                <label style={estiloLabel}>Nombre:</label>
                <input type="text" placeholder="Nombre" style={estiloInput} required />
                <br />
                <label style={estiloLabel}>Correo:</label>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    style={estiloInput}
                    required
                />
                <br />
                <label style={estiloLabel}>Contraseña:</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    style={estiloInput}
                    required
                />
                <br />
                <label style={estiloLabel}>Confirmar contraseña:</label>
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    style={estiloInput}
                    required
                />
                <br />
                <label style={estiloLabel}>Fecha de nacimiento:</label>
                <input
                    type="date"
                    style={estiloInput}
                    required
                />
                <label style={estiloLabel}>pais:</label>
                <select style={estiloInput}>
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
                    required
                />
                <br/>
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
