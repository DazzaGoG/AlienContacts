const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const responseArea = document.getElementById('alien-response');
const dimensionInfo = document.getElementById('current-dimension');
const dimensionBtns = document.querySelectorAll('.dimension-btn');

let currentDimension = "1D";

// Change dimension
dimensionBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentDimension = e.target.getAttribute('data-dimension');
    dimensionInfo.textContent = `Dimension: ${currentDimension}`;
  });
});

// Send message
sendBtn.addEventListener('click', () => {
  const message = userInput.value.trim();
  if (message === "") return;
  responseArea.textContent = "Processing...";
  userInput.value = "";

  setTimeout(() => {
    const alienResponse = getAlienResponse(message, currentDimension);
    responseArea.textContent = alienResponse;
  }, 1000);
});

// Generate alien response
function getAlienResponse(message, dimension) {
  switch (dimension) {
    case "1D":
      return `Binary received: ${message.split('').map(c => c.charCodeAt(0).toString(2)).join(' ')}`;
    case "2D":
      return `Symbol echo: ⬛🔳⚪. Words become shapes.`;
    case "3D":
      return `Cause/effect: "Your signal echoes inside matter."`;
    case "4D":
      return `Timewave: "You've already asked. Again and again."`;
    case "5D":
      return `Choice-fold: "What if you already chose everything?"`;
    case "?D":
      return `[[ERROR]]⟁ signal fractured. ∴∴ origin unknown.`;
    default:
      return `Response unavailable in this dimension.`;
  }
}
