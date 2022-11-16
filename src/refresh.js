import Result from './result.js';
import { gameUrl } from './post.js';

const refresh = async () => {
  const list = document.querySelector('.results');
  list.style.border = '2px solid black';
  list.innerHTML = '';
  const results = await fetch(gameUrl);
  const data = await results.json();
  const arr = data.result;
  arr.forEach((element) => {
    const savedRecord = Result.record(element.user, element.score);
    list.innerHTML += savedRecord;
  });
};

export default refresh;