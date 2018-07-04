import React from 'react';
import styled from 'styled-components';

export default function LiderBoards() {

    return (
        <List>
            <li>
                <span>id</span>
                <span>Кол-во</span>
            </li>
        </List>
    )

}

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

`;