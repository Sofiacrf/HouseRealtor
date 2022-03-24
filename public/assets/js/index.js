// Global Variables for the API
const newsApiRootURL = 'https://newsapi.org';
const newsApiKey = '7f69ce2de7f443b8b756ea57b6f8fcad';

// DOM Elements
const headlinesContainer = document.querySelector('#top-news');

// Function that renders the information in a card
function renderNewsCard () {

}
// Function that displays the news card from news api headline
function renderNews (data) {
    console.log(data)
    const mediaOutlet = data.articles[0].source.name;
    const title = data.articles[0].title;
    const description = data.articles[0].description;
    const mediaOutletURL = data.articles[0].url
    console.log(mediaOutlet);
    console.log(title);
    console.log(description);
    console.log(mediaOutletURL);

    
}


// Function that fetches the news data from the api
function fetchNews () {
const country = 'mx';
const category = 'business';
const apiURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${newsApiKey}`;

fetch(apiURL)
.then(res => res.json())
.then(function (data) {
    renderNews(data)
})
.catch(err => console.log(err))
}

fetchNews();