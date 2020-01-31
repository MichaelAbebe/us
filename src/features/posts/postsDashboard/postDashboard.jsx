import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import PostList from "../postList/PostList";
import { connect } from "react-redux";
import { createPost, updatePost, deletePost } from "../PostAction";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import PostActivity from "../PostActivity/PostActivity";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => ({
  posts: state.firestore.ordered.posts,
  loading: state.async.loading
});
const actions = { createPost, updatePost, deletePost };

class postDashboard extends Component {
  handelDeletePost = id => {
    this.props.deletePost(id);
  };

  render() {
    const { posts, loading } = this.props;
    if (loading) return <LoadingComponent />;
    return (
      <Grid>
        <Grid.Column width={8}>
          <PostList deletePost={this.handelDeletePost} posts={posts} />
        </Grid.Column>
        <Grid.Column width={6}>
          <PostActivity />
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "posts" }])(postDashboard));
