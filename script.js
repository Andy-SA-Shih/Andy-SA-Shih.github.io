const vibes = [
  "Immaculate ✨",
  "Suspicious but promising 👀",
  "Elite engineer energy 💻",
  "Needs coffee ☕",
  "Silicon Valley arc loading 🚀",
  "Absolutely unhinged (in a good way)"
];

document.getElementById("vibeBtn").addEventListener("click", () => {
  const vibe = vibes[Math.floor(Math.random() * vibes.length)];
  document.getElementById("vibeText").textContent = vibe;
});

