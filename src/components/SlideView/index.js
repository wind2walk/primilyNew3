import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "../../styles/slideview.css";

const Wrapper = styled.div`
    width: 70%;
`;

const Page = styled.div`
    align:center;
    margin: 10 auto;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: bold;
  text-align: center;
`;

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed:500,
    autoplaySpeed: 10000
};

//export default class SlideView {content, className} extends React.Component {
export const SlideView = ({content, className}) => (

    <Wrapper className="grey lighten-4">
        <Slider {...settings}>
            {content.map((image, index) => (
                <Page key={index}>
                    <br/>
                    <img src={image.imageSrc}  alt={image.imagealt}/>
                    <br/>
                    <Text>{image.imageText}</Text>
                </Page>
            ))}
            {/*<Page><img src="/img/call-overview-sm.png"/></Page>
                    <Page><img src="/img/call-overview-9.png"/></Page>
                    <Page><img src="/img/call-overview-9.png"/></Page>*/}
        </Slider>
    </Wrapper>
);
export default SlideView;
