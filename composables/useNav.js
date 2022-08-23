export function useNav() {
  function scrollTo(id) {
    var el = document.querySelector(id);
    window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
  }

  return { scrollTo };
}
