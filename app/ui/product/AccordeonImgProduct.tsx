import Carousel from 'react-bootstrap/Carousel';

function AccordeonImgProduct() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img style={{ width:"100%", height:'100%'}} src="https://www.digitalresponse.es/wp-content/uploads/2020/05/campa%C3%B1as_reposicion_de_producto.jpg" alt='' ></img>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style={{ width:"100%", height:'100%'}} src="https://www.digitalresponse.es/wp-content/uploads/2020/05/campa%C3%B1as_reposicion_de_producto.jpg" alt='' ></img>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{ width:"100%", height:'100%'}} src="https://www.digitalresponse.es/wp-content/uploads/2020/05/campa%C3%B1as_reposicion_de_producto.jpg" alt='' ></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default AccordeonImgProduct;