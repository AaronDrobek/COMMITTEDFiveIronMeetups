
let login = `
  <div class="login">



      <header class="signUpHeader">
        <h1>Iron Meetups</h1>
        
      </header>
      <div class="loginContainer">
        <input type="text" id="username" value="Username">
        <input type="text" id="password" value="Password">
        <button type="button" id="login" >Login</button>
        <button type="button" id="goToSignUp">Sign up!</button>

      </div>
      <div class = "pleaseLogin">
      <h4>Please Login!</h4>
      </div
  </div>`;

let signUp = `
  <div class= "signup">
  <header class="signUpHeader">
    <h1>Iron Meetups</h1>
    <h4>Please Sign Up!</h4>
  </header>
  <div class="signupContainer">
    <input type="text" id="username" value="Username">
    <input type="text" id="password" value="Password">
    <input type="text" id="confirm" value="Confirm Password">
    <button type="button" id="signUp">Sign Up</button>
    <button type="button" id="goToLogin">Already Have an Account? Click Here!</button>

  </div>

  </div>
`;

let eventList = `

  <div class="eventList">
    <header class="eventListHeader">
        <h2>Iron Meetups</h2>
            <nav class="navTags">
              <a class="link" href="eventlist.html">Events</a>
              <a class="link" href="signup.html">Log Out</a>
            </nav>
    </header>

    <div class="eventListContainer">
      <div class="eventListItems">
          <p id="eventListName">Event Name</p>
            <div class="eventDetails">
              <p id="eventListLocation">Location</p>
              <p id="eventListDateTime">Date and Time</p>
            </div>
      </div>

        <div id="confirmOrView">
          <button id="rsvp" type="button" name="button">Click to RSVP</button>
          <button id="view"type="button" name="button">View Event Info</button>
        </div>

    </div>



  </div>
`;

let eventView = `

  <div class="eventView">
        <header class="eventViewHeader">
            <h2>Iron Meetups</h2>
                <nav class="navTags">
                  <a class="link" href="eventlist.html">Events</a>
                  <a class="link" href="signup.html">Log Out</a>
                </nav>
        </header>

        <div class="eventViewContainer">
          <div class="eventDescription">
                <h1>Event Name</h1>
                <h2>When?</h2>
                <p id="eventDateTime"> "date" at "time"</p>
                <h2>Where?</h2>
                <p id="eventLocation">"location"</p>
                <h2>What is this all about?</h2>
                <p id="eventDescription">"event description"</p>
          </div>

          <div class="attendeesList">
                <h2>Attendees</h2>
                <p id="attendees"></p>
         <!-- //will be in for loop to generate registered users. Wasn't sure if p tag was most appropriate. -->
          </div>
  </div>
`;
 function signup() {
   let goToSignUp = document.querySelector("#goToSignUp");

   goToSignUp.addEventListener('click', function(){
     console.log("signupActivated");
     container.innerHTML= signUp;
   });
 }
let container = document.querySelector(".container");
container.innerHTML= login;
console.log("working");


let goToLogin = document.querySelector("#goToLogin");
goToLogin.addEventListener('click', function(){

});

