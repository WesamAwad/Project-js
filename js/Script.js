//Check local storage
console.log(window.localStorage.getItem("colors"));
if ("colors" !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("colors")
  );

  //Remove Active Class
  document.querySelectorAll(".Setting-box ul li").forEach((ele) => {
    ele.classList.remove("active");

    //Add Active Class
    if (ele.dataset.color === localStorage.getItem("colors")) {
      ele.classList.add("active");
    }
  });
}

//toggle spin Class on Icon
document.querySelector(".setting-gear .icon").onclick = function () {
  //Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  //Toggle Class Open On Main Setting box
  document.querySelector(".Setting-box").classList.toggle("open");
};

/////////////////////////////////////////////////////////////////////////
//Switch Color
let li = document.querySelectorAll(".Setting-box ul li");

//Loop on All List Items
li.forEach((ele) => {
  //Click on Every List items
  ele.addEventListener("click", (e) => {
    //Set Color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    window.localStorage.setItem("colors", e.target.dataset.color);
  });
});

let active = document.querySelectorAll(".Setting-box ul li");
active.forEach((ele) => {
  ele.onclick = function () {
    active.forEach((ele) => {
      ele.classList.remove("active");
    });

    ele.classList.add("active");
  };
});

///////////////////////////////////////////////////////////////////////
//Select Landing page Element
let Landingpage = document.querySelector(".Landing-page");

//Get Array Of Imgs
let array_images = [
  "backgroun-1.webp",
  "backgroun-2.jpg",
  "backgroun-3.jpg",
  "backgroun-4.jpg",
  "backgroun-5.webp",
];

//roundom background option
let roundom_background = true;
//variable to control the interval
let interval;

//Function to rondomize imgs
function stop_background() {
  if (roundom_background === true) {
    interval = setInterval(() => {
      //Get Roundom Number
      let roundom_number = Math.floor(Math.random() * array_images.length);

      //Change Background image Url
      Landingpage.style.backgroundImage =
        `url("img/` + array_images[roundom_number] + `")`;
    }, 1000);
  }
}
stop_background();

//Check Local Storage
// let backgroun_Local_item = localStorage.getItem("background-option");
// //Check background local storagr is not null
// if (backgroun_Local_item !== null) {
//   if (backgroun_Local_item === "true") {
//     roundom_background = true;
//   } else {
//     roundom_background = false;
//   }
//   document.querySelectorAll(".Setting-box .box span").forEach((ele) => {
//     ele.classList.remove("active");
//   });
//   if (backgroun_Local_item === "true") {
//     document.querySelector(".Setting-box .yes").classList.add("active");
//   } else {
//     document.querySelector(".Setting-box .no").classList.add("active");
//   }
// }

//////////////////////////////////////////////////////////////////////////
let element = document.querySelectorAll(".Setting-box .box .first span");

//Loop on All List Items
element.forEach((span) => {
  //Click on Every List items
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      roundom_background = true;
      stop_background();
      // localStorage.setItem("background-option", true);
    } else {
      roundom_background = false;
      clearInterval(interval);
      // localStorage.setItem("background-option", false);
    }
  });
});

//Another solution
// let a = document.querySelectorAll(".Setting-box .box span");

// a.forEach((span) => {
//   span.onclick = function () {
//     a.forEach((ee) => {
//       ee.classList.remove("active");
//     });
//     span.classList.add("active");
//   };
// });

//////////////////////////////////////////////////////////////////////////////
//Select Skill selector
let Our_Skills = document.querySelector(".Our-Skills");

window.onscroll = function () {
  // المسافة من اعلى الصفحة حتى العنصرث بالبكسل
  let a = Our_Skills.offsetTop;

  // بجيبلي حجم العنصر بالبكسل
  let b = Our_Skills.offsetHeight;

  // حجم الويندو او ارتفاع الشاشة بالبكسل
  let c = window.innerHeight;

  // وانا عامل سكرول
  let d = window.scrollY; //pageYOffset

  if (d > a + b - c) {
    document.querySelectorAll(".Our-Skills .progress-bar").forEach((Skill) => {
      Skill.style.width = Skill.dataset.progress;
    });
  }
};

/////////

// Creat Popup With The Image

let imgs = document.querySelectorAll(".Gallery .img-Gallery");

