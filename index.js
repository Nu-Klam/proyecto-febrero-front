((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

((d) => {
  d.addEventListener("click", (e) => {
    const $addBtn = d.querySelector(".container__buttons .add"),
      $subtractBtn = d.querySelector(".container__buttons .subtract"),
      $span = d.querySelector(".container__buttons span");
    if (e.target === $addBtn) {
      $span.textContent = Number($span.textContent) + 1;
    }

    if (e.target === $subtractBtn) {
      $span.textContent = Number($span.textContent) - 1;
    }
  });
})(document);
