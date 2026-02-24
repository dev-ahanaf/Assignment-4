1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is used when you know the id of an element it only gives you one element because id must be unique it is very fast and direct getElementsByClassName is used when you want all elements with same class it gives HTMLCollection which is like a list but not exactly an array you can loop over it querySelector is more modern you can use any CSS selector like class id or tag it gives only the first element that matches querySelectorAll gives all elements that match any CSS selector it returns NodeList which you can loop or convert to array the main difference is that querySelector methods are more flexible because you can use complex selectors but getElementById and getElementsByClassName are faster and simpler.

2. How do you create and insert a new element into the DOM?

first you create a new element using document.createElement for example create a div then you can set text content or innerHTML or add attributes like class or id then you need to put it somewhere in the page using appendChild to add at the end of a parent element or insertBefore to put it before another element this way you can dynamically add things to your page without changing HTML file. 


3.  What is Event Bubbling? And how does it work?

event bubbling means when you click or trigger event on an element the event first happens on that element and then it moves up to its parent elements then to their parent and so on till it reaches the top of document for example if you click a button inside a div first the button gets the click event then the div then the body then html this is default in JavaScript it is useful because parent elements can also react to events of their children. 

4. What is Event Delegation in JavaScript? Why is it useful?

event delegation is a technique where instead of adding event listener to every child element you add one listener to parent and use event.target to know which child was clicked this works because of event bubbling it is useful because it saves memory you don’t need many listeners and it works for elements added later dynamically so you don’t need to add listener again

5.  What is the difference between preventDefault() and stopPropagation() methods?

preventDefault is used when you want to stop browser from doing its default action like stop a link from opening a page or stop a form from submitting stopPropagation is used when you don’t want event to go up to parent elements it stops bubbling they are different because preventDefault stops default action but event can still bubble stopPropagation stops event moving up but default action can still happen you can also use both together sometimes