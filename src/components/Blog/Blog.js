import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { SpinnerCircular } from 'spinners-react';
import './Blog.scss';
import Pagination from './Pagination';
import Search from './Search';

const Blog = () => {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 6,
    _totalRows: 1,
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 6,
    title_like: '',
  });

  const handlePageChange = (newPage) => {
    setFilter({ ...filter, _page: newPage });
  };

  const handleFilterChange = (newFilter) => {
    setFilter({ ...filter, _page: 1, title_like: newFilter.searchTerm });
  };

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const paramString = queryString.stringify(filter);
    //     const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
    //     const response = await fetch(requestUrl);
    //     const responseJSON = await response.json();
    //     const { data, pagination } = responseJSON;

    //     // setPostList(data);
    //     setTimeout(() => {
    //       setPostList(data);
    //       setPagination(pagination);
    //     }, 300);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchData();

    (async () => {
      try {
        const paramString = queryString.stringify(filter);
        let response = await axios({
          method: 'GET',
          url: `https://js-post-api.herokuapp.com/api/posts?${paramString}`,
        });

        const { data, pagination } = response.data;

        setTimeout(() => {
          dayjs.extend(relativeTime);
          const newData = [];

          for (const dt of data) {
            dt.updatedAt = dayjs(dt.updatedAt).fromNow();
            newData.push(dt);
          }

          setPostList(newData);
          setPagination(pagination);
        }, 500);
      } catch (error) {
        console.log('failed to get api', error);
      }
    })();
  }, [filter]);

  const history = useHistory();
  const handleViewDetail = (id) => {
    history.push(`/blog/detail/${id}`);
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="blog">
      <Search onSubmit={handleFilterChange} setSearchTerm={setSearchTerm} />
      {/* render until have api */}
      {postList.length === 0 && searchTerm === '' && (
        <div className="post-error">
          <SpinnerCircular size={100} />
        </div>
      )}
      {/* render with search not match */}
      {postList.length === 0 && searchTerm !== '' && (
        <div className="post-error">
          <h2>Not found {searchTerm}</h2>
        </div>
      )}

      <div className="post-list">
        {postList.map((item) => (
          <div
            key={item.id}
            className="post-item"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
            }}
            onClick={() => handleViewDetail(item.id)}
          >
            <h3>{item.title}</h3>
            <span>By {item.author}</span>
            <span> - {item.updatedAt}</span>
          </div>
        ))}
      </div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
};

export default Blog;
