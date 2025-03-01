// script.js
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Close all other answers
      document.querySelectorAll(".faq-answer").forEach((item) => {
        if (item !== answer) {
          item.classList.remove("open");
        }
      });

      // Toggle the clicked answer
      answer.classList.toggle("open");
    });
  });
});
