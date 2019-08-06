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

    const {
      urlToImage,
      title,
      author,
      publishedAt,
      description,
    } = currentArticle;

    const currentArticleHtml = `
      <div class="article">
        <img src="${urlToImage}" />
        <div class="content">
          <h2>${title}</h2>
          <ul>
            <li>Author: ${author}</li>
            <li>${publishedAt}</li>
            <li>${description}</li>
          </ul>
        </div>
      </div>
    `;
    htmlStr += currentArticleHtml;
  }

  articlesContainer.innerHTML = htmlStr;
});
