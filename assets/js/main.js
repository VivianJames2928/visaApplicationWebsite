const navbar = document.getElementById("topBar");
window.addEventListener("scroll", () => {
  const scrolly = window.scrollY;
  if (scrolly > 50) {
    //adjust offset
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const navbars = document.getElementById("navBar");
window.addEventListener("scroll", () => {
  const scrolly = window.scrollY;
  if (scrolly > 50) {
    //adjust offset
    navbars.classList.add("scrolled");
  } else {
    navbars.classList.remove("scrolled");
  }
});


function sendEmail() {
  const email = document.getElementById('emailInput').value;
  if (email) {
    alert('Subcribed to our newsletter');
  } else {
    alert('Please enter a valid email address')
  }
}

function sendEmail() {
  const emailInput = document.getElementById("emailInput").value;

  if (emailInput) {
    alert("You've successfully subscribed");
  } else {
    alert("Please enter something!");
  }
}