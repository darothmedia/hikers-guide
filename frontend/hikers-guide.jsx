import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store'
import { createBrowserHistory } from 'history'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore()
  const history = createBrowserHistory()
  ReactDOM.render(<Root store={store}/>, root)
  const ttg = document.getElementById('ttg')
  const currentTheme = localStorage.getItem('theme')
  if (currentTheme === 'galaxy') {
    document.body.classList.add('galaxy-theme')
  }
  ttg.addEventListener('click', () => {
    document.body.classList.toggle('galaxy');
    let theme = 'light'
    if (document.body.classList.contains('galaxy')) {
      theme = 'galaxy'
    }
    localStorage.setItem('theme', theme)
    console.log(localStorage.theme)
  })
})