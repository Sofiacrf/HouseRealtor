// Global Variables for the API
const newsApiRootURL = 'https://newsapi.org';
const newsApiKey = '7f69ce2de7f443b8b756ea57b6f8fcad';
const displayNews = document.querySelector('#display-news');
const displayThree = document.querySelector('#display-three');

// DOM Elements
const headlinesContainer = document.querySelector('#top-news');
    
// Function that displays the news card from news api headline
function renderNews (data) {
    for (let i = 0; i < 3;  i ++) {
        // Set the data variables
        console.log(data)
        let newsTitle = document.createElement('li');
        newsTitle.innerHTML = data.articles[i].title;
        let newsContent = document.createElement('li');
        newsContent.innerHTML = data.articles[i].description;
        let newsName = document.createElement('li');
        newsName.innerHTML = data.articles[i].source.name;


        // Set the class for each element
        displayThree.setAttribute('class', 'list-group-item-info border-0  size10');
        displayThree.setAttribute('class', 'card');
        displayThree.setAttribute('class','column-count:3');
        newsTitle.setAttribute('class', 'list-group-item-info border-0  size10')
        newsContent.setAttribute('class', 'list-group-item-info border-0  size10')
        newsName.setAttribute('class', 'list-group-item-info border-0  size10')

        // Append the elements in HTML
        displayThree.append(newsTitle);
        displayThree.append(newsContent);
        displayThree.append(newsName);
        headlinesContainer.append(displayThree);
    }
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