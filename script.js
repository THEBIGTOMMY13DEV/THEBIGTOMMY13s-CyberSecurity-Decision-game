let ending1 = document.querySelector(".option-one-end");
let ending2 = document.querySelector(".option-two-end");
let option1screen = document.querySelector(".option-one-screen");
let option2screen = document.querySelector(".option-two-screen");
let storyopening1 = document.querySelector(".story-opening");
let startopening = document.querySelector(".startopening");
let startbutton1 = document.querySelector(".startbutton");
let option1button = document.querySelector(".option-one");
let option2button = document.querySelector(".option-two");
let gameendingscreen = document.querySelector(".gameover");
let inputusername = document.querySelector("input");
let username;
let optionOneText = document.querySelector(".option-one-text");
let controlledbutton = document.querySelector(".buttons");
let option2screenbutton1 = document.querySelector(".option-two-screen-button1");
let optiontwoscreenbutton2 = document.querySelector(".option-two-screen-button2");
let optiononescreenbutton1 = document.querySelector(".option-one-screen-button1");
let optiononescreenbutton2 = document.querySelector(".option-one-screen-button2");
let option3screen = document.querySelector(".option-three-screen");
let option3screenbutton1 = document.querySelector(".option-three-screen-button1");
let option3screenbutton2 = document.querySelector(".option-three-screen-button2");
let easyroutescreen = document.querySelector(".easy-route-screen");
let hardroutescreen = document.querySelector(".hard-route-screen");
let hardroutescreenbutton1 = document.querySelector(".hard-route-screen-button1");
let hardroutescreenbutton2 = document.querySelector(".hard-route-screen-button2");
let hardroutescreen1 = document.querySelector(".hard-route-screen1");
let hardroutescreen2 = document.querySelector(".hard-route-screen2");
startbutton1.onclick = function() {
    storyopening1.style.display = "block";
    startopening.style.display = "none";
    option1button.style.display = "block";
    option2button.style.display = "block";
    controlledbutton.style.display = "block";
    username = inputusername.value;
    optionOneText.innerHTML = "Hello " + username + ",Your Job by an anonymous government worker from the national security agency and from the department of defense is to stop the hacker or become the hacker to save or destroy the national security agency's database and by doing that the national security agency will gather analysis on how to protect or prevent another data breach.";

};

option1button.onclick = function() {
    option1screen.style.display = "block";
    storyopening1.style.display = "none";
    option1button.style.display = "none";
    option2button.style.display = "none";
};
option2button.onclick = function() {
    option2screen.style.display = "block";
    storyopening1.style.display = "none";
    option1button.style.display = "none";
    option2button.style.display = "none";
};

optiontwoscreenbutton2.onclick = function() {
    option2screen.style.display = "none";
    gameendingscreen.style.display = "block";

};
optiononescreenbutton1.onclick = function() {
    option1screen.style.display = "none";
    option3screen.style.display = "block";

};
option3screenbutton1.onclick = function() {
    easyroutescreen.style.display = "block";
    option3screen.style.display = "none";
};
option3screenbutton2.onclick = function() {
    hardroutescreen.style.display = "block";
    option3screen.style.display = "none";
};
/* hardroutescreenbutton2.onclick = function() {
    hardroutescreen.style.display = "none";
    hardroutescreen1.style.display = "block";
};
*/


hardroutescreenbutton1.onclick = function() {
    hardroutescreen.style.display = "block";
};


function delayAndChange() {
  setTimeout(function() {
    document.getElementById('hard-route-screen').style.display = 'none';
      document.getElementById('hard-route-screen1').style.display = 'block';
    

    setTimeout(function() {
      document.getElementById('hard-route-screen1').style.display = 'none';
      document.getElementById('gameover').style.display = 'block';
    }, 2000); 
  }, 2000); 
}