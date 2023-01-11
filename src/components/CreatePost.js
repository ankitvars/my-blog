import React from 'react';
import { useFormInput } from '../hooks';
import { firestore } from '../firebase';
import classes from './Button.module.css';
import styled from 'styled-components';

const CreatePostHeading = styled.h1`
  text-align: center;
`;
const CreatePostFormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    margin-bottom: 9px;
  }
  input {
    height: 37px;
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    font-size: 18px;
    padding-left: 10px;
  }
  textarea {
    border: 1px solid #e1e1e1;
    height: 400px;
    font-size: 18px;
    padding-left: 10px;
    border-radius: 3px;
    padding-top: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

function CreatePost() {
  const title = useFormInput();
  const subtitle = useFormInput();
  const content = useFormInput();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('title', title);
    console.log('subtitle', subtitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title: title.value,
      subtitle: subtitle.value,
      content: content.value,
    });
  }

  return (
    <div className="create-post">
      <CreatePostHeading>Create Post</CreatePostHeading>

      <form onSubmit={handleSubmit}>
        <CreatePostFormField className="form-field">
          <label>Title</label>
          <input {...title} />
        </CreatePostFormField>

        <CreatePostFormField className="form-field">
          <label>Sub Title</label>
          <input {...subtitle} />
        </CreatePostFormField>

        <CreatePostFormField className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </CreatePostFormField>

        <button className={classes.button}>Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
