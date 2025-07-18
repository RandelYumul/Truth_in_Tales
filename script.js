function scrollLeft() {
  const scrollBox = document.getElementById('blogScroll');
  scrollBox.scrollBy({ left: -400, behavior: 'smooth' });
}

function scrollRight() {
  const scrollBox = document.getElementById('blogScroll');
  scrollBox.scrollBy({ left: 400, behavior: 'smooth' });
}