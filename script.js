const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quotebtn = document.querySelector(".quote-btn");
const favbtn = document.querySelector(".favbtn");
const counter = document.querySelector(".counter");

let quoteCount = 0;

const favBtn = document.querySelector(".fav-btn");

favBtn.addEventListener("click", () => {

    const quoteText = quote.innerText;
    const authorText = author.innerText;

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push({
        quote: quoteText,
        author: authorText
    });

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    alert("add favorite !");
});

quotebtn.innerHTML= '<i class="fa-solid fa-spinner fa-spin"></i>Loading Qutoe';

const quoteAPIUrl ="https://dummyjson.com/quotes"

const getQuote = async (apiUrl )=>{
    const result = await fetch(apiUrl);
    const data = await result.json();

    const randomIndex = Math.floor(
        Math.random() *data.quotes.length
    );

    const randomQuote = data.quotes[ randomIndex];

    quote.innerText = randomQuote.quote;
    author.innerText = randomQuote.author;

     quoteCount++;
     counter.innerText =
        `Quotes Generated: ${quoteCount}`;

    
    quotebtn.innerHTML ="Get new Quote";

     console.log({
     id: randomQuote.id,
     quote: randomQuote.quote,
     author: randomQuote.author
});
};

getQuote(quoteAPIUrl);