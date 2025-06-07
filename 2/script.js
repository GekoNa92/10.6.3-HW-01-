const window_screen = document.querySelector('#window_screen');
const btn = document.querySelector('.j-btn-test');

const windows = (window_screen) => {
  
  const width  = window.innerWidth;
  const height = window.innerHeight;

  window.alert(`Ширина: ${width}, Высота: ${height}`);;
}

btn.addEventListener('click', () => {
    windows();
});