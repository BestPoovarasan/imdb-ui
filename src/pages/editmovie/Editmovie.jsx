import { useEffect } from "react";
import "./editmovie.css";
import { MDBInput, MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate,useParams, } from "react-router-dom";


// <----------formik validate---------->
const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Enter Movie Title";
    } else if (values.title) {
      errors.name = "Error";
    }
    if (!values.year) {
      errors.year = "Enter Movie Year";
    } else if (values.year) {
      errors.name = "Error";
    }
    if (!values.runtime) {
      errors.runtime = "Enter Movie Runtime";
    } else if (values.runtime) {
      errors.name = "Error";
    }
    if (!values.genere) {
      errors.genere = "Enter Movie Genere";
    } else if (values.genere) {
      errors.name = "Error";
    }
    if (!values.actor) {
      errors.actor = "Enter Movie Actor";
    } else if (values.actor) {
      errors.name = "Error";
    }
    if (!values.producer) {
      errors.producer = "Enter Movie Producer";
    } else if (values.producer) {
      errors.name = "Error";
    }
   
    return errors;
  };

export default function Editmovie() {
    const { _id } = useParams();
  const navigate = useNavigate();

   //<----------- Formik values------------>
  let reg = useFormik({
    initialValues: {
      title: "",
      year: "",
      runtime: "",
      genres: "",
      actors: "",
      producer: "",
      images: ""
    },
     validate,
      // <-------------Axios-------------->
      onSubmit: async (values) => {
        try {
          const addmovie = await axios.patch(`https://imdbapi.onrender.com/updatedmovie/${_id}`, values);
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      },
    });

   const getUserById = async () => {
    const response = await axios.get(`https://imdbapi.onrender.com/movie/${_id}`);
    reg.setValues(response.data)}
  
    useEffect(() => {
      getUserById();
    }, []);
  
  return (
    <MDBContainer breakpoint="sm" className="createmovie">
      <form onSubmit={reg.handleSubmit} className="edtmovies" >
        <h1 className="title">Edit Movie</h1>
        <MDBInput
          title="title"
          className="mb-4"
          label="Movie Title"
          name="title"
          value={reg.values.title}
          onChange={reg.handleChange}
        />
        {reg.errors.title ? (
          <div style={{ color: "red" }}>{reg.errors.title}</div>
        ) : null}
        <MDBInput
         label="Year"
          className="mb-4"
          id="form1Example2"
          name="year"
          value={reg.values.year}
          onChange={reg.handleChange}
        />
        {reg.errors.year ? (
          <div style={{ color: "red" }}>{reg.errors.year}</div>
        ) : null}
        <MDBInput
          type="text"
          className="mb-4"
          id="form1Example2"
          label="Runtime"
          name="runtime"
          value={reg.values.runtime}
          onChange={reg.handleChange}
        />
        {reg.errors.runtime ? (
          <div style={{ color: "red" }}>{reg.errors.runtime}</div>
        ) : null}
        <MDBInput
          type="text"
          className="mb-4"
          id="form1Example2"
          label="Genre"
          name="genres"
          value={reg.values.genres}
          onChange={reg.handleChange}
        />
        {reg.errors.genres ? (
          <div style={{ color: "red" }}>{reg.errors.genres}</div>
        ) : null}
        <MDBInput
          type="text"
          className="mb-4"
          id="form1Example2"
          label="Actors"
          name="actors"
          value={reg.values.actors}
          onChange={reg.handleChange}
        />
        {reg.errors.actors ? (
          <div style={{ color: "red" }}>{reg.errors.actors}</div>
        ) : null}
        <MDBInput
          type="text"
          className="mb-4"
          id="form1Example2"
          label="Producer"
          name="producer"
          value={reg.values.producer}
          onChange={reg.handleChange}
        />
        {reg.errors.producer ? (
          <div style={{ color: "red" }}>{reg.errors.producer}</div>
        ) : null}

        <MDBInput
          label="URL input"
          className="mb-4"
          type="text"
          name="images"
          value={reg.values.images}
          onChange={reg.handleChange}
        />
        <MDBBtn type="submit">Update</MDBBtn>
      </form>
    </MDBContainer>
  );
}
