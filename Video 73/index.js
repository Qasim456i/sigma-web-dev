function createCard(title,cNamw,views,monthsold,duration,thumnail){
  let viewStr;
    if(views<1000000){
         viewStr=views/1000 +"k";
    }
     else if(views >1000000){
           viewStr=views/1000000 +"M";
    }
    else{
      viewStr=views/1000+"k";
    }
  let html=`
        <div class="card">
            <div class="image"> 
            <img src="${thumnail}" alt="">
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cNamw}. ${viewStr} views .${monthsold} months ago</p>
            </div>
        </div>`;
    document.querySelector(".container").innerHTML += html;
    document.querySelector(".container").innerHTML += html;
    document.querySelector(".container").innerHTML += html;
    document.querySelector(".container").innerHTML += html;
    document.querySelector(".container").innerHTML += html;
    document.querySelector(".container").innerHTML += html;
}
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
