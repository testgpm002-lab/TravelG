
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const data1 =JSON.parse(this.responseText)  
          console.log(data1)
        //let d=document.getElementById("cityName").innerHTML = data1[0].CityName
        console.log(data1[0].Rating)
        }
    };
    // response["Access-Control-Allow-Origin"] = "*"
    // response["Access-Control-Allow-Origin"] = "GET"
    xhttp.open("GET", "http://127.0.0.1:8000/CityList/", true);
    xhttp.send();
  }
  
loadDoc()

// $(document).ready(function(){
//   // 1. pull in template
  // var cardTemplate = $("#Template").html();
  // // 2.Compile the string into a function
  // var compiledcardTemplate = Handlebars.compile(cardTemplate);
  // // 4.append to page
  // $(".class-container").html(compiledcardTemplate(data[0].CityName));
// });
var data2 = [
  "car":
    {
        "id": 1,
        "CityName": "Mumbai",
        "Location": "https://www.google.com/maps/place/Mumbai,+Maharash",
        "Rating": 4.0
    },
    {
        "id": 3,
        "CityName": "Delhi",
        "Location": "28.6600\t77.2300",
        "Rating": 3.0
    },
    {
        "id": 4,
        "CityName": "Kolkāta",
        "Location": "22.5411\t88.3378",
        "Rating": 4.0
    },
    {
        "id": 5,
        "CityName": "Chennai",
        "Location": "13.0825\t80.2750",
        "Rating": 4.0
    },
    {
        "id": 6,
        "CityName": "Lucknow",
        "Location": "26.8470\t80.9470",
        "Rating": 3.0
    },
    {
        "id": 7,
        "CityName": "Jammu",
        "Location": "32.7333\t74.8500",
        "Rating": 4.4
    },
    {
        "id": 8,
        "CityName": "Indore",
        "Location": "22.7206\t75.8472",
        "Rating": 5.0
    },
    {
        "id": 9,
        "CityName": "TESTING",
        "Location": "26.8880\t80.6666",
        "Rating": 5.0
    },
    {
        "id": 10,
        "CityName": "TESTING",
        "Location": "26.8880\t80.6666",
        "Rating": 5.0
    },
    {
        "id": 11,
        "CityName": "TESTING",
        "Location": "26.8880\t80.6666",
        "Rating": 5.0
    },
    {
        "id": 12,
        "CityName": "TESTING",
        "Location": "26.8880\t80.6666",
        "Rating": 5.0
    },
    {
        "id": 13,
        "CityName": "TESTING12_Update",
        "Location": "26.8880\t80.6666",
        "Rating": 5.0
    },
    {
        "id": 14,
        "CityName": "TESTING 9",
        "Location": "26.8880\t80.6666",
        "Rating": 5.0
    }
]


$.holdReady(true);
var remoteJSONContent = null;
$.getJSON("http://127.0.0.1:8000/CityList/", function(data) {
    remoteJSONContent = data;
    $.holdReady(false);
});

$(document).ready(function(){
    console.log(remoteJSONContent);
    var cardTemplate = $("#Template").html();
    // 2.Compile the string into a function
    var compiledcardTemplate = Handlebars.compile(cardTemplate);
    // 4.append to page
    $(".cards").html(compiledcardTemplate(data2);
});





//API Call

// var baseUrl = 'http://127.0.0.1:8000/CityList/';

// $.ajax ({
//     url: baseUrl,
//     method: 'GET',
//     success:function(data){
//         printData(data);
//         console.log(data)
//     },
//     error: function(){
//         alert('error');
//     }
// })

// //Cycling Data

// var source = $("#mcontainer").html();
// var templateMissions = Handlebars.compile(source);

// function printData(datas){
//     for (var i = 0; i < datas.length; i++) {
//         var data = datas[i];
//         var dataStamp = {
//             name : data.CityName,
//             location : data.Location,
//             rating : data.Rating
//         }
//         var templateMissions = template(dataStamp)
//         $('.append-here').append(mcontainer);
//     }
// }


// //TEMP FETCH

// fetch("http://127.0.0.1:8000/CityList/")
// .then(function(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   // Read the response as json.
//   return response.json();
// })
// .then(function(response) { 
//   // Do stuff with the JSON
//   // console.log(response);
//   createHtml(response);
// })
// .catch(function(error) {
//   console.log('Looks like there was a problem: \n', error);
// });


// // Function to generate the HTML
// function createHtml(ourData) { // ourData is just a parameter and can be named anything
//   var rawTemplate = document.querySelector("#mcontainer").innerHTML;
//   var compiledTemplate = Handlebars.compile(rawTemplate);
//   var ourGeneratedHTML = compiledTemplate(ourData);
  
//   var ourContainer = document.querySelector("#card1");
//   ourContainer.innerHTML = ourGeneratedHTML;
// }


// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4) {
//        if (this.status == 200)
//               document.getElementById("demo").innerHTML = this.responseText;
//        else
//               {
//                 if(this.status==404)
//                    document.getElementById("demo").innerHTML = "Not Found.";
//                   else
//                       if(this.status==403)
//                         document.getElementById("demo").innerHTML = "Forbidden";
//                    else
//                       document.getElementById("demo").innerHTML = "Something wrong.";
//               }     
//     }

//   };

// xhttp.open("GET", "AjaxExample.php?", true);
// xhttp.send();
