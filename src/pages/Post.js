import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../posts/${slug}.md`)
      .then(res => fetch(res.default).then(r => r.text()).then(setContent))
      .catch(() => setContent('# 404 - Post Not Found'));
  }, [slug]);

  return (
    <div className="post">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Post;
