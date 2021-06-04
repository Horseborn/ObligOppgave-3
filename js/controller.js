function showBannerImgs(){
    setTimeout(nxtPic, 5000)
}
View();
function nxtPic(){
    if (next == 2){
        next = -1
    }
    next++
     View();
}
