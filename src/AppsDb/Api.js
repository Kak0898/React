import React , { useState, useEffect } from 'react';
const Api = async() => {
    const url = 'http://10.5.225.24/api/index.php/CurvaCrecimiento/peso/?cp=108280';
    const resp = await fetch(url);
    const {data} = await resp.json();

    const paciente=data.map(pac=>{
        return{
            fecha: pac.fecha,
            peso: pac.peso,
            url:pac.url
        }
    })
    console.log(paciente)
    
    return(
        <>
            <div>
                <h1>Hola</h1>
                <ol>
                    {
                        
                    }
                </ol>
            </div>
        </>
    )
}

export default Api;