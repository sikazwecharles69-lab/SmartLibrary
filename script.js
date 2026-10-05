const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("header nav");

if (menuButton && nav) {
  function setOpen(open) {
    nav.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  }

  // Button opens and closes the menu
  menuButton.addEventListener("click", () => {
    setOpen(!nav.classList.contains("open"));
  });

  // Tapping a link closes the menu
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Escape key closes it
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") setOpen(false);
  });
}