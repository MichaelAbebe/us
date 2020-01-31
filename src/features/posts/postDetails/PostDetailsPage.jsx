import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import PostDetailHeader from "./PostDetailHeader";
import PostDetailInfo from "./PostDetailInfo";
import PostDetailChat from "./PostDetailChat";
import PostDetailSidebar from "./PostDetailSidebar";

const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id;

  let post = {};

  if (postId && state.posts.length > 0) {
    post = state.posts.filter(post => post.id === postId)[0];
  }
  return { post };
};

const PostDetailsPage = ({ post }) => {
  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <PostDetailHeader post={post} />
          <PostDetailInfo post={post} />
          <PostDetailChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <PostDetailSidebar participants={post.participants}/>
        </Grid.Column>
      </Grid>
    </div>
  );
};
export default connect(mapState)(PostDetailsPage);
