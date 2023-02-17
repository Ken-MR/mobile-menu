const mobile_menu = (() => {
  const rotateNavigation = (item) => {
    item.addEventListener('click', () => {
      item.classList.add('clicked');
    });
  }
  return { rotateNavigation };
})();

const navButton = document.getElementById('open_close');

mobile_menu.rotateNavigation(navButton);

