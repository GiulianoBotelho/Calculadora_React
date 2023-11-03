import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const BackgroundModal = styled(motion.section) `
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ContentModal = styled(motion.article) `
border-radius:6px;
background-color: black;
opacity: 0.8;
border: solid;
width: 50%;
height: 50%;
overflow: auto;
border: solid 1px aliceblue;
box-shadow: 1px 1px 1px 1px;

`

const Paragraph = styled.p `

font-size: 1.5rem;
color:aliceblue;
@media (max-width:800px) {
    font-size: 20%;
    
}
@media (max-width:1366px){
    font-size: 30%;
}
`

const ModalButton = styled.button `
position: relative;
margin-bottom:5vh;
margin-left: 4vw;
height: 3vh;
width: 4vh;
font-size: 10px;
background-color: blueviolet;
border: none;
border-radius: 8px;
transition: 500ms;
border: solid 0.2px;

;
&:hover{
    background-color: #c79af1;
    transition: 500ms;
}
`

const ModalTittle = styled.h1 `
border: solid 0.1px aliceblue;
border-radius:6px;
width: 50%;
height: 8%;
font-size: 1em;
font-weight: 800;
background-color: #DEC807;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width:800px) {
    font-size: 20%;
    
}
@media (max-width:1366px){
    font-size: 30%;
}
`




export default function Modal() {
 const [isOpen, setIsOpen] = useState (false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsOpen(true)
            document.body.classList.add('modal-open');
        },2000);
        return () => clearTimeout(timer);
        document.body.classList.remove('modal-open');

    },[])

if(!isOpen){
    return null
}
  return (
    <BackgroundModal
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:1}}
    
    >  
    <ModalTittle>Bem-vindo a minha calculadora!  <ModalButton onClick={()=> setIsOpen(false)} >X</ModalButton></ModalTittle>
          <ContentModal
          initial={{opacity:0, x:-1000}}
          animate={{opacity:1, x:0}}
          transition={{duration:1, delay:1}}
          >
            
            <Paragraph>Esta é a minha calculadora, resultado de um desafio proposto no curso Vai na Web.</Paragraph>
<Paragraph>Utilizei diversas tecnologias para desenvolvê-la:</Paragraph>
<Paragraph>HTML5: A versão mais recente do HTML, com a utilização de tags semânticas.</Paragraph>
<Paragraph>Styled-Components: Esta biblioteca permitiu componentizar os estilos da página e criar responsividade.</Paragraph>
<Paragraph>React.JS: Usei o React para a estrutura lógica do projeto.</Paragraph>
<Paragraph>Framer-Motion: Uma biblioteca do React que usei para animar este pop-up que você está lendo agora!</Paragraph>
<Paragraph>Obrigado pela visita! Espero que goste!</Paragraph>

          
          </ContentModal>
          
    </BackgroundModal>

  )
}
