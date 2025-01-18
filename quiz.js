// function checkAnswer(){
//     const correctAnswer = '4';
//     const userAnswer = document.querySelector('input[name="quiz"')
//     if(userAnswer.value === correctAnswer){
//         userAnswer.textContent = "Correct!";
//     } else{
//         userAnswer.textContent = "Incorrect";
//     } 
//     }
// const button = document.getElementById('submit-answer');
// button.addEventListener()

function checkAnswer(){
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green"; // Optional: Add some style for correct answers
    } else if (userAnswer) {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red"; // Optional: Add some style for incorrect answers
    } else {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange"; // Optional: Style for no selection
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

// // Define the checkAnswer function
// function checkAnswer() {
//     // Step 1: Set the correct answer
//     const correctAnswer = "4";

//     // Step 2: Get the user's selected answer
//     const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

//     // Step 3: Get the feedback element
//     const feedbackElement = document.getElementById("feedback");

//     // Step 4: Compare the user's answer to the correct answer and update feedback
//     if (userAnswer === correctAnswer) {
//         feedbackElement.textContent = "Correct! Well done.";
//         feedbackElement.style.color = "green"; // Optional: Add some style for correct answers
//     } else if (userAnswer) {
//         feedbackElement.textContent = "That's incorrect. Try again!";
//         feedbackElement.style.color = "red"; // Optional: Add some style for incorrect answers
//     } else {
//         feedbackElement.textContent = "Please select an answer before submitting.";
//         feedbackElement.style.color = "orange"; // Optional: Style for no selection
//     }
// }

// // Attach the event listener to the "Submit Answer" button
// document.getElementById("submit-answer").addEventListener("click", checkAnswer);
