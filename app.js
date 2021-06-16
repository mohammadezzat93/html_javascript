alert("Welcome to my page")

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b4c06a0a747ec7cbf5427344bddeaaa3cee5867a
var capital = prompt("What is the population of each of the following cities? (London , paris , New York , Tokyo)?")

if (capital == "London"){
  document.write("<h1>"+ "15,010,295 people"+"</h1>")
  alert("15,010,295 people")

}
else if (capital == "paris"){
  document.write("<h1>"+ "2,243,833 people"+"</h1>")
  alert("2,243,833 people")

}
else if (capital == "New York"){
  document.write("<h1>"+ "	8,398,748 people"+"</h1>")
    alert("8,398,748 people")

}
else if (capital == "Tokyo"){
  document.write("<h1>"+ "7,010,295 people"+"</h1>")
    alert("7,010,295 people")

}
else {
  alert ("Sorry, you did not choose any city")
}
<<<<<<< HEAD
=======
=======
>>>>>>> bfb1cc17b7afa081675e293563038132d2b5c9cb
>>>>>>> b4c06a0a747ec7cbf5427344bddeaaa3cee5867a

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