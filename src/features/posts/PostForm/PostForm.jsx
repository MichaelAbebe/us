import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { combineValidators, isRequired } from "revalidate";
import cuid from "cuid";
import { connect } from "react-redux";
import { createPost, updatePost } from "../PostAction";
import TextInput from "../../../app/Common/Form/TextInput";
import TextArea from "../../../app/Common/Form/TextArea";
import SelectInput from "../../../app/Common/Form/SelectInput";
import DateInput from "../../../app/Common/Form/DateInput";

const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id;

  let post = {};

  if (postId && state.posts.length > 0) {
    post = state.posts.filter(post => post.id === postId)[0];
  }
  return { initialValues: post };
};

const actions = {
  createPost,
  updatePost
};

const validate = combineValidators({
  ticker: isRequired({ message: "Stock Ticker is Requiered" }),
  forcast: isRequired({ message: "Forcast is Requiered" }),
  catalyst: isRequired({ message: "Catalyst is Requiered" }),
  date: isRequired({ message: "Catalyst date must be entered " })
});

const forcast = [
  { key: "bullish", text: "Bullish", value: "bullish" },
  { key: "bearish", text: "Bearish", value: "bearish" }
];
class PostForm extends Component {
  state = {
    ...this.props.post
  };
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updatePost(values);
      this.props.history.push(`/posts/${this.props.initialValues.id}`);
    } else {
      const newPost = {
        ...values,
        id: cuid(),
        hostedBy: "Mike",
        hostPhotoURL: "/Assets/user.jpg"
      };
      this.props.createPost(newPost);
      this.props.history.push(`/posts/${newPost.id}`);
    }
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      submitting,
      pristine
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete="off"
            >
              <Header sub color="teal" content="Forcast" />
              <Field
                name="forcast"
                type="text"
                component={SelectInput}
                options={forcast}
                placeholder="Select Forcast "
              />

              <Header sub color="teal" content="Stock Ticker" />
              <Field
                name="ticker"
                component={TextInput}
                placeholder="Stock Ticker"
              />

              <Header sub color="teal" content="Catalyst" />
              <Field
                name="catalyst"
                component={TextInput}
                placeholder="Select Catalyst"
              />
              <Header sub color="teal" content="Catalyst Date" />
              <Field
                width={5}
                name="date"
                component={DateInput}
                dateFormat="dd LLL yyy"
                placeholder="Catalyst Date"
              />
              <Header sub color="teal" content="Description" />
              <Field
                name="description"
                component={TextArea}
                rows={5}
                placeholder="Description"
              />

              <Header sub color="teal" content="" />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Tip
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/posts/${initialValues.id}`)
                    : () => history.push("/posts")
                }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "PostForm", validate })(PostForm));
