alert("Welcome to my page")

// ============================ if , else ==================

var capital = prompt("What is the population of each of the following cities? (London , paris , New York , Tokyo)?")

if (capital == "London"){
  //document.write("<h1>"+ "15,010,295 people"+"</h1>")
  alert("15,010,295 people")

}
else if (capital == "paris"){
  //document.write("<h1>"+ "2,243,833 people"+"</h1>")
  alert("2,243,833 people")

}
else if (capital == "New York"){
  //document.write("<h1>"+ "	8,398,748 people"+"</h1>")
    alert("8,398,748 people")

}
else if (capital == "Tokyo"){
  //document.write("<h1>"+ "7,010,295 people"+"</h1>")
    alert("7,010,295 people")

}
else {
  alert ("Sorry, you did not choose any city")
}




// ============================ While , For Looop ==================



var city = prompt("What is your favorite City from These (London , paris , Newyork)")

while (city !="London" && city !="paris" && city !="Newyork"){
  city = prompt("wrong city try again")
}
if (city == "London"){

var numofpic = prompt("how many times you like to see London ?")

for (var x= 0 ;x < numofpic ;x++){
  document.write("<div>" + "<img src ='https://www.loginbrands.com/images/Article/Article1009041.jpg'>" + "</div>")
}
}

else if (city == "paris"){

var numofpic = prompt("how many times you like to see London ?")

for (var x= 0 ;x < numofpic ;x++){
  document.write("<div>" + "<img src ='http://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2011/08/London1.jpg'>" + "</div>")
}
}

else if (city == "Newyork"){

var numofpic = prompt("how many times you like to see London ?")

for (var x= 0 ;x < numofpic ;x++){
  document.write("<div>" + "<img src ='https://ichef.bbci.co.uk/news/640/cpsprodpb/79E2/production/_95320213_2.jpg'>" + "</div>")
}
}

else {
  alert ("Sorry, you did not choose any city")
}



// ==========================================================




// =========================  Function  =====================


function rating (){
  var starnum = prompt("how many Stars do you rate London ?")

return starnum ;
}

var num = rating();
for (var i=0 ; i<num ; i++) {
  document.write( "<img src ='https://lh3.googleusercontent.com/proxy/_KaXPUD6XSHAntUcAFhj9gtYYyS3tAU2YZJyT4kU3dI5B8ItvxZElqT1uK6UkbzKcnJnrcPQQqHvNWvab42Gg947dVDFB38' width='200' height='200'>")
}

//=======================

function rating2 (num){

for (var i=0 ; i<num ; i++) {
  document.write( "<img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' width='200' height='200'>")
}
}

  var starnum = prompt("how many Heart do you rate London ?")

rating2 (starnum);




function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();