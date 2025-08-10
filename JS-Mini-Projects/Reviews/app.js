let cards = document.querySelectorAll(".card");
let totalCards = cards.length;

// loop over all cards
cards.forEach((card, i) => {
  // next button
  card.querySelector(".next").addEventListener("click", () => {
    cards[i].style.display = "none";
    let nextIndex = (i + 1) % totalCards;
    cards[nextIndex].style.display = "flex";
  });
  
  // prev button
  card.querySelector(".prev").addEventListener("click", () => {
    cards[i].style.display = "none";
    let prevIndex = (i - 1 + totalCards) % totalCards;
    cards[prevIndex].style.display = "flex";
  });
});


