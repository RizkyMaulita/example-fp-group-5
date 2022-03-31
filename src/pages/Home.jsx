import { Carousel } from "react-bootstrap";
import ayamImg from '../assets/img/ayam.jpg'

function HomePage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ayamImg}
          // src="https://w7.pngwing.com/pngs/744/638/png-transparent-coffee-bean-espresso-caffxe8-macchiato-coffee-beans-cafe-coffee-cocoa-bean.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dxdgvvdwi/image/upload/v1648564810/ayam3_nawqor.jpg"
          // src="https://w7.pngwing.com/pngs/1015/132/png-transparent-coffee-beans-coffee-theme-beautifully-cafe-advertising-coffee.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dxdgvvdwi/image/upload/v1648564808/ayam2_lobqjj.jpg"
          // src="https://w7.pngwing.com/pngs/744/638/png-transparent-coffee-bean-espresso-caffxe8-macchiato-coffee-beans-cafe-coffee-cocoa-bean.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;
