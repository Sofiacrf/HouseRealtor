// GLOBAL VARIABLES
const newsApiRootURL = 'https://newsapi.org';
const newsApiKey = '7f69ce2de7f443b8b756ea57b6f8fcad';

// DOM Element References
const newsContainer = document.querySelector('#news');

// Function to render the news card
function renderNewsCard (articles) {
    console.log(articles);
}

// Function to display the news
function renderNews(articles) {
   let headingCol = document.createElement('div');
   let heading = document.createElement('h4');

   headingCol.setAttribute('class', 'col-12');
   heading.textContent = 'Top News';
   headingCol.append(heading);

   newsContainer.innerHTML = '';
   newsContainer.append(headingCol);

  for (let i = 0; i < 5; i++) {
      renderNewsCard(articles[i]);
  }
}

// Function to render the API articles
function renderItems(data) {
    renderNews(data.articles);
}

// Function to fetch the API data
function fetchNews () {
const country = 'us';
const category = 'business';
const apiURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${newsApiKey}`;

fetch(apiURL)
.then(res => res.json())
.then(function (data) {
    renderItems(data);
})
.catch(err => console.log(err))
}

fetchNews();