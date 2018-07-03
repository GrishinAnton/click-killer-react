import React from 'react';
import styled from 'styled-components';
import Registration from 'components/Registration/Registration'

export default function Wrapper() {

    return (
        <Layout>
            
            <Column>
                <Registration />
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
    border: 1px solid grey;
`;