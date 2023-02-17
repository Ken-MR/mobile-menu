const mobile_menu = (() => {
  const expandNavigation = (navButton, navBar, buttons) => {
    navButton.addEventListener('click', () => {
      let buttonType = ['slow', 'fast', 'fast', 'slow'];
      if (navButton.classList.contains('clicked')) {
        navButton.classList.add('unclicked');
        navButton.classList.remove('clicked');

        navBar.classList.add('retract');
        navBar.classList.remove('expand');

        for (let i = 0; i < buttons.length; i++) {
          showButton(buttons[i], buttonType, 'retract');
        }
      }
      else {
        navButton.classList.add('clicked');
        navButton.classList.remove('unclicked');
        
        navBar.classList.add('expand');
        navBar.classList.remove('retract');

        for (let i = 0; i < buttons.length; i++) {
          showButton(buttons[i], buttonType, 'expand');
        }
      }
    });
  }

  const showButton = (button, type, direction) => {
    if (direction === 'retract') {
      if (type === 'slow') {
        button.classList.remove('icon_appear_slow');
        button.classList.add('icon_vanish_slow');
      }
      else {
        button.classList.remove('icon_appear_fast');
        button.classList.add('icon_vanish_fast');
      }
    }
    else {
      if (type === 'slow') {
        button.classList.remove('icon_vanish_slow');
        button.classList.add('icon_appear_slow');
      }
      else {
        button.classList.remove('icon_vanish_fast');
        button.classList.add('icon_appear_fast');
      }
    }
  }

  return { expandNavigation };
})();

const navButton = document.getElementById('open_close');

const navBar = document.getElementById('nav_bar');

const buttons = document.getElementsByClassName('nav_button');

mobile_menu.expandNavigation(navButton, navBar, buttons);

