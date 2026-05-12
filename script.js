 // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
 
//   // Scroll reveal
//   const reveals = document.querySelectorAll('.reveal');
//   const obs = new IntersectionObserver(entries => {
//     entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
//   }, { threshold: 0.12 });
//   reveals.forEach(r => obs.observe(r));
 

//   const obs = new IntersectionObserver(entries => {
//     entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
//   }, { threshold: 0.1 });
//   document.querySelectorAll('.reveal').forEach(el => obs.observe(el));