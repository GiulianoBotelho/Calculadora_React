import { useState } from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import backgroundImage from './assets/code.jpg'


const GlobalCSS = createGlobalStyle`
 *{
  font-family: 'Pixelify Sans', sans-serif;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 1000;
  font-size: 2rem;
  padding:0;
  margin:0;
  box-sizing:border-box;
 }
`

const Body = styled.body`
background-image: url(${backgroundImage});
background-position: center;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
flex-direction: column;
 `

const Botao = styled.button`
 display: flex;
       align-items: center;
       justify-content: center;
opacity:0.8;
cursor:pointer;
width: 8vw;
height: 12vh;
border-radius: 40px;
font-size: 1.2rem;
transition: 500ms;
border: solid;
box-shadow: 1px 1px 1px 1px;
background-color: rgb(5, 130, 220);    
&:hover{
  scale: 1.01;
  transition: 500ms;
  opacity: 1;
}


@media (max-width: 481px)  {
       font-size: 1rem;
       width: 20vw;
       height:8vh;
        
    }
    @media (max-width: 600px){
        width: 14vw;

      }

    @media (max-width: 1024px){
      font-size: 1.2rem;
     
    }

`
const BotaoOperador = styled.button`
display: flex;
align-items: center;
justify-content: center;
opacity:0.7;
cursor:pointer;
width: 8vw;
height: 12vh;
border-radius: 40px;
font-size: 1.2rem;
transition: 200ms;
border: solid;
box-shadow: 1px 1px 1px 1px;
background-color: rgb(222, 200, 7);
&:hover{
  scale: 1.01;
  transition: 200ms;
  opacity: 1;
}

@media (max-width: 481px)  {
       font-size: 0.5rem;
       width: 18vw;
       height: 8vh;
       
    }
    @media (max-width: 600px){
        width: 14vw;
        font-size: 0.3rem;

      }

  
    @media (max-width: 1024px){
      font-size: 0.5rem;
     
    }

    @media (max-width: 1280px){
          font-size: 0.8rem;
    }


`

const Visor = styled.div`
max-width: 33%;
overflow: hidden;
background-color: #000000;
color: white;
opacity: 0.9;
  font-size: 2rem;
  text-shadow: 0 0 5px blueviolet,
                 0 0 10px  blueviolet,
                 0 0 15px  white,
                 0 0 20px  white;
  border: solid #000000;
  width: 33%;
  border-radius: 14px;
  height: 8vh;
  box-shadow: 2px 2px 2px 2px #000000;

  @media (max-width: 481px)  {
       font-size: 0.5rem;
       height: 6vh;
       width: 78vw;
        
    }
    @media (max-width: 600px){
      width: 58vw;

    }

    @media (max-width: 1024px){
      font-size: 1.2rem;
      
    }

`
const Corpo = styled.div`
border: solid;
border-radius: 14px;
width: 32.9%;
display: flex;
align-items: center;
flex-wrap: wrap;
box-shadow: 2px 2px 2px 2px;
background-color: #000000;
opacity:1;

@media (max-width: 481px)  {
       width: 78%;
    }
    @media (max-width: 600px){
      width: 58%;

    }

`

function App() {

  const [primeiroNumero, setPrimeiroNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [operador, setOperador] = useState(null);
  const [resultado, setResultado] = useState("");

  const Clicar = (item) => {
    setResultado("")
    if (!operador) {
      setPrimeiroNumero(primeiroNumero.concat(String(item.target.value)))
    }
    else {
      setSegundoNumero(segundoNumero.concat(String(item.target.value)))
    }
  }

  const ClicarOperador = (item) => {
    setResultado("")
    setOperador(item.target.value)
  }

  const Limpar = () => {
    setPrimeiroNumero("")
    setSegundoNumero("")
    setOperador(null)
    setResultado("")
  }

  const calcular = () => {
    let Resposta = ""
    if (operador === "+") {
      setPrimeiroNumero("")
      setSegundoNumero("")
      setOperador(null)
      Resposta = Number(primeiroNumero) + Number(segundoNumero)
    } else if (operador === "-") {
      setPrimeiroNumero("")
      setSegundoNumero("")
      setOperador(null)
      Resposta = Number(primeiroNumero) - Number(segundoNumero)
    } else if (operador === "X") {
      setPrimeiroNumero("")
      setSegundoNumero("")
      setOperador(null)
      Resposta = Number(primeiroNumero) * Number(segundoNumero)
    } else if (operador === "÷") {
      setPrimeiroNumero("")
      setSegundoNumero("")
      setOperador(null)

      Resposta = Number(primeiroNumero) / Number(segundoNumero)
    }

    setResultado(Resposta.toString())
  }

  return (
    <>
      <GlobalCSS />

      <Body>
        <Visor> {primeiroNumero} {operador} {segundoNumero} {resultado} </Visor>
        <Corpo>
          <div>
            <Botao onClick={Clicar} value="7">7</Botao>
            <Botao onClick={Clicar} value="4">4</Botao>
            <Botao onClick={Clicar} value="1">1</Botao>
            <Botao onClick={Clicar} value="0">0</Botao>
          </div>


          <div>
            <Botao onClick={Clicar} value="8">8</Botao>
            <Botao onClick={Clicar} value="5">5</Botao>
            <Botao onClick={Clicar} value="2">2</Botao>
            <BotaoOperador onClick={ClicarOperador} value="-">-</BotaoOperador>
          </div>


          <div>
            <Botao onClick={Clicar} value="9">9</Botao>
            <Botao onClick={Clicar} value="6">6</Botao>
            <Botao onClick={Clicar} value="3">3</Botao>
            <BotaoOperador onClick={ClicarOperador} value="+">+</BotaoOperador>
          </div>

          <div>
            <BotaoOperador value="Limpar" onClick={Limpar}>AC</BotaoOperador>
            <BotaoOperador onClick={ClicarOperador} value="÷">÷</BotaoOperador>
            <BotaoOperador onClick={ClicarOperador} value="X">x</BotaoOperador>
            <BotaoOperador onClick={calcular}>=</BotaoOperador>
          </div>
        </Corpo>
      </Body>

    </>
  );
}

export default App;
