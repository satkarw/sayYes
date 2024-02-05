let yes = document.querySelector(".yes");

let no = document.querySelector(".no");

let count = 45;
let count2 = 20;
let count3 = 20;
let clickCount = 0;
yes.style.height = `${count}px`;
yes.style.width = `${count + 25}px`;
yes.style.fontSize = `${count2}px`;
no.style.fontSize = `${count2}px`;

let i = 0;
let myList = [
  "are you sure?",
  "really sure?",
  "100% ?",
  "sureeeeeeeee?",
  "i dont think so",
  "think again.",
];

no.addEventListener("click", clickedNo);
yes.addEventListener("click", clickedYes);


function clickedNo() {
  count += 10;
  clickCount++;
  if (clickCount < 5) {
    count3 -= 3;
    yes.style.height = `${count}px`;
    yes.style.width = `${count + 25}px`;
    yes.style.fontSize = `${count2}px`;

    no.style.fontSize = `${count3}px`;

    let noText = myList[i];
    no.innerHTML = noText;
    i++;
    if (i === myList.length) {
      i = 0;
    }
  } else {
    document.querySelector(".container").innerHTML = ` 
     <img src="angry1.gif" alt="" class="gif-angry" />

    <p class="ask">Will you be my valentine?</p>
    <div class="btn-container">
      <button class="yes1" onclick='clickedYes()'>Yes</button>
    
    </div>
`;
  }
}

function clickedYes() {
  document.querySelector(".container").innerHTML = ` 
  
    <audio autoplay loop>
        <source src="chipi.mp3" type="audio/mp3" />
      </audio>

    <img src="happy1.gif" alt="" class="gif-happy" />

    <p class="happy">Ya Huuuuuu</p>
    
  
    
`;
}
