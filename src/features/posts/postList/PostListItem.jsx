import React, { Component } from "react";
import { Segment, Item, Icon, Button } from "semantic-ui-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

class PostListItem extends Component {
  state = {
    showComment: false
  };

  HandleShowComment = () => {
    this.setState({ showComment: true });
  };
  render() {
    const { post, deletePost } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={post.hostPhotoURL} />

              <Item.Content>
                <Item.Header>{post.ticker}</Item.Header>
                <Item.Description>Tiped by {post.hostedBy}</Item.Description>
                <Item.Description>Catalyst {post.catalyst}</Item.Description>
                <Item.Description>Forcast: {post.forcast}</Item.Description>
                <Item.Description></Item.Description> <Icon name="clock" />
                {format(post.date.toDate(), "EEEE do LLL")} at
                {format(post.date.toDate(), "h:mm a")}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span></span>
        </Segment>

        <Segment>
          <span>{post.description} </span>
        </Segment>
        <Segment clearing>
          <Button
            onClick={() => deletePost(post.id)}
            size="mini"
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`posts/${post.id}`}
            size="mini"
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}
export default PostListItem;
