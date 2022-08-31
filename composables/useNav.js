export function useNav() {
  function scrollTo(id) {
    var el = document.querySelector(id);
    var nav = document.querySelector("#navBar");

    window.scrollTo({
      top: el.offsetTop - nav.offsetHeight,
      behavior: "smooth",
    });
  }

  return { scrollTo };
}
