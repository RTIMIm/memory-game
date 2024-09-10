window.onload = function () {
    var cards = $(".container")
    console.log(cards)
    
    var flippedCards = []
    var matchedPairs = 0
  
    function shuffle() {
      for (var i = 0; i < cards.length; i++) {
        var randomPos = Math.floor(Math.random() * cards.length)
        cards[i].style.order = randomPos
      }
    }
  
    shuffle();
  
    function flipCard() {
      if (flippedCards.length === 2){
        return
    }
  
      this.classList.add("flip")
      flippedCards.push(this)
      if (flippedCards.length === 2) {
        checkForMatch()
      }
    }
  
    function checkForMatch() {
      var card1 = flippedCards[0]
      var card2 = flippedCards[1]
      var isMatch = card1.querySelector(".back img").src === card2.querySelector(".back img").src
  
      if (isMatch) {
        disableCards()
        matchedPairs++
        if (matchedPairs === cards.length / 2) {
          setTimeout(function () {
            alert("You win")
            resetGame()
          }, 1000)
        }
      } else {
        unflipCards()
      }
    }
  
    function disableCards() {
      for (var i = 0; i < flippedCards.length; i++) {
        flippedCards[i].removeEventListener("click", flipCard)
      }
      resetFlippedCards()
    }
  
    function unflipCards() {
      setTimeout(function () {
        for (var i = 0; i < flippedCards.length; i++) {
          flippedCards[i].classList.remove("flip")
        }
        resetFlippedCards()
      }, 1000)
    }
  
    function resetFlippedCards() {
      flippedCards = []
    }
  
    function resetGame() {
      shuffle();
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("flip")
        cards[i].click(flipCard)
      }
      matchedPairs = 0
      resetFlippedCards()
    }
  
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", flipCard)
    }
  }
  