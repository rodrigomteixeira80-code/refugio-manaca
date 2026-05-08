const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector("#main-menu");
const menuLinks = document.querySelectorAll(".main-nav a");
const contactForm = document.querySelector(".contact-form");

function closeMenu() {
  if (!menuToggle || !mainMenu) {
    return;
  }

  mainMenu.classList.remove("is-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
}

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = mainMenu.classList.toggle("is-open");

    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      menuToggle.setAttribute("aria-label", "Fechar menu de navegação");
    } else {
      menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mainMenu.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
      "Obrigado pelo interesse no Refúgio Manacá! O formulário ainda será ativado futuramente. Por enquanto, use os canais de contato informados no site.",
    );
  });
}

console.log("Site Refúgio Manacá carregado com sucesso.");
