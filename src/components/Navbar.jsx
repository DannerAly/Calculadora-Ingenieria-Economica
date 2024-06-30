import React, { useState } from "react";
import styled from 'styled-components';
import BurguerButton from "./BurguerButton";
//import CalcularVFinal from "./calculadoras/CalcularVFinal";
//import CalcularVFinalCom from "./calculadoras/CalcularVFinalCom";
import Inicio from "./Inicio";
import InteresSimple from "./Temas/InteresSimple";
import InteresCompuesto from "./Temas/InteresCompuesto";
import FlujosDeEfectivo from "./Temas/FlujosDeEfectivo";
import Developer from "./Developer";

function Navbar() {

    const [contenedor, setContenedor] = useState(<div><Inicio /></div>);
    const [clicked, setClicked] = useState(false);

    const handleClick = (pagina) => {
        //cuando esta true lo pasa a false y viceversa
        if (window.innerWidth <= 768) {
            setClicked(!clicked);
        }
        switch (pagina) {
            case 1:
                setContenedor(<div><Inicio /></div>)
                break;
            case 2:
                setContenedor(<InteresSimple />);
                break;
            case 3:
                setContenedor(<div><InteresCompuesto/></div>);
                break;
            case 4:
                setContenedor(<div><FlujosDeEfectivo/></div>);
                break;
            case 5:
                setContenedor(<div><Developer /></div>);
                break;
            default:
                setContenedor(null);

        }

    }
    return (

        <>
            <NavContainer>
                <h2>Ingeniería <span>Económica</span>  </h2>
                <div className={`links ${clicked ? 'active' : ''}`} >
                    <div className="a" onClick={() => handleClick(1)} >Inicio</div>
                    <div className="a" onClick={() => handleClick(2)} >Interes Simple</div>
                    <div className="a" onClick={() => handleClick(3)} >Interes Compuesto</div>
                    <div className="a" onClick={() => handleClick(4)} >Flujos de Efectivo</div>
                    <div className="a" onClick={() => handleClick(5)} >Desarrolladores</div>
                </div>
                <div className="burguer">
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${clicked ? 'active' : ''}`} ></BgDiv>
            </NavContainer>

            <div className="contenedorPrincipal">
                {contenedor && <div> {contenedor} </div>}
            </div>



        </>

    );
}

export default Navbar;

const NavContainer = styled.nav` 
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;  
        }
    }
    padding: .4rem;
    background-color: #37485f;
    //background-color: #243e53;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        .a{
            color: black;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            .a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }     
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        .a{
            font-size: 2rem;
            margin-top: 1rem;
            color: #ffffff;
        }

    }

    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    position: absolute;
//    background-color: #89ABD9;
    background-color: #466C8C;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    width: 100%;
    height: 100%;
    z-index: -1
`