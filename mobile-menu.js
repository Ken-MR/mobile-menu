const mobile_menu = (() => {
  const expandNavigation = (navButton, navBar) => {
    navButton.addEventListener('click', () => {
      if (navButton.classList.contains('clicked')) {
        navButton.classList.add('unclicked');
        navButton.classList.remove('clicked');

        navBar.classList.add('retract');
        navBar.classList.remove('expand');
      }
      else {
        navButton.classList.add('clicked');
        navButton.classList.remove('unclicked');
        
        navBar.classList.add('expand');
        navBar.classList.remove('retract');
      }
    });
  }
  return { expandNavigation };
})();

const navButton = document.getElementById('open_close');

const navBar = document.getElementById('nav_bar');

mobile_menu.expandNavigation(navButton, navBar);

