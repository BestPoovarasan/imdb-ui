import "./home.css";
import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Home() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  
  const getUsers = async () => {
    const response = await axios.get("https://imdbapi.onrender.com/movies");
    setUser(response.data);
  };
  return (
    
    <MDBContainer breakpoint="sm">
      <MDBRow  className="row-cols-1 row-cols-md-4 g-3 mt-4">
      {users.map((user, index) => (
        <MDBCol key={user._id} >
        <Link to={`/movie/${user._id}`}>
          <MDBCard className="h-100" background="transparent" shadow="3">
            <MDBCardImage
              className="thumbnail"
              src={user.images}
              alt="..."
            />
            <MDBBtn className="display-6 mt-2" size="sm" color="secondary">{user.title}</MDBBtn>
          </MDBCard>
          </Link>
        </MDBCol>
      ))}
      </MDBRow>
    </MDBContainer>
  );
}
