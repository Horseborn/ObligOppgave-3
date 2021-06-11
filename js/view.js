
View();
function View(){
    html = `
    
        <h1 class="frontTitle">Personal Movie Watchlist</h1>
        <div class="movieBorderBox">
        <div id="movieInput">
        <label for="movieInput">Film Tittel: </label>
        <input type="text" id="movieTitleInput" oninput="model.input.movieInput = this.value" name="movieInput"><br><br>
        <br><br>
        <label for="genres">Velg sjanger</label>
        <select onchange="model.input.genre = this.value" name="genres" id="genres">`;
        for (let i = 0; i < model.movieView.genres.length; i++){
            html += `<option >${model.movieView.genres[i]}</option>`;
        }
        html += `</select>
        <br>
        <button id="submitMovie" onclick="addMovie()">Legg til i liste</button>

      </div>      
      <button id="nxtBtn" onclick="showmovieListView()"><span>next page</span></button>

        <img id="moviePic1" src="/img/moviePic.png"
        </div>
        

        


    `;

    document.getElementById("infoDiv").innerHTML = html;

    // showBannerImgs();
}


{/* <section id="showcase" style="background-image:url('${bannerCarousel[next]}')">
            <div></div>
            
        </section> */}



        // <input id="submitMovie" type="submit" value="Legg til i liste"></input>