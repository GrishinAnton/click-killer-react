import React from 'react';
import styled from 'styled-components';
import Registration from 'components/Registration/Registration';
import ButtonClicker from 'components/ButtonClicker/ButtonClicker';
import LiderBoard from 'components/Liderboard/LiderBoard';

export default function Wrapper({ hideRegistrationBlock, onEnter, onKiller, count, time, result, reset, passwordValue, changePassword }) {

    return (
        <Layout>            
            <Column>
                {hideRegistrationBlock === false ? <Registration onEnter={onEnter} passwordValue={passwordValue} changePassword={changePassword} /> : <ButtonClicker onKiller={onKiller} count={count} time={time} result={result} reset={reset}/>}
            </Column>
            <Column>
                <LiderBoard />
            </Column>
        </Layout>
    )
}

const Layout = styled.div`
    padding-left: 120px;
    padding-right: 50px;
    max-width: 1220px;
    height: 100%;

    display: flex;
    justify-content: space-between;

`;

const Column = styled.div`
    width: 48%;

    margin-top: 30px;

    border-radius: 5px;
    box-shadow: 0 0 16px -5px rgba(0,0,0, .5)
`;