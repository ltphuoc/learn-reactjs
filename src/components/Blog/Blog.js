import { useEffect, useState } from 'react';
import queryString from 'query-string';
import './Blog.scss';
import Pagination from './Pagination';
import Search from './Search';

const Blog = () => {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 9,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 9,
    title_like: '',
  });

  const handlePageChange = (newPage) => {
    setFilter({ ...filter, _page: newPage });
  };

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, _page: 1, title_like: newFilter.searchTerm });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const paramString = queryString.stringify(filter);
        const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;

        // setPostList(data);
        setTimeout(() => {
          setPostList(data);
          setPagination(pagination);
        }, 300);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [filter]);

  return (
    <div className="blog">
      <Search onSubmit={handleFilterChange} />
      <div className="post-list">
        {postList.map((item) => (
          <div
            key={item.id}
            className="post-item"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <h3>{item.title}</h3>
            <p>By {item.author}</p>
          </div>
        ))}
      </div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
};

export default Blog;
