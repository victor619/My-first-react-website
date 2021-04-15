function Display(x, height, index) {
  let post = document.getElementsByClassName(x);

  if (window.scrollY > height) {
    post[index].style.opacity = "1";
    post[index].style.transform = "translateY(-10px)";
  } else {
    post[index].style.opacity = "0";
    post[index].style.transform = "translateY(10px)";
  }
}

export default Display;
