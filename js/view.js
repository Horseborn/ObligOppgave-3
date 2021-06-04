View();
function View(){
    html = `
    <section id="showcase" style="background-image:url('${bannerCarousel[next]}')">
            <div></div>
            
        </section>
        <h1 class="frontTitle">Personal Movie Watchlist</h1>
        <div class="movieBorderBox">
        <form id="movieInput">
        <label for="movieInput">Film Tittel: </label>
        <input type="text" id="movieTitleInput" name="movieInput"><br><br>
        <br><br>
        <label for="genres">Velg sjanger</label>
        <select name="genres" id="genres">`;
        for (let i = 0; i < model.movieView.genres.length; i++){
            html += `<option>${model.movieView.genres[i]}</option>`;
        }
        html += `</select>
        
        <input id="submitMovie" type="submit" value="Legg til i liste">
        <button onclick="location.href ='movieList.html'">Next page!</button>

      </form>      
        </div>
        <button id="nxtPage" onclick="location.href='movieList.html'"heo</button>
        
        <div id="footer">
        <p> Movie List 2021</p>
        </div>


    `;

    document.getElementById("infoDiv").innerHTML = html;

    showBannerImgs();
}