function showmovieListView(){
    html = `
    <div id="borderDiv">

    <h1 id="titlePage2">Personal Movie List</h1>
        <div id="page2List">
        
                <ul id="unseenMovies">
                <li><label>Eat bread 2915 Edition</label><button class="delete"><b>X</b></button></li>
                <li><label>Eat bread 2915 Edition</label><button class="delete"><b>X</b></button></li>
                <li><label>Eat bread 2915 Edition</label><button class="delete"><b>X</b></button></li>
                <li><label>Eat bread 2915 Edition</label><button class="delete"><b>X</b></button></li>
                <li><label>Eat bread 2915 Edition</label><button class="delete"><b>X</b></button></li>
                <li><label>Eat bread 2915 Edition</label><button class="delete"><b>X</b></button></li>
   
            
            </ul>
        
        </div>
        <div id="btnContainer"><button id="backBtn" onclick="View()">☚ Back to frontpage</button></div>

    </div>

    `;
    document.getElementById("infoDiv").innerHTML = html;
}