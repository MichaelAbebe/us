import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const postImageStyle = {
  filter: "brightness(30%)"
};

const postImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const PostDetailHeader = ({ post }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image src="/Assets/stock-chart.jpg" fluid style={postImageStyle} />

        <Segment basic style={postImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={post.ticker}
                  style={{ color: "white" }}
                />
                <p>{post.forcast}</p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        
        <Button color="teal">Participate in this Stock</Button>

        <Button
          as={Link}
          to={`/manage/${post.id}`}
          color="orange"
          floated="right"
        >
          Edit Tip
        </Button>
      </Segment>
    </Segment.Group>
  );
};
export default PostDetailHeader;
