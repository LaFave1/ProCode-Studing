let timestart = Date.now();


let el = document.querySelector('.test');
el.addEventListener('click', (ev) => {
  
  let delta = Date.now() - timestart;
  console.log('click! delta: ', delta);

  if (delta >= 10000) {
    console.log('пройшло 10 сек!');
  }
});