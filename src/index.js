import './style.css';
import postScore from './post.js';
import refresh from './refresh.js';

document.getElementById('score-data').addEventListener('submit', postScore);
document.querySelector('.refresh-btn').addEventListener('click', refresh);
window.addEventListener("load", refresh);