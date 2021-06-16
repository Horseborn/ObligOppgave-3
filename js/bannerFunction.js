bannerView();
function bannerView(){
    document.getElementById("bannerDiv").innerHTML = `
    
    <div class="border_1">
        <div class="border_2">
        <section id="showcase" style="background-image:url('${bannerCarousel[next]}')">
                <div></div>
        
            </section>
            </div>
    </div>
    
    `;
    showBannerImgs();
}






function showBannerImgs(){
    setTimeout(nxtPic, 4000)
} 

function nxtPic(){
    if (next == 10){
        next = -1
    }
    next++
    bannerView();
     
}