import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./PostSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state?.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <p>loading....</p>}
          {error && <p>{error}</p>}
          {posts.map((post, index) => <p key={post?.id}>
              {post?.title}
          </p>)}
    </div>
  );
};

export default PostView;
