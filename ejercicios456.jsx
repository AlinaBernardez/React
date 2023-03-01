import React, { useState, useEffect } from 'react';

const Ejercicios456 = () => {

    const estadoInicial =  {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San Jose'
    }
    const [date, setDate] = useState(estadoInicial);

    const tick = () => {
        setDate(date.edad + 1)
    }

    useEffect(() => {
        const timerID = setInterval (() => tick(), 1000);
        return () => {
            clearInterval (timerID)
        };
    }, []);

    return (
        <div>
            <h2>
            Hora Actual:
            {date.fecha.toLocaleTimeString()}
            </h2>
            <h3>{date.nombre} {date.apellidos}</h3>
            <h1>Edad: {date.edad}</h1>
        </div>
    );
}

export default Ejercicios456;
