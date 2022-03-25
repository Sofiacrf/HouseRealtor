// Global Variables for the API
const newsApiRootURL = 'https://newsapi.org';
const newsApiKey = '7f69ce2de7f443b8b756ea57b6f8fcad';

// DOM Elements
const headlinesContainer = document.querySelector('#top-news');

// Function that renders the information in a card
// function renderNewsCard (data) {
//     console.log(data);
//     // const mediaOutlet = newsData.articles[0].source.name;
//     // const title = newsData.articles[0].title;
//     // const description = newsData.articles[0].description;
//     // const mediaOutletURL = newsData.articles[0].url
//     // console.log(mediaOutlet);
//     // console.log(description);
//     // console.log(mediaOutletURL);
//     // console.log(newsData);
//     const title = data.articles[1].title;
//     console.log(title);
    
    

// }
// Function that displays the news card from news api headline
function renderNews (data) {
    // Data of whole articles
    const newsData = data.articles;

    // Loop through the data articles
    for (let i = 0; i < newsData.length; i++) {
        if(newsData) {
            const mediaOutlet = data.articles[0].title;
            console.log(mediaOutlet)
        }
    };
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