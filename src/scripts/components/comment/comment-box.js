'use strict';

import React from 'react';

import CommentList from './comment-list';
import CommentForm from './comment-form';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: []};

    this.getComments();

  }

  getComments() {
    fetch(this.props.url).then(response => response.json()).then(data => {
        this.setState({data: data});
    }).catch(e => {
        console.log("Oops, error");
    });
  }

  handleCommentSubmit(comment) {
    let comments = this.state.data;
    comments.push(comment);
    this.setState({data: comments});
  }

  render() {
    return (
      <div className="m-index">
        <div>
          <h1>评论</h1>
        </div>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    )
  }
}

export { CommentBox as default };
