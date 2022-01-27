const colors =["green", "red","rgba(133,122,200)","#f15025"];
// array of colors that will be used

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
// .querySelector gets the first element with the class (.) '.color'

//when i click this button, change the color
btn.addEventListener('click', function(){
    //get a random number between 0 & 3 (in array)
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//function that generates random number from array 0-3
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
    //Math.random returns a number BETWEEN 0 and 1 if you multiply it times the length of the array and round down, we will get one of the numbers
}
