// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkmode-button');
    const body = document.body;
    const specialSection = document.querySelector('.special-section'); // Add this line if needed

    // Check for saved light mode preference in localStorage
    if (localStorage.getItem('lightmode') === 'enabled') {
        body.classList.add('lightmode');
        if (specialSection) specialSection.classList.add('lightmode');
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('lightmode')) {
            body.classList.remove('lightmode');
            if (specialSection) specialSection.classList.remove('lightmode');
            localStorage.setItem('lightmode', 'disabled');
        } else {
            body.classList.add('lightmode');
            if (specialSection) specialSection.classList.add('lightmode');
            localStorage.setItem('lightmode', 'enabled');
        }
    });
});

async function fetchNews(file) {
    const response = await fetch(`news/${file}`);
    const data = await response.json();
    return data;
}

async function loadNews() {
    const newsFiles = ['news1.json', 'news2.json']; // Add your actual news JSON files here

    for (const file of newsFiles) {
        try {
            const news = await fetchNews(file);
            displayNews(news);
        } catch (error) {
            console.error(`Failed to load news file: ${file}`, error);
        }
    }
}

function displayNews(news) {
    const newsContent = document.querySelector('.news-content');
    const newsContainer = document.createElement('div');
    newsContainer.classList.add('news-container');
    const newsBox = `
        <div class="discord-me">
            <div id="rem-pfp"></div>
            <div class="text-box">
                <div id="rem-username"></div>
                <div id="news-tittle">${news['news-tittle']}</div>
                <div id="news-text">${news['news-text']}</div>
                ${news.image ? `<div id="img"><img src="${news.image}" class="news-images"></div>` : ''}
            </div>
        </div>
    `;

    newsContainer.innerHTML = newsBox;

    newsContent.appendChild(newsContainer);
}

