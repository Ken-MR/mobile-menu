const mobile_menu = (() => {
  const rotateNavigation = (item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('clicked')) {
        item.classList.add('unclicked');
        item.classList.remove('clicked');
      }
      else {
        item.classList.add('clicked');
        item.classList.remove('unclicked');
      }
    });
  }
  return { rotateNavigation };
})();

const navButton = document.getElementById('open_close');

mobile_menu.rotateNavigation(navButton);

