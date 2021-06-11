// function showBannerImgs(){
//     setTimeout(nxtPic, 5000)
// }
// View();
// function nxtPic(){
//     if (next == 2){
//         next = -1
//     }
//     next++
//      View();
// }
function addMovie(){
  let movieObj = {
      name: model.input.movieInput,
      genres: model.input.genre,
  }  
  model.movieView.movies.push(movieObj)
  if (model.input.genre == ''){
    
  }
  View();
}


function deleteMovie(i){
  model.movieView.movies.splice(i, 1);
  showmovieListView();

}
