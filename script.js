let string = "";
let buttons = document.getElementsByClassName("btn");
document.querySelector("input").readOnly = true;

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "↵") {
      if ((document.querySelector("input").value = undefined)) {
        throw new Error("Please give proper syntax");
      } else {
        string = eval(string);
        document.querySelector("input").value = string;
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

// KeyPress handler

window.onkeypress = (e) =>{
    
    if(event.key == 'Enter'){
        string = eval(string);
        document.querySelector("input").value = string;
    }
    else if(event.key === 'Backspace'){
        string = "";
        document.querySelector("input").value = string;
    }
    else{
        string = string + event.key;
        document.querySelector("input").value = string;
    }
}

// INFO BUTTON

document.querySelector(".info").onmousedown = () => {   
document.querySelector(".description").style.display = "block";
};
document.querySelector(".info").onmouseup = () => {   
    document.querySelector(".description").style.display = "none";
    };