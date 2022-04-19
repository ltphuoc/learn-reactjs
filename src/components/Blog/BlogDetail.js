import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  let history = useHistory();
  useEffect(() => {
    try {
      (async () => {
        const response = await axios({
          method: 'GET',
          url: `https://js-post-api.herokuapp.com/api/posts/${id}`,
        });

        const { data } = response;

        setPost(data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleBack = () => {
    history.push('/blog');
  };

  return (
    <div className="blog-detail">
      <button onClick={handleBack}>back</button>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.description}</p>
      {post.createdAt && post.updatedAt && (
        <div>
          <p>Create at {dayjs(post.createdAt).format('DD / MM / YYYY HH:mm')}</p>
          <p>Update at {dayjs(post.updatedAt).format('DD / MM / YYYY HH:mm')}</p>
        </div>
      )}
      <img src={post.imageUrl} alt="sample" />
    </div>
  );
};

export default BlogDetail;
