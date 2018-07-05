import React from 'react';
import styled from 'styled-components';


export default function PercentBoards() {

    return (
        <Percent>
            <H1>
                <h1>Статистика</h1>
            </H1>
            <PercentTable>
                <PercentTr>
                    <PercentTd>
                        > 5
                    </PercentTd>
                    <PercentTd>
                        100 чел
                    </PercentTd>
                    <PercentTd>
                        10%
                    </PercentTd>
                </PercentTr>
                <PercentTr>
                    <PercentTd>
                        5 - 7.5
                    </PercentTd>
                    <PercentTd>
                        200 чел
                    </PercentTd>
                    <PercentTd>
                        20%
                    </PercentTd>
                </PercentTr>
                <PercentTr>
                    <PercentTd>
                        7.5 - 10
                    </PercentTd>
                    <PercentTd>
                        500 чел
                    </PercentTd>
                    <PercentTd>
                        50%
                    </PercentTd>
                </PercentTr>
            </PercentTable>
        </Percent>
    )

}

const H1 = styled.div`
    h1 {
        margin: 0;
        padding: 0;
        margin-bottom: 15px;
        font-size: 26px;
        line-height: 26px;
    }
`;

const Percent = styled.div`

`;

const PercentTable = styled.div`
    display: table;
`;

const PercentTr = styled.div`
    display: table-row;

    
`;

const PercentTd = styled.div`
    display: table-cell;

    padding: 10px;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
`;