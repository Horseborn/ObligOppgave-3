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
  
 
   if(model.input.movieInput == ''){
    model.errorMsg = 'You need to insert a title';
  }
  if(model.input.genre == ''){
    model.errorMsg = 'You need to insert a genre';
  }

 if(model.input.movieInput != '' && model.input.genre != '' ){
  let movieObj = {
    name: model.input.movieInput,
    genres: model.input.genre,
}  
  model.movieView.movies.push(movieObj)
  model.input.movieInput = '';
  model.input.genre = '';
  model.errorMsg = '';
 }
  View();
}


function deleteMovie(i){
  model.movieView.movies.splice(i, 1);
  showmovieListView();

}
