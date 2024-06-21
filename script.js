console.log("hello welcome to the 3d printing world");
const BackgoundContainer = document.querySelector(".heading");
const bgImgurl = ["imgs/bg5.jpg",
    "./imgs/bg2.jpg",
    "./imgs/bg1.webp",
    "imgs/bg4.jpg"];
//  const bgtxt = [""]
const imginterval = 3000;
let currentImgIndex = 0;
function changebgImg() {
    const nextimgindex = (currentImgIndex + 1) % bgImgurl.length;
    BackgoundContainer.style.backgroundImage = `url(${bgImgurl[nextimgindex]})`;
    console.log(nextimgindex);
    currentImgIndex = nextimgindex;

}
setInterval(changebgImg, imginterval);

// for slide tha automatically 
// my write code my own logic here

const nextbtn = document.getElementById("nextBtn");
const prevbtn = document.getElementById("prevBtn");
const slides = document.querySelectorAll(".part");
const slideContainer = document.querySelector(".part_cart");
const slidmove = 3;
const slidewidth = slides[0].offsetWidth;
let index = 0;

nextbtn.addEventListener("click", () => {
    if (index < slides.length - slidmove) {
        index++;
    }
    else {
        index = 0;
    }
    updateslide();
})

prevbtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
    }
    else {
        // index=slides.length-1;
    }
    updateslide();
})

// auto slide 
setInterval(() => {
    if (index < slides.length - slidmove) {
        index++;
    }
    else {
        index = 0;
    }
    updateslide();
}, 3000);


function updateslide() {
    const traslatexvalue = `translateX(-${index * slidewidth}px)`;
    slides.forEach(slide => {
        slide.style.transform = traslatexvalue;
    })
}

// side bar open close toggle button

const openbtn = document.getElementById("open");
const closebtn = document.getElementById("close");
const rightside = document.querySelector(".rightside");
const body = document.body;


openbtn.addEventListener("click", () => {
  closebtn.style.display = "block";
  openbtn.style.display = "none";
  rightside.style.display="block";
  body.classList.toggle('no-scroll');//scrolling 
});

closebtn.addEventListener("click", () => {
  closebtn.style.display = "none";
  openbtn.style.display = "block";
  rightside.style.display="none";
  body.classList.remove('no-scroll');
});


document.addEventListener('click', (event) => {
    if (!rightside.contains(event.target) && !openRightSideButton.contains(event.target)) {
        rightside.classList.remove('open');
        body.classList.remove('no-scroll');
    }
});



// login page data re rendering

function displayNames() {
    const nameList = document.getElementById('nameList');
    const names = JSON.parse(localStorage.getItem('names')) || [];
    if (names.length === 0) {
        window.location.href = 'login.html'; // Redirect to login page if no names are stored
        return;
    }
    nameList.innerHTML = '';
    names.forEach((name) => {
        const li = document.createElement('li');
        li.textContent = `${name}`;
        nameList.appendChild(li);
    });
}

window.onload = displayNames;



const regibtn=document.getElementById("regibtn");
regibtn.addEventListener("click",()=>{ 
    localStorage.clear();
            alert("All data has been cleared from localStorage.");
})

const section_link = document.querySelectorAll(".section-link");
section_link.forEach((link)=>{
    link.addEventListener("click",()=>{
        rightside.style.display = "none";
        body.classList.toggle('no-scroll');
        closebtn.style.display = "none";
        openbtn.style.display = "block";
    })
})