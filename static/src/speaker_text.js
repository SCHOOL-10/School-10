function speak(text) {
  const message = new SpeechSynthesisUtterance();
  message.lang = "ru-RU";
  message.text = text;
  window.speechSynthesis.speak(message);
}