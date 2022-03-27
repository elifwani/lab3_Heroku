# THIS IS MY TECHNICAL README - MY "HOW"

Initially, to get the server running I used the server.py file our professor provided for us to use and had setup the "This website has been visited {{ count }} times". However, I was up to the challenge and remembered that I had used node once before. 

The ```server.js``` file contains all the server side of things. It lays out the rules for communication, looks out for new connections, and for the way they commnicate.

The ```package.json``` contains all the metadata for node to work.

I then created a basic ```index.html``` file to put the ```sketch.js``` in there. I applied the skills learned from earlier in the course to utilize the p5 library. Whenever there is a new connection, that would be shown on other connection's end by differentiating the colour. So, the user's circle is white but the other user that draw in real time are shown as blue circles, providing a way for users to communicate.