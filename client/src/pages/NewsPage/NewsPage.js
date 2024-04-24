import React, { useState, useEffect } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import "./NewsPage.css";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    const options = {
      method: "GET",
      url: "https://spaceflight-news2.p.rapidapi.com/v3/articles",
      headers: {
        "X-RapidAPI-Key": "ce77038580mshd879e7a4fd09827p122331jsnc58e627fb910",
        "X-RapidAPI-Host": "spaceflight-news2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Response:", response);

      // Update this line to setNews with the correct data property
      setNews(response.data); // assuming the news data is directly in response.data
      setError(null);
    } catch (error) {
      console.error("Error fetching news:", error);
      console.log("Error response:", error.response);
      setError("Error fetching news. Please try again later.");
    }
  };

  const debouncedFetchNews = debounce(fetchNews, 1000);

  useEffect(() => {
    // Fetch news when the component mounts
    debouncedFetchNews();

    // Clean up the debounce function on component unmount
    return () => debouncedFetchNews.cancel();
  }, []);

  return (
    <div className="news-container">
      <h1>SPACE NEWS</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="news-list">
          {Array.isArray(news) && news.length > 0 ? (
            news.map((article) => (
              <div key={article.id} className="news-item">
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p>No news available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
