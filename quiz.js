function checkAnswer() {
  const correctAnswer = "4"; // Step 2: Correct answer

  // Step 3: Get user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Check if an option was selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 4: Compare answers
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Step 5: Add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