imgs.forEach((element) =>{

  element.addEventListener("click",(e)=>{

    // Creat overlay Element
    let overlay=document.createElement("div");

    //Add Class To Overlay
    overlay.className="overlay-Popup";

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    //Creat The Popub image
    let Popup_img=document.createElement("div");

    // Add Class To The Popup image
    Popup_img.className="popub-box";


        if(element.alt !== null){

      // Create Heading
      let heading = document.createElement("h3");

      heading.className='head';
      //Creat text for Heading 
      let text = document.createTextNode(element.alt);

      // Append The Text To The Heading
      heading.appendChild(text);

      // Append The Heading To The Popup
      Popup_img.appendChild(heading)
    }


    // Creat The Image
    let images=document.createElement("img");

    //Set Image Source
    images.src=element.src;

    // Add Image To Popub Box
    Popup_img.appendChild(images);

    // Append The Popup Box To Body
    document.body.appendChild(Popup_img);


    let span=document.createElement("span");

    span.classList='span-1'

    let text_span = document.createTextNode("x");

    span.appendChild(text_span)

    Popup_img.appendChild(span)

  })

})

// الضغط على علامة ال x لاغلاق ال popup
document.addEventListener("click", function(e) {

  if(e.target.className=="span-1"){

    // Remove The Current Popup
    e.target.parentNode.remove()
    // document.querySelector(".popub-box").remove()طريقة تانية لحذف ال popub-box

    // Remove Overlay
    document.querySelector(".overlay-Popup").remove()
  }
})

///
// الوصول الى العناصر بشكل ديناميكي عن طريق السكرول
let allbullet = document.querySelectorAll(".circle");

// allbullet.forEach(bull =>{
//   bull.addEventListener("click",(e)=>{

//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });

let links = document.querySelectorAll(".nav-item a");
// الوصول الى العناصر بشكل ديناميكي عن طريق السكرول بواسطة الفنطشن التالية
function scroll(elements) {

  elements.forEach(ele =>{

    ele.addEventListener("click",(e)=>{

  e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({

        behavior: "smooth"

      });

    });
    
  });
}

scroll(links);
scroll(allbullet);

  //  هده الفنكشن توفر علينا تكرار الكود وتعمل على حذف كلاسات ال اكتف ووضعه علة العنصر الي ضغطت عليه
function handleActive(ev) {
//   span.addEventListener("click", (e) => {
//     e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
//       ele.classList.remove("active");
//     });
//     e.target.classList.add("active");
// })
}

///

let setspan = document.querySelectorAll(".Setting-box .second span")

let bullets = document.querySelector(".bullets")

setspan.forEach(span=>{
  span.addEventListener("click",(e)=>{
    if(span.dataset.display=="yes"){ //e.target.dataset.display طريقة اخرى لكتابتها
     bullets.style.display="block"
    }
    else{
      bullets.style.display="none"
    }
    
      
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");

  })
})

//// Reset Button
document.querySelector(".reset-option").onclick = function(){

  // localStorage.clear() // بحذف كل حاجة بال local storage
  localStorage.removeItem("colors") // بحذف الي انا حددته

  // لتحديث الصفحة
  window.location.reload()
}

/////
// Toggle.Menue
let button=document.querySelector(".toggle-button");
let ul=document.querySelector(".mb-0.d-flex.list-unstyled");

button.onclick=function(e){

  // Stop Propagation
  e.stopPropagation()
  // Toggle Class "Menu-Active" On Button
  this.classList.toggle("Menue-Active");

  // Toggle Class "open" On Links
  ul.classList.toggle("open");
}


// Click Anywhere Outside menue And Toggle Button
document.addEventListener("click",(e)=>{

  if(e.target !== button && e.target !== ul){
    
    //Check if Menue Is Open
    if(ul.classList.contains("open")){
       // Toggle Class "Menu-Active" On Button
      button.classList.toggle("Menue-Active");

      // Toggle Class "open" On Links
      ul.classList.toggle("open");

    }
  }
})

ul.onclick = function (e) {
  e.stopPropagation();
}


/////

let nav_span = document.querySelectorAll(".Setting-box .third span");

nav_span.forEach((ele) =>{

ele.addEventListener("click", (e)=>{

  if(e.target.dataset.nav == "yes"){

    console.log("yes and scrolling");
    document.querySelector(".navbar").classList.add("fixed-top")

  }if(e.target.dataset.nav == "no"){
    console.log("no and scrolling");
    document.querySelector(".navbar").classList.remove("fixed-top")
  }

  e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
  e.target.classList.add("active");
  
});
});