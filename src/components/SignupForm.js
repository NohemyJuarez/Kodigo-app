// components/SignupForm.js

import React from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container">
            <h2>Crear Cuenta</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" {...register("name", { required: true })} className="form-control" />
                {errors.name && <span className="text-danger">Este campo es obligatorio</span>}

                <label htmlFor="email">Correo:</label>
                <input type="email" {...register("email", { required: true })} className="form-control" />
                {errors.email && <span className="text-danger">Este campo es obligatorio</span>}

                <label htmlFor="password">Contraseña:</label>
                <input type="password" {...register("password", { required: true })} className="form-control" />
                {errors.password && <span className="text-danger">Este campo es obligatorio</span>}

                <button type="submit" className="btn btn-success mt-3">Registrar</button>
            </form>
        </div>
    );
};

export default SignupForm;
