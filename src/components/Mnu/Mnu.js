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
                    <p>Кликер</p>
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
    background-color: gray;
    text-align: center;
`;

const MnuBlock = styled.div`
    
`;

const Logo = styled.div`
    padding-bottom: 30px;
    border-bottom: 1px solid yellow;

    img {
        max-width: 80%;
        height: auto;
    }



    
`;
const Clicker = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;