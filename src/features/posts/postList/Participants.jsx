import React, { Component } from "react";
import { Item, Image, Segment } from "semantic-ui-react";

class Participants extends Component {
  render() {
    const { comment } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item.Header>
              <h3>Participants</h3>
            </Item.Header>
            <Item>
              <Image as="a" size="mini" circular src={comment.photoURL} />
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
    );
  }
}
export default Participants;
