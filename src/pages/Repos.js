import { useEffect } from 'react';

function useLogGitHubRepos(username, token) {
  useEffect(() => {
    if (!username) return;

    const perPage = 100;
    let page = 1;
    let allRepos = [];

    const fetchPage = () => {
      const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`;
      const headers = token
        ? { Authorization: `token ${token}` }
        : {};

      fetch(url, { headers })
        .then(res => {
          if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
          return res.json();
        })
        .then(data => {
          if (data.length) {
            allRepos = allRepos.concat(data);
            page += 1;
            fetchPage();              // keep paging
          } else {
            // Done fetching—log just the URLs:
            const urls = allRepos.map(r => r.html_url);
            console.log(`Public repos for ${username}:`, urls);
          }
        })
        .catch(err => {
          console.error('Error fetching repos:', err);
        });
    };

    fetchPage();
  }, [username, token]);
}

export default useLogGitHubRepos;
