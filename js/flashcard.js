function toggleAnswer(id) {
  var answerElement = document.getElementById(id);
  if (answerElement.classList.contains('unblur')) {
    answerElement.classList.remove('unblur');
  } else {
    answerElement.classList.add('unblur');
  }
}
