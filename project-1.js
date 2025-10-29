let btn = document.querySelector("#new-qoute");
let qoute = document.querySelector(".qoute");
let person = document.querySelector(".person");

const qoutes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    person: "Albert Einstein",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote: "Creativity begins where logic ends.",
    person: "Lena Marlowe",
  },
  {
    quote: "Every sunrise is a second chance.",
    person: "Jasper Quinn",
  },
  {
    quote: "Silence often speaks the loudest truth.",
    person: "Nia Calderon",
  },
  {
    quote: "Mistakes are proof that you're trying.",
    person: "Zara Monroe",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    person: "Alan Kay",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * qoutes.length);
  qoute.innerText = qoutes[random].quote;
  person.innerText = qoutes[random].person;
});
