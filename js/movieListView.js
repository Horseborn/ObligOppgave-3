function showmovieListView(){

   html = '';

    for(let i = 0; i< model.movieView.movies.length; i++){
        html +=  `<div id="borderDiv">
                <h1 id="titlePage2">Personal Movie List</h1>
            <div id="page2List">
                <ul id="unseenMovies">
                    <li>${model.movieView.movies[i].name}<br> ${model.movieView.movies[i].genres}<button class="delete" onclick="deleteMovie()"><b>X</b></button></li>

                </ul>

            </div>
        </div>`
    } 
    // html = `
    // <div id="borderDiv">

    // <h1 id="titlePage2">Personal Movie List</h1>
    //     <div id="page2List">
        
    //             <ul id="unseenMovies">
    //             <li>Movie1<button class="delete"><b>X</b></button></li>
    //             <li>Movie2<button class="delete"><b>X</b></button></li>
    //             <li>Movie3<button class="delete"><b>X</b></button></li>
    //             <li>Movie4<button class="delete"><b>X</b></button></li>
    //             <li>Movie5<button class="delete"><b>X</b></button></li>
    //             <li>Movie6<button class="delete"><b>X</b></button></li>
   
            
    //         </ul>
        
    //     </div>
    html += `  <div id="btnContainer"><button onclick="View()">☚ Back to frontpage</button></div>`   ;

    // </div>

    // `;
    document.getElementById("infoDiv").innerHTML = html;
}
//backBtn