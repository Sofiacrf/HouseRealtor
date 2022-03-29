// GLOBAL VARIABLES
const newsApiRootURL = 'https://newsapi.org';
const newsApiKey = '7f69ce2de7f443b8b756ea57b6f8fcad';

// DOM Element References
const newsContainer = document.querySelector('#news');

// Function to render the news card
function renderNewsCard(articles) {
    console.log(articles);
    // Set the data API variables
    const newsTitle = articles.title;
    const newsContent = articles.description;
    const newsSource = articles.source.name;
    const newsURL = articles.url;

    // Create elements for a card
    const col = document.createElement('div');
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const titleEl = document.createElement('h5');
    const contentEl = document.createElement('p');
    const sourceEl = document.createElement('p');
    const urlEl = document.createElement('link');

    // Append elements
    col.append(card);
    card.append(cardBody);
    cardBody.append(titleEl, contentEl, sourceEl, urlEl);

    // Setting Attributes
    col.setAttribute('class', 'col-md');
    col.classList.add('news-card');
    card.setAttribute('class', 'card bg-light border-secondary');
    cardBody.setAttribute('class', 'card-body text-secondary p-2');
    titleEl.setAttribute('class', 'card-title text-center');
    contentEl.setAttribute('class', 'card-text');
    sourceEl.setAttribute('class', 'card-text');
    urlEl.setAttribute('class', 'nav-link active');

    // Add content to elements
    titleEl.textContent = `${newsTitle}`;
    contentEl.textContent = `${newsContent}`;
    sourceEl.textContent = `Fuente: ${newsSource}`;
    urlEl.textContent = `link: ${newsURL}`;

    newsContainer.append(col);
}

// Function to display the news
function renderNews(articles) {
    const headingCol = document.createElement('div');
    headingCol.setAttribute('class', 'col-12');

    newsContainer.innerHTML = '';
    newsContainer.append(headingCol);

    for (let i = 0; i < 3; i++) {
        renderNewsCard(articles[i]);
    }
} 

// Function to render the API articles
function renderItems(data) {
    renderNews(data.articles);
}

// Function to fetch the API data
function fetchNews() {
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