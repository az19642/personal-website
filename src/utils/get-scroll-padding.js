const getScrollPadding = () => {
  const nav = document.querySelector(".nav");
  const navHeight = calc(nav.offsetHeight);
  document.documentElement.style.setProperty("--scroll-padding", navHeight + "px");
}

export default getScrollPadding;
