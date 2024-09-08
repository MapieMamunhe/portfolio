// Define the article data
const articles = [
    {
      title: "FEATURE: 'breakdown' of the values NUIB brings to customers in this article",
      description: `In 2023-2024, as a Software Engineer, I worked on regulatory projects requested by the central bank (Banco de Moçambique). One notable project is the Unique Bank Identification Number (NUIB), which banks must assign to customers with regularized information. However, I observed that customers receive mandatory NUIB information without understanding its value in their daily lives.`,
      link: "https://www.linkedin.com/posts/mamunhe_nuib-a-breakdown-of-the-value-it-brings-activity-7200745097661976576-fnpX?utm_source=share&utm_medium=member_desktop",
      reactionCount: 40,
      imageUrl: "assets/images/articles/nuib/hero.png",
      imageAlt: "NUIB Breakdown in Mozambique"
    },
    {
      title: ` TAKE CONTROL OF YOUR MOBILE DATA!`,
      description:"Mozambique faces political and social instability (2024). As a software developer, I believe it's my role to use technology to help society find comfort and solutions to these problems.",
       link: "https://www.linkedin.com/posts/mamunhe_take-control-of-your-mobile-data-activity-7194939283659452416-5BW9?utm_source=share&utm_medium=member_desktop",
      reactionCount: 34,
    //  imageUrl: "assets/images/articles/internet/hero.png",
      // imageAlt: "Internet Prices in Mozambique"
    }
  ];
  
  // Function to create an article element
  /**
   * Creates an article element based on the provided article data.
   * @param {Object} article - The article data.
   * @param {string} article.title - The title of the article.
   * @param {string} article.description - The description of the article.
   * @param {string} article.link - The URL for continuing reading.
   * @param {number} article.reactionCount - The number of reactions.
   * @param {string} [article.imageUrl] - The URL of the article image (optional).
   * @param {string} [article.imageAlt] - The alt text for the article image (optional).
   * @returns {HTMLElement} The article element.
   */
  function createArticleElement(article) {
    const articleElement = document.createElement('article');
    articleElement.classList.add('article-box');
    
    if (article.title.includes("FEATURE: ")) {
      articleElement.classList.add('featured-article');
    }
  
    articleElement.innerHTML = `
      <div class="article-textbox">
        <div>
          <h3 class="h3">${article.title}</h3>
          <p class="article-text">${article.description}</p>
        </div>
        <div class="article-info">
          <a href="${article.link}" class="link" target="_blank" rel="noopener">Continue reading</a>
          <span class="reaction-count">
            <img src="./assets/images/heart-outline.svg" alt="heart" />
            ${article.reactionCount}
          </span>
        </div>
      </div>
      ${article.imageUrl ? `
      <picture class="article-illustration">
        <img src="${article.imageUrl}" alt="${article.imageAlt}" loading="lazy" />
      </picture>
      ` : ''}
    `;
  
    return articleElement;
  }
  
  // Get the container where the articles will be added
  const articleContainer = document.querySelector('.article-boxes');
  
  // Function to add articles to the container
  /**
   * Adds a list of articles to the container element.
   * @param {Array<Object>} articles - An array of article data.
   */
  function addArticles(articles) {
    articles.forEach(article => {
      const articleElement = createArticleElement(article);
      articleContainer.appendChild(articleElement);
    });
  }
  
  // Add the articles to the page
  addArticles(articles);
  