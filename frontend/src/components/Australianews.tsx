import React,{useEffect,useState} from 'react';
import axios from 'axios';



const AustraliaNews: React.FC = () => {
    const [articles, setArticles] = useState<any[]>([]);

    useEffect(() => {
      const fetchNews = async () => {
        const options = {
            method: 'GET',
            url: 'https://news-api14.p.rapidapi.com/search',
            params: {
              q: 'conocophillips australia sustainbility',
              country: 'AU',
              language: 'en',
              pageSize: '10',
              publisher: 'offshore-energy.com, abc.net.au,smh.com.au'
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
              'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
            }
          };
  
        try {
          const response = await axios.request(options);
          setArticles(response.data.articles || []); 
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      };
  
      fetchNews();
    }, []);
  
    return (
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
              {article.thumbnail && (
                <img src={article.thumbnail} alt="Article thumbnail" className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{article.title}</h2>
                <p className="text-gray-700 text-base mb-4">
                  <strong>Published on:</strong> {new Date(article.published_date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-base">{article.description}</p>
              </div>
              <div className="p-4">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Read more</a>
              </div>
            </div>
          ))}
        </div>
        </div>
      );
    };
export default AustraliaNews;
