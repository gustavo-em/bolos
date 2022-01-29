import React from 'react'
import { Fundo } from '../../components/fundo/component'
import { ColCorpo, DivBotoes, DivTexto, Imagem, Marca, Texto, Titulo, WrapCorpo, WrapMarca } from './style'



export const Principal = ()=>{

    return (
        <>
            <Fundo>
                <div className="wrap_logo">
                    <div className="logo"></div>
                </div>
                <WrapMarca>
                    <Marca cor="#D1954F">Doce</Marca>
                    <Marca cor="#E0749B">Cake</Marca>
                </WrapMarca>
                <WrapCorpo>
                    <ColCorpo>
                    <DivTexto>
                        <Titulo>Titulo do texto</Titulo>
                        <Texto>uahsduisadhdasdasdasdasdadasdasdasdasdasdias</Texto>
                        <Texto>uahsduisadhdasdasdasdasdadasdasdasdasdasdias</Texto>
                        <Texto>uahsduisadhdasdasdasdasdadasdasdasdasdasdias</Texto>
                        <Texto>uahsduisadhdasdasdasdasdadasdasdasdasdasdias</Texto>
                        <Texto>uahsduisadhdasdasdasdasdadasdasdasdasdasdias</Texto>
                    </DivTexto>
                    </ColCorpo>
                    <ColCorpo>
                        <Imagem/>
                        <Imagem/>
                        <Imagem/>
                        <Imagem/>
                    </ColCorpo>
                </WrapCorpo>
                
            </Fundo>
        </>
    )

}