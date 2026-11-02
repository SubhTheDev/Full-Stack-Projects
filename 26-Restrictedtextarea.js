messageBox = document.querySelector("#message-box");
charCounter = document.querySelector("#char-counter");

messageBox.addEventListener("input", () => {
  const text = messageBox.value;
  const charCount = text.length;

  charCounter.textContent = `${charCount}/250`;
  if (charCount <= 125) {
    charCounter.style.cssText = "color: #000000";
  } else if (charCount > 125 && charCount <= 200) {
    charCounter.style.cssText = "color: #f2e042";
  } else if (charCount > 200 && charCount <= 245) {
    charCounter.style.cssText = "color: #faa356";
  } else {
    charCounter.style.cssText = "color: #fd0000";
  }
});
