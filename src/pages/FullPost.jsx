import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { Post } from "../components/Post/Post";
import { AddComment } from "../components/AddComment/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import instance from "../shared/api.js";

// const BASE_URL = "https://blog-posts-backend-production.up.railway.app";

export const FullPost = () => {
  const [data, setData] = useState();
  // console.log(data)
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();

  React.useEffect(() => {
    instance.get(`/posts/${id}`).then((res) => {
      setData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.warn(err);
      alert('Error getting article!');
    });
  }, [id]);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />
  }


  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `${process.env.REACT_APP_API_URL}${data.imageUrl}` : ''}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <div>
          <ReactMarkdown children={data.text} />
        </div>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "John Doe",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "This is a test comment. 555555",
          },
          {
            user: {
              fullName: "John Doe",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <AddComment />
      </CommentsBlock>
    </>
  );
};