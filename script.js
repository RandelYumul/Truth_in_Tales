function scrollToLeft() {
  const scrollBox = document.getElementById('blogScroll');
  scrollBox.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollToRight() {
  const scrollBox = document.getElementById('blogScroll');
  scrollBox.scrollBy({ left: 200, behavior: 'smooth' });
}