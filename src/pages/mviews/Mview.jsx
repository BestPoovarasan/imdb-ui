import "./mview.css"
import React, { useState, useEffect } from "react";
import {MDBContainer} from 'mdb-react-ui-kit';
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function Mview(props) {
  const [list, setList] = useState({});
	const { _id } = useParams();
	const navigate = useNavigate();
	useEffect(
		function () {
			async function getCrudById() {
				try {
					const response = await axios.get(`https://imdbapi.onrender.com/movie/${_id}`);
					setList(response.data);
				} catch (error) {
					console.log("error", error);
				}
			}
			getCrudById();
		},
		[props]
	);
  async function handleDelete() {
		try {
			await axios.delete(`https://imdbapi.onrender.com/deletedmovie/${_id}`);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	}
  return (
    <MDBContainer className="mview">
        <div>
            <img className="poster"src={list.images} />
        </div>
        <div>
            <h5>Movie Name: {list.title}</h5>
            <h5>Year of Release:{list.year}</h5>
            <h5>starring :<span>{list.actors}</span></h5>
            <h5>Producer :<span>{list.producer}</span></h5>
            <button className="delete" onClick={handleDelete}>Delete</button>
            <Link to ={`/editmovie/${_id}`}>
            <button className="edit">Edit</button>
            </Link>
        </div>
    </MDBContainer>
  );
}