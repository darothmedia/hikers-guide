import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore()

  ReactDOM.render(<Root store={store}/>, root)

  const ttg = document.getElementById('ttg')
  const navbar = document.getElementById('navbar')
  const splash = document.getElementById('splash')
  let preloadedState = undefined

  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  }

  ttg.addEventListener('click', () => {
    document.body.classList.toggle('galaxy');
    navbar.classList.toggle('galaxy');
    splash.classList.toggle('galaxy');
    let theme = 'trail'
    if (document.body.classList.contains('galaxy')) {
      theme = 'galaxy'
    }
    localStorage.setItem('theme', theme)
  })
})