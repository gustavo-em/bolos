import React from 'react'
import { Fundo } from '../../components/fundo/component'
import { Botao, ColCorpo, DivTexto, Imagem, Marca, Texto, Titulo, WrapCorpo, WrapMarca } from './style'
import bolo2 from '../../images/bolo2.png'
import bolo3 from '../../images/bolo3.png'


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
                <WrapCorpo heigth_row="150px">
                    <ColCorpo heigth_col="40px">
                        <DivTexto>
                        <Titulo font_size="70px">Bolos e doces feitos com amor de forma artesanal</Titulo>
                            <Texto>
                                A Doce Cake sempre entrega um excelente
                                 trabalho com bolos feitos
                                com amor, para solicitar um bolo artesanal basta clicar em chamar no WhatsApp.
                            </Texto>

                        </DivTexto>
                    </ColCorpo>
                    <ColCorpo heigth_col="100%" width_col="50%">
                        <Imagem src={bolo2}/>
                        <Imagem src={bolo3}/>
                    </ColCorpo>
                </WrapCorpo>
                <WrapCorpo heigth_row="500px">
                    <ColCorpo heigth_col="40px">
                        <Botao href="https://api.whatsapp.com/send?phone=17992680806&text=sua%20mensagem" color="#54F470">
                            <p>Chamar no WhatsApp</p>
                        </Botao>
                    </ColCorpo>
                    <ColCorpo heigth_col="40px">
                        <Botao color="#D1954F">
                            <p>Ver mais fotos</p>
                        </Botao>
                    </ColCorpo>
                </WrapCorpo>
            </Fundo>
        </>
    )

}