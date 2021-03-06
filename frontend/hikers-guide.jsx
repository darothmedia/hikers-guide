import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: {currentUser: window.currentUser}
    };
  }
  const store = configureStore(preloadedState)

  ReactDOM.render(<Root store={store}/>, root)

  const ttg = document.getElementById('ttg')
  const navbar = document.getElementById('navbar')
  const splash = document.getElementById('splash')
  

  ttg.addEventListener('click', () => {
    document.body.classList.toggle('galaxy');
    let theme = 'trail'
    if (document.body.classList.contains('galaxy')) {
      theme = 'galaxy'
    }
    localStorage.setItem('theme', theme)
  })
})