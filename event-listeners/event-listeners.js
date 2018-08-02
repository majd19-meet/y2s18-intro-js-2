// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg' , './imgs/f.jpeg' , './imgs/index.jpeg' , './imgs/l.jpeg' , './imgs/okay.jpeg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  // YOUR TASK: Finish this function!

}

document.getElementsByTagName("img")[0].addEventListener("click" , function (event) {
alert("Hello, you just clicked")

})