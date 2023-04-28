var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Developer", "Programmer", "Engineer", "IT Specialist", "Competition Shooter", "Mechanic"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Developer", "Programmer", "Engineer", "IT Specialist", "Competition Shooter", "Mechanic"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});

//Drop Down CSS V2
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});
//END

//search bar
var searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      var searchQuery = searchBar.value;
      console.log(searchQuery);
      // Add code here to do something with the search query, such as search a database or update the page
      scrollToSection();
    }
  });

function scrollToSection() {
    var query = document.getElementById("searchBar").value.toLowerCase();

    location.href = "#" + query;

    if(query == "secret page"){
        location.href = "settings.html";
    }
  }

//search bar end

    var varEDU = document.getElementById('education');
    var varEXP = document.getElementById('experience');
    var varPROJ = document.getElementById('project');
    var varSKIL = document.getElementById('skill');
    var varSOCI = document.getElementById('media');
    varEDU.style.display = "block";
    varEXP.style.display = "none";
    varPROJ.style.display = "none";
    varSKIL.style.display = "none";
    varSOCI.style.display = "none";

    var span1 = document.getElementById('edu'); // Assumes element with id='edu'
    var span2 = document.getElementById('exp'); // Assumes element with id='exp'
    var span3 = document.getElementById('proj'); // Assumes element with id='proj'
    var span4 = document.getElementById('skil'); // Assumes element with id='skil'
    var span5 = document.getElementById('soci'); // Assumes element with id='soci'

    span1.onclick = function() {
        var div = document.getElementById('education');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEXP.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";

        }
        else {
            div.style.display = "none";
            varEXP.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
    };
    span2.onclick = function() {
        var div = document.getElementById('experience');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
        else {
            div.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
    };
    span3.onclick = function() {
        var div = document.getElementById('project');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
        else {
            div.style.display = "none";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varSKIL.style.display = "none";
            varSOCI.style.display = "none";
        }
    };
    span4.onclick = function() {
        var div = document.getElementById('skill');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSOCI.style.display = "none";
        }
        else {
            div.style.display = "none";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSOCI.style.display = "none";
        }
    };
    span5.onclick = function() {
        var div = document.getElementById('media');
        if (div.style.display === "none") {
            div.style.display = "block";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
        }
        else {
            div.style.display = "none";
            varEXP.style.display = "none";
            varEDU.style.display = "none";
            varPROJ.style.display = "none";
            varSKIL.style.display = "none";
        }
    };

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})