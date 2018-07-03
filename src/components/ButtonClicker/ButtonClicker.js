import React from 'react';
import styled from 'styled-components';

export default function ButtonClicker() {

    return (
        <Wrapper>
            <HowClick>
                <p>100</p>
            </HowClick>
            <ButtonClick>
                <button>Фигачим тут!</button>
            </ButtonClick>
            <Timer>
                <p>Время из тикин эвэй</p>
            </Timer>
        </Wrapper>
    )

}


const Wrapper = styled.div`

`;

const HowClick = styled.div`

`;

const ButtonClick = styled.div`

`;

const Timer = styled.div`

`;