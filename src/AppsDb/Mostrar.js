import React from 'react';


export const Mostrar = () => {
    function click() {
        if (document.getElementById('Femenino').checked && document.getElementById('Peso').checked) {
            //despliega grafico niñas por peso
            document.getElementById('Cont').style.display = 'block';
        } else {
            document.getElementById('Cont').style.display = 'none';
        }
        if (document.getElementById('Femenino').checked && document.getElementById('Talla').checked) {
            //despliega grafico niñas por Talla
            document.getElementById('Cont2').style.display = 'block';
        } else {
            document.getElementById('Cont2').style.display = 'none';
        }

        if (document.getElementById('Masculino').checked && document.getElementById('Peso').checked) {
            //despliega grafico niños por peso
            document.getElementById('Cont3').style.display = 'block';
        } else {
            document.getElementById('Cont3').style.display = 'none';
        }
        if (document.getElementById('Masculino').checked && document.getElementById('Talla').checked) {
            //despliega grafico Niños por Talla
            document.getElementById('Cont8').style.display = 'block';
        } else {
            document.getElementById('Cont8').style.display = 'none';
        }
        if (document.getElementById('Femenino').checked && document.getElementById('IMC').checked) {
            //despliega grafico Niños por Talla
            document.getElementById('Cont5').style.display = 'block';
        } else {
            document.getElementById('Cont5').style.display = 'none';
        }
        if (document.getElementById('Femenino').checked && document.getElementById('VEL').checked) {
            //despliega grafico Niños por Talla
            document.getElementById('Cont2').style.display = 'block';
        } else {
            document.getElementById('Cont2').style.display = 'none';
        }
        if (document.getElementById('Masculino').checked && document.getElementById('IMC').checked) {
            //despliega grafico Niños por Talla
            document.getElementById('Cont7').style.display = 'block';
        } else {
            document.getElementById('Cont7').style.display = 'none';
        }
        if (document.getElementById('Masculino').checked && document.getElementById('VEL').checked) {
            //despliega grafico Niños por Talla
            document.getElementById('Cont4').style.display = 'block';
        } else {
            document.getElementById('Cont4').style.display = 'none';
        }
    }
    return (
        <>

            <form >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                
                    <div className="container" >
                       
                            <div className='row' >
                                <input type="radio" className="form-check-input" id="Femenino" name='Radio' onClick={click} /> Femenino
                                <br></br>
                                <br></br>
                                <input type="radio" className="form-check-input" id="Masculino" name='Radio' onClick={click} /> Masculino
                                <br></br>
                                <br></br>
                            </div>
                        
                    </div>
                
            </form>
            <form >
                <div className="container">
                    <div  className="row">
                        <input type="radio" className="form-check-input" id="Peso" name='Radio2' onClick={click} />   Peso
                        <br></br>
                        <br></br>
                        <input type="radio" className="form-check-input" id="Talla" name='Radio2' onClick={click} />   Estatura
                        <br></br>
                        <br></br>
                        <input type="radio" className="form-check-input" id="IMC" name='Radio2' onClick={click} />   IMC
                        <br></br>
                        <br></br>
                        <input type="radio" className="form-check-input" id="VEL" name='Radio2' onClick={click} />   Longitud
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </form>


        </>
    )
}