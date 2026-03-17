const quotes= [];

const quote1 ={
    name: 'English is a language spoken by humans',
    auth: '-Anonymous'
}
const quote2 ={
    name: 'So many books, so little time.',
    auth: '-Frank Zappa'
}
const quote3 ={
    name: 'Stars shine at night',
    auth: '-Who'
}
const quote4 ={
    name: 'Believe in yourself, Matia!',
    auth: '-Anonymous'
}
const quote5 ={
    name: 'Be yourself; everyone else is already taken.',
    auth: '-Oscar Wilde'
}

quotes.push(quote1,quote2,quote3,quote4,quote5);

const gernate = document.getElementById('gernate')

gernate.addEventListener('click',function(){
    const randomQuotes = Math.floor(Math.random() * quotes.length)

    const gernateQuote = quotes[randomQuotes];

    const header = document.getElementById('quote')
    const author = document.getElementById('author')

    header.innerHTML = gernateQuote.name;
    author.innerHTML = gernateQuote.auth;
    
})

