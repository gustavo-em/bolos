import styled from "styled-components";


export const Marca = styled.h1`
    font-size: 120px;
    margin: 0px 50px;
    color: ${(props)=>props.cor};

    
`

export const WrapMarca = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`



export const Titulo = styled.h1`
    font-size: 90px;
    color: black;
    font-weight: bold;

`;
export const Texto = styled.p`
    font-size: 24px;
    color: #242323;
`;


export const WrapCorpo = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 0px 50px;


`;
export const ColCorpo = styled.div`
    width: 40vw;
    height: 100%;
    display: flex;
    justify-content: center;
`;


export const Imagem = styled.div`
    width: 500px;
    height: 200px;
    margin: 0 20px;
    background-color: #232224;
`;

export const DivTexto = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;
