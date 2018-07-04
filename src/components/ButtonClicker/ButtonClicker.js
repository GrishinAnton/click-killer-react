import React from 'react';
import styled from 'styled-components';

export default function ButtonClicker({ onKiller, count, time }) {

    return (
        <Wrapper>
            <HowClick>
                <p>{count}</p>
            </HowClick>
            <ButtonClick>
                <button onClick={onKiller}>Фигачим тут!</button>
            </ButtonClick>
            <Timer>
                <p>Время из тикин <b>{time}</b>c эвэй</p>
            </Timer>
        </Wrapper>
    )

}


const Wrapper = styled.div`
    padding: 30px;

`;

const HowClick = styled.div`
    p {
        margin: 0;
        padding: 0;
        
        text-align: center;

        font-size: 26px;
        font-weight: bold;
    }
`;

const ButtonClick = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;

    button {
        width: 100%;
        height: 200px;
        text-align: center;
        line-height: 200px;
    }
`;

const Timer = styled.div`

    p {
        margin: 0;
        padding: 0;
        
        text-align: center;

        font-size: 26px;
        font-weight: bold;
    }
`;