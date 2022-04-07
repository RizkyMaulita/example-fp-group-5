import React, { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StarRatings from 'react-star-ratings'
import { useNavigate, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function DetailMovie() {
  let params = useParams();
  const [movie, setMovie] = useState({});
  const [form, setForm] = useState({
    rating: 0,
    comment: ''
  })

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (params?.id) {
      const id = params?.id;
      fetch("https://6245aa446b7ecf057c226ee2.mockapi.io/movies/" + id)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setMovie(data);
        })
        .catch((err) => console.log(err));
    }
  }, [params]);

  const checkLogin = () => {
    if (localStorage.getItem('userLogin')) {
      return true
    } else {
      return false
    }
  }

  const onSendReview = () => {
    if (checkLogin()) {
      // dia bisa input      
      const lastReview = movie?.review
      let currRating = form.rating
      let avgRating = currRating
      const userLogin = localStorage.getItem('userLogin')

      const currReview = [
        {
          username: userLogin,
          rating: form.rating,
          comment: form.comment
        },
      ]

      if (lastReview?.length) {
        for (let i = 0; i < lastReview.length; i++) {
          currRating += lastReview[i]?.rating

          currReview.push(lastReview[i])
        }
        avgRating = currRating / (lastReview.length + 1)
      }

      const payload = {
        rating: avgRating,
        review: currReview
      }
      if (params?.id) {
        const id = params?.id
        fetch('https://6245aa446b7ecf057c226ee2.mockapi.io/movies/' + id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          toast.success(`Success input review !`)
          // console.log(data)
          setMovie(data)
          setForm({
            rating: 0,
            comment: ''
          })
        })
        .catch(err => console.log(err))
      }
    } else {
      navigate('/login', { state: { 
        from: location 
      }})
    }
  }

  const checkDisableReview = () => {
    if (form.comment || form.rating) {
      return false
    } else {
      return true
    }
  }

  return (
    <div style={{ marginBottom: '100px' }}>
      <ToastContainer 
        position={'top-center'}
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <h1 style={{ textAlign: "center", margin: "30px 0" }}> Detail </h1>
      <div className="row row-cols-2">
        <div>
          {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe> */}
          {
            movie?.trailerUrl
            ? <iframe width="420" height="345" src={movie?.trailerUrl}> </iframe>
            : <img
                src={movie?.imgUrl}
                width="400"
                height="400"
                alt="img-movie"
              />
          }

        </div>
        <div>
          <h3> {movie?.name} </h3>

          <p>Pemain : {movie?.pemain}</p>
          <p>Tanggal Release : {movie?.year}</p>

          <p>Rating : {movie?.rating?.toFixed(1)} / 10</p>
          <div>
            {/* <StarRatings
              // rating={1}
              rating={movie?.rating}
              starDimension="15px"
              starSpacing="1px"
              // numberOfStars={1}
              numberOfStars={10}
              starRatedColor={'#FFD700'}
            /> */}
          </div>
        </div>

        
      </div>
      <div>
          <h3 className="my-5">Review</h3>
          <div className="row mb-5">
            <div className="col-10 mx-5">
              <Card>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formRating">
                      <Form.Label style={{ marginRight: '10px' }}>Rating :</Form.Label>
                      <StarRatings 
                        rating={form.rating}
                        changeRating={(number) => setForm({ ...form, rating: number })}
                        starDimension="15px"
                        starSpacing="1px"
                        numberOfStars={10}
                        starRatedColor={'#FFD700'}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRating">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control as="textarea" placeholder="Leave a comment here" value={form.comment} onChange={(event) => {
                        setForm({
                          ...form,
                          comment: event?.target?.value
                        })
                      }} />
                    </Form.Group>
                  </Form>
                  <div className="d-flex justify-content-end">
                    <Button onClick={() => onSendReview()} disabled={checkDisableReview()}>
                      Send 
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <h5 >List Review : </h5>
          <ul>
            {
              movie?.review?.map((movieReview, index) => (
                <li key={index} style={{ marginBottom: '20px'}}>
                  <p style={{ margin: 0, fontWeight: 'bold' }}>{movieReview?.username}</p>
                  <p style={{ margin: '0 10px' }}>Rating : {movieReview?.rating || 0} / 10</p>
                  <p style={{ margin: '0 10px' }}>Comment : {movieReview?.comment}</p>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  );
}

export default DetailMovie;
