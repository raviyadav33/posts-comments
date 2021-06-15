import { UPDATE_POSTS } from '../actions/actionTypes';

export default function posts(state = [
  {
    _id: 1,
    user: {
        name: "Hritik"
    },
    content: "Posting for the first time",
    likes: [100,200,300,400], // likes id
    comments: ["asdfadfa", "sdfd sdf", "sdf sdf", "df", "fjhg"]
},
{
  _id: 2,
  user: {
      name: "Aadarsh"
  },
  content: "Posting for the second time",
  likes: [100,200,300,400], // likes id
  comments: ["asdfadfa", "sdfd sdf", "sdf sdf", "df", "fjhg"]
},
{
  _id: 3,
  user: {
      name: "bhavya"
  },
  content: "Posting for the third time",
  likes: [100,200,300,400], // likes id
  comments: ["asdfadfa", "sdfd sdf", "sdf sdf", "df", "fjhg"]
}
], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
