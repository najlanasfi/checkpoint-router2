import React , {useState} from 'react'
import { Form,Button } from "react-bootstrap";
import { setShow,show } from 'react-simple-star-rating'
import { Modal } from 'react-bootstrap';
function AddMovie({movies,setMovies}){

    const [movieToAdd, setMovieToAdd] = useState(
      {
    title: '',
    description:'',
    posterURL:'',
    rating:0
  })

    const handleAdd = ()=>{
      setMovies([...movies,movieToAdd]);
    }
    //const newmovie={title:'title',description:'defaultdescription',posterURL:'urldefault',rating:0}
    return (
      <div>
            <Form>
                <Form.Group>
                    <Form.Label>Title Movie</Form.Label>
                    <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,title:e.target.value})} type="text" placeholder="Enter Title"/>
                    <Form.Label>Description  Movie</Form.Label>
                    <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,description:e.target.value})} type="text" placeholder="Enter Description"/>
                    <Form.Label>Poster Url   Movie</Form.Label>
                    <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,posterURL:e.target.value})} type="text" placeholder="Enter URL"/>
                    <Form.Label>Rating   Movie</Form.Label>
                    <Form.Control type="number"onChange={(e)=>setMovieToAdd({...movieToAdd,rating:e.target.value})} placeholder="Enter Rating"/>
                    <Button variant="secondary" onClick={()=> handleAdd()}>Add Movie</Button>
                   
                </Form.Group>
            </Form>
  </div>
  )
}
export default AddMovie;