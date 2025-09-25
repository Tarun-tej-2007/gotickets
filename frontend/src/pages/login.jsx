import React, { useState, useEffect } from 'react';

const styles = {
    page: {
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url("room.jpeg") no-repeat center center/cover',
    },
    formContainer: {
        background: 'rgba(255, 255, 255, 0.85)',
        padding: '30px',
        borderRadius: '10px',
        width: '350px',
        maxWidth: '90%',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '20px',
        color: '#000',
    },
    label: {
        display: 'block',
        margin: '10px 0 5px',
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '25px',
        outline: 'none',
        marginBottom: '15px',
        background: '#c1c7bd',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '12px',
        background: '#555',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background 0.3s ease',
    }
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
    }, [email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Attempting to log in with:', { email, password });

        if (email === 'user@example.com' && password === 'password123') {
            setMessage('Login successful! 🎉');
        } else {
            setMessage('Invalid email or password. 😔');
        }
    };

    return (
        <div style={{
            ...styles.page,
        }}>
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Already have an account</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" style={styles.label}>Email ID</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder=""
                        required
                        style={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder=""
                        required
                        style={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" style={styles.button}>Log in</button>

                    {message && <p style={{ textAlign: 'center', marginTop: '15px', color: message.includes('successful') ? 'green' : 'red' }}>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;