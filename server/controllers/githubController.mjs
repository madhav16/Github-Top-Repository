
import axios from 'axios';

const getPopularRepositories = async (req, res) => {
  try {
    const { count } = req.query;

    if (!count || isNaN(count)) {
      return res.status(400).json({ error: 'Invalid count parameter' });
    }

    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:2019-01-10&sort=stars&order=desc&per_page=${count}`
    );

    const repositories = response.data.items.map(({ name, stargazers_count, html_url, description }) => ({
        name,
        stars: stargazers_count,
        url: html_url,
        description, // Add the description property
      }));

    res.json(repositories);
  } catch (error) {
    console.error('Error fetching repositories:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getPopularRepositories };
