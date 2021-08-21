
 import './App.css';
// https://omdbapi.com/?t=the avengers&apikey=666f26e0
import {useState,useEffect} from 'react';








function App() {
  let[movieinfo,setMovieinfo]=useState(null);
  let[title,setTitle]=useState("the avengers");
 
  useEffect(() =>{
  
    getMovieData();
 
  },[])
   function readTitle(value){
     setTitle(value);
    

   }
   function getMovieData(){
    let url=`https://omdbapi.com/?t=${title}&apikey=666f26e0`
    fetch(url)
    .then( (response)=>response.json()  )
    .then((movie)=>{
      console.log(movie)
     setMovieinfo(movie);
  })
  .catch((err)=>{
    console.log(err);
  })
   }




  return (
    <div className="App">
      <div className="container">

        <div className="pad">
          <h1> Movie Search</h1>
<div className="input-group">
  <input type="text" placeholder="Enter movie name" onChange={(e)=>{readTitle(e.target.value)}} className="search-filed"/>
 <button className="btn" onClick={getMovieData}> Get  Movie</button>
</div>
<div className="movie">
<div className="poster"> 
<img src={movieinfo?.Poster} className="img-poster"/>
  </div>
<div className="details"> 
<div className="pad">
  <h1> {movieinfo?.Title}</h1>
  <p><strong> Genre</strong> {movieinfo?.Genre}</p>
  <p><strong> Plot</strong> {movieinfo?.Plot}</p>
  <p><strong> Actors</strong> {movieinfo?.Actors}</p>
  <p><strong> Director</strong> {movieinfo?.Director}</p>
  <p><strong> BoxOffice</strong> {movieinfo?.BoxOffice}</p>
  <p><strong> Languages</strong> {movieinfo?.Languages}</p>
  <p><strong> Released</strong> {movieinfo?.Released}</p>
  <p><strong> Runtime</strong> {movieinfo?.Runtime}</p>
  <div className="rating"> 
    <div> <strong> {movieinfo?.Ratings[0].Source}</strong>
    <h3 className="padd">
    {movieinfo?.Ratings[0].Value}
    </h3>
    </div>
    <div> 
      <strong> {movieinfo?.Ratings[1].Source}</strong>
    <h3 className="padd">
    {movieinfo?.Ratings[1].Value}
    </h3>
  </div>
  


</div>
</div>
</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
