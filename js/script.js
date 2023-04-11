const profile = document.querySelector(".nav-profile");
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const modal = document.querySelector(".modal");

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
} else {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("rootActive");
    toggle.classList.add("active");
  }
}

const changeTheme = () => {
  const theme = localStorage.getItem("theme") === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
};

toggle.addEventListener("click", () => {
  body.classList.toggle("rootActive");
  toggle.classList.toggle("active");
  changeTheme();
});

profile.addEventListener("click", () => {
  modal.classList.toggle("modalActive");
});
