var arr = [
    {
        songName: "Ram Siya Raam",
        url: "./music/_Ram Siya Ram_320(PagalWorld.com.cm).mp3",
        img: "Images/ram siya raam.webp",
        time: "3.36",
    },
    {
        songName: "moonshine",
        url: "music/Moonshine G Sidhu-(PagalSongs.Com.IN).mp3",
        img: "Images/Shiddu.webp",
        time: "4:50",
    },
    {
        songName: "Shiva",
        url: "music/Shiv Tandav Stotram - Sachet Tandon.mp3",
        img: "Images/shiva.webp",
        time: "4:55",
    },
    {
        songName: "Shoneya",
        url: "music/Sohneya Ve Sangram Hanjra-(PagalSongs.Com.IN).mp3",
        img: "Images/Shoneya.webp",
        time: "4.46",
    },
];
var allSongs = document.querySelector("#all-songs");
var poster=document.querySelector("#left");
var play=document.querySelector("#play");
var backward=document.querySelector("#backward");
var forward=document.querySelector("#forward");


var audio = new Audio();
var selectedSong = 0;

function ShowData() {
    var clutter = "";
    arr.forEach(function (elem, idx) {
        clutter += `<div class="song-card" id=${idx}>
    <div id="part1">
    <img src="${elem.img}" alt="">
    <h2>${elem.songName}</h2>
    </div>
    <h6>${elem.time}</h6>
</div>`;
        audio.src=arr[selectedSong].url;
        allSongs.innerHTML = clutter;
        poster.style.backgroundImage=`url(${arr[selectedSong].img})`
        
    });
}
ShowData();
allSongs.addEventListener("click", function (obj) {
    selectedSong = obj.target.id;
    play.innerHTML=`<i class='bx bx-pause'></i>`;
    flag=1;
    ShowData();
     audio.play();
 });


 var flag=0;
 play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class='bx bx-pause'></i>`;
        ShowData();
        audio.play()
        flag=1;
    }else{
        play.innerHTML=`<i class='bx bx-play'></i>`;
        ShowData();
        audio.pause();
        flag=0;
    }
  

 });

 forward.addEventListener("click",function(){
    if(selectedSong<arr.length-1){
        selectedSong++;
        ShowData();
        audio.play()
    }else{
        forward.style.opacity=0.43;
    }

 })
 backward.addEventListener("click",function(){
    if(selectedSong>=0){
        selectedSong--;
        ShowData();
        audio.play()
    }else{
        backward.style.opacity=0.43;
    }

 })


