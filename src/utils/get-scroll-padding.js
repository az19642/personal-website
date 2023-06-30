const getScrollPadding = () => {
  const nav = document.querySelector(".header");
  const navHeight = nav.offsetHeight;
  document.documentElement.style.setProperty("--scroll-padding", navHeight + "px");
}

export default getScrollPadding;
