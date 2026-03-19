    Simple Product Gallery
A product page built with HTML5, CSS3, and JavaScript. 
This project demonstrates how to dynamically render content from an 
array of objects using the JavaScript .forEach() method.

    Features
1.Dynamic Rendering: Products are injected into the DOM via JavaScript.

2.Responsive Grid: A CSS Grid layout that adapts to any screen size.

3.Interactive Buttons: Each product includes a "Buy Now" button with 
personalized feedback.

4.Clean Design: Modern UI with a focus on typography and whitespace.

    How to Use
1.Clone the repository or download the index.html file.

2.Open index.html in any modern web browser.

3.To add more products, simply add a new object to the products array in the <script> section.

    Lessons Learnt
1. The Power of "Don't Repeat Yourself" (DRY)
Instead of manually writing six different <div> blocks in HTML, I wrote one
block of logic in JavaScript. This makes the code much easier to maintain;
if I want to change the layout of every product card, I only have to
edit one line of code inside the loop rather than six separate sections.

2. Separation of Concerns
Even when working in a single file, organizing code into clear
sections—Structure (HTML), Presentation (CSS), and Logic (JavaScript)—makes
debugging much faster.

3. DOM Injection is a Workflow
Learning to create elements (document.createElement) and append them
(appendChild) is a fundamental skill. It shifts ones perspective from
seeing a website as a static document to seeing it as a dynamic "Tree"
(the DOM) that can grow and change in real-time based on the data I give
the computer.
