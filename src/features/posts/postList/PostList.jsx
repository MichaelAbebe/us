import React, { Component, Fragment } from "react";
import PostListItem from "./PostListItem";

class PostList extends Component {
  render() {
    const { posts, deletePost } = this.props;
    return (
      <Fragment>
        {posts && posts.map(post => (
          <PostListItem key={post.id} post={post} deletePost={deletePost} />
        ))}
      </Fragment>
    );
  }
}
export default PostList;
