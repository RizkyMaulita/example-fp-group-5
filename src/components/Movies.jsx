import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import StarRatings from 'react-star-ratings'

function Movies({ sumMovie }) {
  const [dataMovies, setDataMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://6245aa446b7ecf057c226ee2.mockapi.io/movies")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (sumMovie) {
          const Movies = data?.slice(0, sumMovie);
          setDataMovies(Movies);
        } else {
          setDataMovies(data);
        }
      })
      .catch((err) => console.log(err));
  }, [sumMovie]);

  const goDetail = (id) => {
    navigate("/movie/" + id);
    // /product/1, /product/2
  };

  return (
    <div>
      <Row xs={2} md={3} className="g-4">
        {dataMovies?.map((movie) => (
          <Col key={movie?.id} style={{ cursor: "pointer" }}>
            <Card
               onClick={() => {
                // console.log(`Movies ${movie?.id} di click`)
                goDetail(movie?.id);
              }}
            >
              <Card.Img
                variant="top"
                src={movie?.imgUrl}
              />
              <Card.Body>
                <Card.Title>
                  {movie?.name}
                </Card.Title>
                <Card.Text
                  style={{ display: "flex", justifyContent: 'end', alignItems: 'start' }}
                >
                  {/* <div  style={{ alignSelf: 'end' }}>
                    {movie?.rating} / 10
                  </div> */}
                  <div>
                    <StarRatings
                      // rating={1}
                      rating={movie?.rating}
                      starDimension="15px"
                      starSpacing="1px"
                      // numberOfStars={1}
                      numberOfStars={10}
                      starRatedColor={'#FFD700'}
                    />
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

export default Movies;
