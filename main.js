var modelViewer = document.getElementById('model');
let textBox = document.getElementById('text');
const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');

btnOne.addEventListener('click', function stop() {
    modelViewer.animationName = "none";
    textBox.innerHTML = "<h1>Binito is tired!!! Lemme stop !!! </h1>";
})

btnTwo.addEventListener('click', function run() {
    modelViewer.animationName = "Running";
    textBox.innerHTML = "<h1>Hello guys, Binito is running now!!! </h1>"
})

btnThree.addEventListener('click', function wave() {
    modelViewer.animationName = "Wave";
    textBox.innerHTML = "<h1>Hello guys, I am Binito</h1>";
})
