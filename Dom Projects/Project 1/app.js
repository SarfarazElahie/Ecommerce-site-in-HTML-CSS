
// variables
let btn = document.querySelector("button")

let quote = document.querySelector(".quote")

let person = document.querySelector(".person")

// quotes.js

const quotes = [
  { person: "Albert Einstein", quote: "Imagination is more important than knowledge." },
  { person: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
  { person: "Martin Luther King Jr.", quote: "I have a dream." },
  { person: "Winston Churchill", quote: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
  { person: "Nelson Mandela", quote: "It always seems impossible until it's done." },
  { person: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." },
  { person: "Abraham Lincoln", quote: "Whatever you are, be a good one." },
  { person: "Steve Jobs", quote: "Stay hungry, stay foolish." },
  { person: "Leonardo da Vinci", quote: "Simplicity is the ultimate sophistication." },
  { person: "Mother Teresa", quote: "Spread love everywhere you go." },
  { person: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
  { person: "Mark Twain", quote: "The secret of getting ahead is getting started." },
  { person: "Benjamin Franklin", quote: "Well done is better than well said." },
  { person: "Aristotle", quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
  { person: "Socrates", quote: "The unexamined life is not worth living." },
  { person: "Buddha", quote: "What we think, we become." },
  { person: "William Shakespeare", quote: "To be, or not to be, that is the question." },
  { person: "Plato", quote: "Wise men speak because they have something to say; fools because they have to say something." },
  { person: "J.K. Rowling", quote: "It is our choices that show what we truly are, far more than our abilities." },
  { person: "Dr. Seuss", quote: "Don't cry because it's over, smile because it happened." },
  { person: "Bruce Lee", quote: "Knowing is not enough, we must apply. Willing is not enough, we must do." },
  { person: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
  { person: "Helen Keller", quote: "The only thing worse than being blind is having sight but no vision." },
  { person: "Rumi", quote: "What you seek is seeking you." },
  { person: "John Lennon", quote: "Life is what happens when you’re busy making other plans." },
  { person: "Bob Marley", quote: "Love the life you live. Live the life you love." },
  { person: "Vincent Van Gogh", quote: "What would life be if we had no courage to attempt anything?" },
  { person: "Friedrich Nietzsche", quote: "That which does not kill us makes us stronger." },
  { person: "Pablo Picasso", quote: "Everything you can imagine is real." },
  { person: "Stephen Hawking", quote: "Intelligence is the ability to adapt to change." }
];


btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})


console.log(quotes[1])
