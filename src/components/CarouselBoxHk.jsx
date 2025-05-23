import { Carousel } from "react-bootstrap";
import BirdImage from "../assets/bird.jpg";
import FieldImage from "../assets/field.jpg";
import FlowersImage from "../assets/flowers.jpg";
import MountainsImage from "../assets/mountains.jpg";

export const CarouselBoxHk = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={BirdImage} className="d-block w-100" alt="Bird" />
                <Carousel.Caption>
                    <h3>Bird Image</h3>
                    <p>This bird posed so perfectly, I think it's secretly a professional model!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={FieldImage} className="d-block w-100" alt="Field" />
                <Carousel.Caption>
                    <h3>Field Image</h3>
                    <p>This field is a perfect canvas for a sunset!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={FlowersImage} className="d-block w-100" alt="Flowers" />
                <Carousel.Caption>
                    <h3>Flowers Image</h3>
                    <p>These flowers are a perfect blend of colors!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={MountainsImage} className="d-block w-100" alt="Mountains" />
                <Carousel.Caption>
                    <h3>Mountains Image</h3>
                    <p>This is a beautiful mountain landscape!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};
