const articlesContainer = document.getElementById('articles');

fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=61dbc3b8b96c46868cb2ff68f404483d').then((res) => {
  return res.json();
}).then((res) => {
  // console.log('res', res);
  let htmlStr = ''
  const articles = res.articles;

  for (let i = 0; i < articles.length; i += 1) {
    const currentArticle = articles[i];
    console.log('currentArticle', currentArticle);
    const currentArticleHtml = `
      <div class="article">
        <img src="${currentArticle.urlToImage}" />
        <div class="content">
          <h2>${currentArticle.title}</h2>
          <ul>
            <li>Author: ${currentArticle.author}</li>
            <li>${currentArticle.publishedAt}</li>
            <li>${currentArticle.description}</li>
          </ul>
        </div>
      </div>
    `;
    htmlStr += currentArticleHtml;
  }

  articlesContainer.innerHTML = htmlStr;
});
