// components/LoginForm.js

import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <label htmlFor="email">Correo:</label>
                <input type="email" {...register("email", { required: true })} className="form-control" />
                {errors.email && <span className="text-danger">Este campo es obligatorio</span>}

                <label htmlFor="password">Contraseña:</label>
                <input type="password" {...register("password", { required: true })} className="form-control" />
                {errors.password && <span className="text-danger">Este campo es obligatorio</span>}

                <button type="submit" className="btn btn-primary mt-3">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;
