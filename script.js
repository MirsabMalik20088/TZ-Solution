
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getDatabase, ref, set, get, child } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';
import { validateForm } from './func.js';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger?.addEventListener("click", mobileMenu());

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
 
const firebaseConfig = {
  apiKey: "AIzaSyCKnTaSdnFFCmqC4nPJFCGWeAEbjOq93TQ",
  authDomain: "tz-solutions-368a9.firebaseapp.com",
  projectId: "tz-solutions-368a9",
  storageBucket: "tz-solutions-368a9.appspot.com",
  messagingSenderId: "936303147049",
  appId: "1:936303147049:web:a866caa3a8d295fa740438",
  measurementId: "G-KD1263S112"
};

const app = initializeApp(firebaseConfig);
console.log(app);
const db = getDatabase(app);
console.log(db);
document.getElementById('submit').addEventListener('click', function (e) {
  console.log("d");
  if(validateForm()) {
    set(ref(db, 'user/' + document.getElementById('firstname').value), {
      firstname: document.getElementById('firstname').value,
      lastname: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      help: document.getElementById('help').value
    });
    toastr.success('Your form is submitted successfully!');
  }
  else {
    console.log("error");
  }

});

