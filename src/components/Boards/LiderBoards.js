import React from 'react';
import styled from 'styled-components';

export default function LiderBoards() {

    return (
        <List>
            <li>
                <span>1.</span>
                <span>email</span>
                <span>20 к/с</span>
            </li>
            <li>
                <span>2.</span>
                <span>email</span>
                <span>15 к/с</span>
            </li>
            <li>
                <span>3.</span>
                <span>email</span>
                <span>13 к/с</span>
            </li>
        </List>
    )
}

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0px;
        }
    }

    span:first-of-type {
        margin-right: 10px;
    }

    span:nth-child(2) {
        margin-right: 10px;
    }

    span:nth-child(3) {
        font-weight: bold;
    }

`;