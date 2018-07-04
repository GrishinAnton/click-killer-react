import React from 'react';
import styled from 'styled-components';

import LiderBoards from 'components/Boards/LiderBoards';
import PercentBoards from 'components/Boards/PercentBoards';
import PersonalBoards from 'components/Boards/PersonalBoards';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function LiderBoard({ LiderBoardType = 'liderBoard' }){
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Wrapper>
            <Body>
                <Slider {...settings}>
                    <div>
                        <LiderBoards />
                    </div>
                    <div>
                        <PersonalBoards />
                    </div>
                    <div>
                        <PercentBoards />
                    </div>  
                </Slider>
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
    padding-top: 25px;
`;