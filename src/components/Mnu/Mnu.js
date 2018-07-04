import React from 'react';
import styled from 'styled-components';
import img from 'img/logo.svg'

export default function Mnu() {

    return (
        <MnuWrapper>
            <MnuBlock>
                <Logo>
                    <img src={img} alt="2up" />
                </Logo>
                <Clicker>
                    {/* <p>Кликер</p> */}
                </Clicker>
            </MnuBlock>
        </MnuWrapper>
    )
}

const MnuWrapper = styled.div`
    position: fixed;
    padding-top: 100px;

    width: 100px;
    height: 100%;

    background: linear-gradient(2deg, #e1de51, #d556a9);
    background-size: 400% 400%;
    animation: AnimationName 10s ease infinite;

    @keyframes AnimationName { 
        0%{background-position:79% 0%}
        50%{background-position:22% 100%}
        100%{background-position:79% 0%}
    }

    box-shadow: 0 0 16px -5px rgba(0,0,0,.5);  

    text-align: center;
`;

const MnuBlock = styled.div`
    
`;

const Logo = styled.div`
    padding-bottom: 30px;

    img {
        max-width: 80%;
        height: auto;
    }



    
`;
const Clicker = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;