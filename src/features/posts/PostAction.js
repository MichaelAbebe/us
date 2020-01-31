import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_POSTS
} from "./PostConstants";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../Async/AsyncActions";
import { fetchSampleData } from "../../app/Data/MockApi";
import { toastr } from "react-redux-toastr";
export const createPost = post => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_POST,
        payload: {
          post
        }
      });
      toastr.success("Success!", "Tip has been posted!");
    } catch (error) {
      toastr.error("Oops", "Something went wrong");
    }
  };
};
export const updatePost = post => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_POST,
        payload: {
          post
        }
      });
      toastr.success("Success!", "Tip has been updated!");
    } catch (error) {
      toastr.error("Oops", "Something went wrong");
    }
  };
};

export const deletePost = postId => {
  return {
    type: DELETE_POST,
    payload: {
      postId
    }
  };
};
export const loadposts = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const posts = await fetchSampleData();
      dispatch({ type: FETCH_POSTS, payload: { posts } });
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
