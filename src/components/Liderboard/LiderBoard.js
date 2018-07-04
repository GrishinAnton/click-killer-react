import React from 'react';
import styled from 'styled-components';

import LiderBoards from 'components/Boards/LiderBoards';
import PercentBoards from 'components/Boards/PercentBoards';
import PersonalBoards from 'components/Boards/PersonalBoards';

export default function LiderBoard({ LiderBoardType = 'liderBoard' }){

    return (
        <Wrapper>
            <Buttons>
                <input type="radio" name="liderboard" value="liderBoard" />
                <input type="radio" name="liderboard" value="personalBoard" />
                <input type="radio" name="liderboard" value="percentBoard" />
            </Buttons>
            {/* будет три вида отображения в зависимости от выбранного радиобаттона
                Поставить slick слайдер
                https://github.com/akiran/react-slick
            */}
            <Body>
                {
                    LiderBoardType === 'liderBoard' ? <LiderBoards /> : 
                    LiderBoardType === 'personalBoard' ? <PersonalBoards /> :
                    LiderBoardType === 'percentBoard' ? <PercentBoards /> : ''
                }
            </Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 30px;
`;

const Buttons = styled.div`
    text-align: center;
`;

const Body = styled.div`

`;