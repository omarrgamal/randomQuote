let quote = document.getElementById('quote');
let btn = document.querySelector('button');
// Array of quotes
const quotes = [
    "كنت عصفور اكلوني عملت اسد صاحبوني - Steve Jobs",
    "الصحاب اختفت لما السجاره انطفت - Winston Churchill",
    "ضربني وبكي , سبقني واشتكي - Albert Einstein",
    "متبصش يا عبيط ديه جايه بالتقسيط - Henry Ford 'Ford Cars Founder'",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
];


let previousIndex = -1;

btn.onclick = function () {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;
    let textGenerated = quotes[randomIndex];

    quote.textContent = textGenerated;
};




