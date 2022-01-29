import React from 'react'
import { Background } from './styles'


export function Fundo({children}){

    return (
        <>
            <Background>
                <div className="imagem">                    
                </div>
                {children}
            </Background>
        </>    
    )

}