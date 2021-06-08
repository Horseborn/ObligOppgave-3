function showmovieListView(){
    html = `
    <div id="borderDiv">

    <h1 id="titlePage2">Personal Movie List</h1>
        <div id="page2List">
        
                <ul id="unseenMovies">
                <li><label>wersdf</label><button class="delete"><b>X</b></button></li>
                <li><label>Movie3</label><button class="delete"><b>X</b></button></li>
                <li><label>Movi3e4</label><button class="delete"><b>X</b></button></li>
                <li><label>Movie342</label><button class="delete"><b>X</b></button></li>
                <li><label>Movie5123</label><button class="delete"><b>X</b></button></li>
                <li><label>Muror</label><button class="delete"><b>X</b></button></li>
   
            
            </ul>
        
        </div>
        <div id="btnContainer"><button id="backBtn" onclick="View()">☚ Back to frontpage</button></div>

    </div>

    `;
    document.getElementById("infoDiv").innerHTML = html;
}