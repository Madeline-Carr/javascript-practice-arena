//DOM stands for Document Object Model

//Accessing Elements
document.getElementById(name); //Get Element by ID
document.getElementsByClassName(name); //Get Element by Class Name
document.getElementsByTagName(name); //Get Element by Tag name

//Query Selectors
document.querySelector(".example"); //This will select the first element with the class example.
document.querySelectorAll(".example"); //This element will select all elements with the class example.

//Changing Elements
element.innerHTML = new content(); //Changes text in element
element.attribute = new value(); //Changes an attribute of an element
element.style.property = new style(); //Changes the style of an element
