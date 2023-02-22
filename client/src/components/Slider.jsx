import styled from "styled-components"
import ArrowLeft from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ArrowRight from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useState } from "react";
import { sliderImtes } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display:"none" })}

`;

const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${ porps => porps.direction === "left" && "10px"};
    right: ${ porps => porps.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 1;
`;

const Wraaper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;
const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    text-align: center;
`;
const Image = styled.img`
    height: 80%;
    background-size: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlidexIndex] = useState(0);
    const bandleClick = (direction) => {
        if(direction === "left"){
            setSlidexIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlidexIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>bandleClick("left")}>
            <ArrowLeft />
        </Arrow>
        <Wraaper slideIndex={slideIndex}>
            {sliderImtes.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img}></Image>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>
                        {item.desc}
                    </Desc>
                    <Button>바로가기</Button>
                </InfoContainer>
                </Slide>
            ))}
        </Wraaper>
        <Arrow direction="right" onClick={()=>bandleClick("right")}>
            <ArrowRight />
        </Arrow>
    </Container>
  )
}

export default Slider