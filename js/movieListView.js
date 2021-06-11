function showmovieListView(){

   html = '';

    html += `
    <h1 id="titlePage2">Personal Movie List</h1>`;

    for(let i = 0; i< model.movieView.movies.length; i++){
        html +=  `
        
        <div id="borderDiv">
                
            <div id="page2List">
                <ul id="unseenMovies">
                    <li><b>Tittel</b>: ${model.movieView.movies[i].name}<br><b>Sjanger: </b>  ${model.movieView.movies[i].genres}<button class="delete" onclick="deleteMovie(${i})"><b>X</b></button></li>

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