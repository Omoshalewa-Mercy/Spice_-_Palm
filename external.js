console.log("Spice & Palm website loaded successfully.");

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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservationForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let guests = document.getElementById("guests").value;

      if (name === "" || email === "" || phone === "" || guests === "") {
        alert("Please fill in all required fields.");
        return;
      }

      if (!email.includes("@")) {
		  alert("Please enter a valid email.");
		  return;
      }
	  
	  if (!/^[0-9]+$/.test(phone)) {
		  alert("Phone number should only be digits");
		  return;
	  }

      alert("Reservation submitted successfully!");
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