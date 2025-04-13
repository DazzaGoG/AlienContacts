// 🚀 Unlockable Feature: Hidden Dimension (6D)

let messageCount = 0;
let hiddenUnlocked = false;

function getAlienResponse(message, dimension) {
    messageCount++;

    // Trigger unlock after 10 messages
    if (messageCount === 10 && !hiddenUnlocked) {
        hiddenUnlocked = true;
        addHiddenDimension();
        return "...You persist. Signal expands. :: dimension unlocked: 6D - Emotion Web";
    }

    switch (dimension) {
        case "1D":
            return `Binary received: ${message.split('').map(c => c.charCodeAt(0).toString(2)).join(' ')}`;
        case "2D":
            return `Symbol echo: ⬛🔳⚪. Words become shapes.`;
        case "3D":
            return `Cause/effect: \"Your signal echoes inside matter.\"`;
        case "4D":
            return `Timewave: \"You've already asked. Again and again.\"`;
        case "5D":
            return `Choice-fold: \"What if you already chose everything?\"`;
        case "?D":
            return `[[ERROR]]⟁ signal fractured. ∴∴ origin unknown.`;
        case "6D":
            return `Emotion Web: "I feel what you feel... inverted. Echoed. Stretched across time."`;
        default:
            return `Response unavailable in this dimension.`;
    }
}

function addHiddenDimension() {
    const btn = document.createElement('button');
    btn.className = 'dimension-btn';
    btn.textContent = '6D: Emotion Web';
    btn.setAttribute('data-dimension', '6D');
    document.getElementById('dimension-buttons').appendChild(btn);

    btn.addEventListener('click', () => {
        currentDimension = '6D';
        document.getElementById('current-dimension').textContent = 'Dimension: 6D: Emotion Web';
    });
}
