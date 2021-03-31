console.log("hello Project")
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const data=JSON.parse(this.responseText)  
          console.log(data)
        document.getElementById("mera").innerHTML =
        data.data[4].avatar;
      }
    };
    xhttp.open("GET", "https://reqres.in/api/users?page=2", true);
    xhttp.send();
  }
  
loadDoc()