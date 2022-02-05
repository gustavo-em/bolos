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
    font-size: ${(props)=>props.font_size};
    color: black;
    font-weight: bold;
    text-align: center;

    @media(max-width: 1400px) {
        font-size: calc(${(props)=>props.font_size} - 30px);
        line-height: 30px;
    }
    line-height: 50px;
    padding: 20px;

    ::after{
        content: '';
        display: block;
        background-color: #232224;
        height: 5px;
        width: 30%;
        text-align: center;
        margin: 0 auto;
    }

`;

export const Texto = styled.p`
    font-size: 24px;
    color: #242323;
    line-height: 20px;
`;

export const WrapCorpo = styled.div`
    width: 100%;
    height: ${(props)=>props.heigth_row};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 0px 50px;
`;

export const ColCorpo = styled.div`
    width: 40vw;
    height: ${(props)=>props.heigth_col};
    display: flex;
    justify-content: center;
`;

export const Imagem = styled.div`
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: ${(props)=>`url(${props.src})`};
    margin: 10px;

    @media (max-width: 800px) {
        width: 500px;
        height: 500px;
    }   
    
`;

export const DivTexto = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;


export const Botao = styled.a.attrs(props=>({
    href: props.href
}))`
    width: 300px;
    height: 60px;
    background-color: ${(props)=>props.color};
    display: block;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000071;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 30px;
    }
    outline: none;
    text-decoration: none;
    color: inherit;

`