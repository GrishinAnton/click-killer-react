import React from 'react';
import styled from 'styled-components';
import Registration from 'components/Registration/Registration'
import ButtonClicker from 'components/ButtonClicker/ButtonClicker'

export default function Wrapper({ hideRegistrationBlock, onEnter, onKiller, count, time, result }) {

    return (
        <Layout>            
            <Column>
                {hideRegistrationBlock === false ? <Registration onEnter={onEnter} /> : <ButtonClicker onKiller={onKiller} count={count} time={time} result={result}/>}
            </Column>
            <Column>
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
    border: 1px solid grey;
`;