const quotes = [
    {
        quote:"Early to bed and early to rise makes a man healthy, wealthy, and wise.",
        author:"Benjamin Franklin",
    },
    {
        quote:"An investment in knowledge still yields the best returns.",
        author:"Benjamin Franklin",
    },
    {
        quote:"Anyone who has never made a mistake has never tried anything new.",
        author:"Albert Einstein",
    },
    {
        quote:"Confronting your fears, paradoxically, makes you a far happier and more productive person.",
        author:"Dr.David M.burns",
    },
    {
        quote:"Kite rise highest against the wind.",
        author:"Sir Winston Churchill",
    },
    {
        quote:"Men are born to succeed, not fail.",
        author:"Henry David Thoreau",
    },
    {
        quote:"The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions.",
        author:"Friedrich Nietzsche",
    },
    {
        quote:"The past is already gone, the future is not yet here. There's only one moment for you to live.",
        author:"Buddha",
    },
    {
        quote:"Work out your own salvation. Do not depend on others.",
        author:"Buddha",
    },
    {
        quote:"The mind is everything. What you think, you become.",
        author:"Buddha",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;