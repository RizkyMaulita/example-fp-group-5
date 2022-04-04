import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Products({ sumProduct }) {
  const [dataProducts, setDataProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://6245aa446b7ecf057c226ee2.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (sumProduct) {
          const products = data?.slice(0, sumProduct);
          setDataProducts(products);
        } else {
          setDataProducts(data);
        }
      })
      .catch((err) => console.log(err));
  }, [sumProduct]);

  const goDetail = (id) => {
    navigate("/product/" + id);
    // /product/1, /product/2
  };

  return (
    <div>
      <Row xs={2} md={3} className="g-4">
        {dataProducts?.map((product) => (
          <Col key={product?.id} style={{ cursor: "pointer" }}>
            <Card>
              <Card.Img
                variant="top"
                src={product?.imgUrl}
                onClick={() => {
                  // console.log(`products ${product?.id} di click`)
                  goDetail(product?.id);
                }}
              />
              <Card.Body>
                <Card.Title
                  onClick={
                    () => goDetail(product?.id)
                    // console.log(`products ${product?.id} di click`)
                  }
                >
                  {product?.name}
                </Card.Title>
                <Card.Text
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    onClick={
                      () => goDetail(product?.id)
                      // console.log(`products ${product?.id} di click`)
                    }
                  >
                    Rp. {Number(product?.price).toLocaleString("id-ID")}
                  </div>
                  <div
                    onClick={() =>
                      console.log(`add to chart products ${product?.id}`)
                    }
                  >
                    <FontAwesomeIcon icon={faCartPlus} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
