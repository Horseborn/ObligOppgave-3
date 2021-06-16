function addMovie(){
    let movieObj = {
        name: model.input.movieInput,
        genres: model.input.genre,
    }  
     if(model.input.movieInput == ''){
      alert('You need to insert a title')
    }
    else if(model.input.genre == ''){
      alert('You need to insert a genre')
    }
  
    else{
    model.movieView.movies.push(movieObj)
    }
    View();
  }
  
  
  function deleteMovie(i){
    model.movieView.movies.splice(i, 1);
    showmovieListView();
  
  }
  



 
  const model = {

    
    
    


    input:{
        
            movieInput: '',
            genre:'',
    },
    movieView: {
        movies: [
           
          



        ],
        genres: ['', 'Action', 'Comedy', 'Horror', 'Rom-Com', 'Documentary', 'Thriller', 'Sci-fi', 'Fantasy'],
    }

    
    
}