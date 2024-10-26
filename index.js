const nav = document.querySelector("#site-header")
console.log(document.querySelector("#header"))

window.onscroll = () => {
    if (window.scrollY > 300) {
         nav.style.backgroundColor = "white"
         nav.style.borderBottom = "#ceff00 solid 2px"
    } else {
        nav.style.backgroundColor = "transparent"
         nav.style.borderBottom = "none"

    }
};



let carousels = document.querySelectorAll('.carousel__face');
console.log(carousels)
carousels.forEach(carousel => {
    
  carousel.addEventListener("mouseover", () =>{
      carousel.firstChild.lastChild.style.display = "block"
  })
  carousel.addEventListener("mouseleave", () =>{
    carousel.firstChild.lastChild.style.display = "none"
})
})
 // Targeting video element  
 let clips = document.querySelectorAll(".vid") 
  
  /* Applying mouseover event on video clip  
  and then we call play() function to play  
  the video when the mouse is over the video */ 
  clips.forEach(clip => {
    clip.addEventListener("mouseover", function (e) { 
      clip.play(); 
  }) 
  clip.addEventListener("mouseout", function (e) { 
      clip.pause(); 
  }) 
})

  /* Applying mouseout event on video clip  
  and then we call pause() function to stop  
  the video when the mouse is out the video */ 
  clip.addEventListener("mouseout", function (e) { 
      clip.pause(); 
  }) 
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        
        })
        
        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top'
        })
        
        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });
        // $(".icon").click(function(){
        //   if( $("nav ul").css("display") == "none" ){
        //     $("nav ul").css("display", "block")
        //   }
        //   else{
        //      $("nav ul").css("display", "none")
        //   }
          
        // });
        $(".nav-link").on("click", function () {
            $(".nav-link").removeClass("nav-link-focus")
  
   var clickedBtnID = $(this)// or var clickedBtnID = this.id
  clickedBtnID.addClass("nav-link-focus")
  
});
// var slide = document.getElementsByClassName("slide");
//         var indicator = document.getElementById("indicator");
//         var dots = document.getElementsByClassName("dots");
//         var autoplay = document.getElementsByClassName("slide-container")[0].getAttribute("data-autoplay");
//         var l = slide.length;
//         var interval = 5000;
//         var set;

//         window.onload = function () {
//             initialize();
//             slide[0].style.opacity = "1";
//             for (var j = 0; j < l; j++) {
//                 indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
//             }

//             dots[0].style.background = "#696969";

//         }

//         function initialize() {
//             if (autoplay === "true")
//                 set = setInterval(function () { next(); }, interval);
//         }



//         function change(index) {
//             clearInterval(set);
//             count = index;
//             for (var j = 0; j < l; j++) {
//                 slide[j].style.opacity = "0";
//                 dots[j].style.background = "#bdbdbd";
//             }
//             slide[count].style.opacity = "1";
//             dots[count].style.background = "#696969";


//         }

//         var count = 0;
//         function next() {
//             clearInterval(set);
//             slide[count].style.opacity = "0";
//             count++;
//             for (var j = 0; j < l; j++) {
//                 dots[j].style.background = "#bdbdbd";
//             }


//             if (count == l) {
//                 count = 0;
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";

//             } else {
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";
//             }
//             initialize()
//         }


//         function prev() {
//             clearInterval(set);
//             slide[count].style.opacity = "0";
//             for (var j = 0; j < l; j++) {
//                 dots[j].style.background = "#bdbdbd";
//             }
//             count--;

//             if (count == -1) {
//                 count = l - 1;
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";

//             } else {
//                 slide[count].style.opacity = "1";
//                 dots[count].style.background = "#696969";
//             }
//             initialize()
//         }



