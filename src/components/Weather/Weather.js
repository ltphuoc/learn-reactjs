import axios from 'axios';
import { useEffect, useState } from 'react';

function Weather() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const requestUrl = 'https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data } = responseJSON;

        // setPostList(data);
        setTimeout(() => {
          setPostList(data);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="">
      {postList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
}

export default Weather;
