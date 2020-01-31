import React, { Fragment } from "react";
import { Segment, Item, Label, List } from "semantic-ui-react";

const PostDetailSidebar = ({ participants }) => {
  const isHost = false;
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {participants && participants.length}{" "}
        {participants && participants.length === 1 ? "Person" : "People"}{" "}
        Participating
      </Segment>
      <Segment attached>
        <List divided>
          {participants &&
            participants.map(participant => (
              <Item key={participant.id} style={{ position: "relative" }}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Item.Image size="tiny" src={participant.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">{participant.name}</Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </Fragment>
  );
};
export default PostDetailSidebar;
