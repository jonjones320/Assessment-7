### Conceptual Exercise

Answer the questions below:

- What is a JWT?
	- A JSON Web Token. It is a unique, encoded(not encrypted) object that is given from a server to a user computer. Then the JWT is needed to complete any requests requiring authentication.  
<br>
- What is the signature portion of the JWT?  What does it do?
	- The signature portion is a unique string that is hidden on the server and used to verify that the JWT is from the same server and also that the JWT has not been modified. 
<br><br>
- If a JWT is intercepted, can the attacker see what's inside the payload?
	- Yes, a JWT is encoded but not encrypted. It can easily be translated.
<br><br>
- How can you implement authentication with a JWT?  Describe how it works at a high level.
	- Any time a user becomes a remembered entity on a server, that user should be given a JWT. Then, when that user wants to access special areas on the server, the server authenticates the JWT and allows the user into that area.
<br><br>
- Compare and contrast unit, integration and end-to-end tests.
	- Unit tests focus on one element of a program. It tests that a single function performs its task.
	- Integration tests, on the other hand, test a process of functions. It tests if multiple units work together.
	- End-to-end testing looks at the entire process and evaluates if the end result is a success. It also looks for anything that may be going wrong through the whole process.
<br><br>
- What is a mock? What are some things you would mock?
	- A mock is a simulation of a process that is external to a function, but necessary for the success of that function. An example, would be `Math.random()`.
<br><br>
- What is continuous integration?
	- Continuous integration is the practice of building tests for your code constantly, instead of at the end of development.
<br><br>
- What is an environment variable and what are they used for?
	- An environment variable is a setting or condition that is applied to an entire program or app. They are used to have consistent settings and variables across the board.
<br><br>
- What is TDD? What are some benefits and drawbacks?
	- Test Driven Development is the practice of writing tests before the code. This creates more well organized and bug-free code because it is written in smaller increments with the purpose of the unit already established clearly.
	- The drawbacks is that it is slower and it focuses on unit tests which may take away from integration testing. 
<br><br>
- What is the value of using JSONSchema for validation?
	- In addition to its intuitive design and verbiage, JSONSchema also standardizes the elements of an application by allowing similar schemas to be adapted and applied for multiple elements.
<br><br>
- What are some ways to decide which code to test?
	- One way is to run the program and see what goes wrong. Then test that area. Otherwise, any code that has multiple functions or is pulling from different sources such as API's or helper functions are good things to test. More complicated code is more likely to need testing.
<br><br>
- What does `RETURNING` do in SQL? When would you use it?
	- It tells SQL what information to give back after it completes its operations. It can be used when updating a database; SQL `RETURNING` will return the updated data which allows you to see if it successfully updated.
<br><br>
- What are some differences between Web Sockets and HTTP?
	- The biggest difference is that HTTP operates using a request-response cycle; the client sends a request and the server replies with a response.
	- Websockets establish a connection and then leave that connection open, sending data back and forth constantly and even simultaneously. 
<br><br>
- Did you prefer using Flask over Express? Why or why not?
	- No, I prefer Express. It is less intuitive, but I like the way that it is organized with its files. I also like Jest more than Jasmine. I do like the way that Flask handles the current user, but JSONSchema validation is very customizable and pleasant to use.
