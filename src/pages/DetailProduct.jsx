import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function DetailProduct() {
  let params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (params?.id) {
      const id = params?.id;
      fetch("https://6245aa446b7ecf057c226ee2.mockapi.io/products/" + id)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setProduct(data);
        })
        .catch((err) => console.log(err));
    }
  }, [params]);

  const checkSoldout = () => {
    if (product?.quantity > 0) {
      return false
    } else {
      return true
    }
  } 
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0" }}> Detail </h1>
      <div className="row row-cols-2">
        <div>
          <img
            src={product?.imgUrl}
            width="100%"
            height="90%"
            alt="img-product"
          />
        </div>
        <div>
          <h3> {product?.name} </h3>

          <p>Description : {product?.description}</p>

          <p>Rp. {Number(product?.price).toLocaleString("id-ID")}</p>

          {
            checkSoldout()
            ? null
            : <FontAwesomeIcon icon={faCartPlus} />
          }
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
