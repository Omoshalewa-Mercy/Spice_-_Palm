console.log("Spice & Palm website loaded successfully.");

//JS code for the filter button interactivity
function filterMenu(category) {
  let items = document.querySelectorAll(".menu-item");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else {
      if (item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });
}

//JS code for reservation form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservationForm");

  // declare and get all error message elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");
  const guestsError = document.getElementById("guest-error");
  const dateError = document.getElementById("date-error");
  const timeError = document.getElementById("time-error");
  const messageError = document.getElementById("message-error");

 

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // declare get form values and trim whitespace
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let guests = document.getElementById("guests").value;
      let date = document.getElementById("date");
      let dateValue= document.getElementById("date").value;
      let today = new Date().toISOString().split('T')[0];
      date.setAttribute('min', today);

      let time = document.getElementById("time").value;
      let messages = document.getElementById("message").value;


      // reset all error messages to hidden
      nameError.setAttribute('style', 'display: block')
      emailError.setAttribute('style', 'display: block')
      phoneError.setAttribute('style', 'display: block')
      guestsError.setAttribute('style', 'display: block')
      dateError.setAttribute('style', 'display: block')
      timeError.setAttribute('style', 'display: block')
      
      
      // validation checks
      if (name !== "") {
        nameError.setAttribute('style', 'display: none')
      }

      if (email.includes("@")) {
        emailError.setAttribute('style', 'display: none')
      }

      if (/^[0-9]+$/.test(phone)) {
        phoneError.setAttribute('style', 'display: none')
      }

      if ((guests !== "") && (guests >= 1)) {
        guestsError.setAttribute('style', 'display: none')
      }
      if ((dateValue !== "") && (dateValue >= today)) {
        dateError.setAttribute('style', 'display: none')
      }
      if (time !== "") {
        timeError.setAttribute('style', 'display: none')
      }

      if(!name|| !email|| !phone || !guests || guests < 1 || !date || dateValue < today ||!time){
        return
      }else{
        alert("Reservation submitted successfully!");
      }
      form.reset();
    });
  }
});

window.addEventListener("scroll", function () {
  let btn = document.getElementById("topBtn");

  if (!btn) return;

  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}