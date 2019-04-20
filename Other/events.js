// Events

// Events need 3 things:
/*
1. The element or elements you want to change (sometimes called nodes.)
2. The event you want to cause the change. 
3. The code to run when the event happens.
 */

// Binding Events
/*
 There are 3 ways to bind events: 
 1. HTML Event Handlers
 This is not a good way but you can do it like this in HTML. 
 <a onclick="hide()"></a>
  
 2. Traditional DOM Event Handlers
 element.onevent=function;
 This is simple to understand and easy to work with. 

 3. Event Listeners
 element.addEventListener("event", functionName [, Boolean]);
 This is a bit more complicated but it gives you more control.
  */

// Event Flow
/*
  There are 2 types of event flow:
  1. Event Bubbling: Flows outwards
  Starts with the smallest elements and works its way up.

  2. Event Capturing: Flows inwards
    Starts with the largest elements and works its way down.

  */

// Common Errors

/*
Do not call the function! 
button.onclick = myFunction; // This is grand!
button.onclick = myFunction(); // This is NOT grand!
 */
