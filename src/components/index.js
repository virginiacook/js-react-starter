import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchPosts, createPost } from '../actions/index';
import { connect } from 'react-redux';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onAdd = this.onAdd.bind(this);
  }
  componentWillMount() {
    this.props.fetchPosts();
    console.log(this.props.posts);
  }
  onPostClick(id) {
    this.props.fetchPost(id);
  }
  renderPosts() {
    return this.props.posts.map((post) => {
      return <div style={{marginBottom: 30}}><Link className="postContainer"to={`/posts/${post.id}`} key={post.id} ><div className="linkText" style={{fontFamily: 'Montserrat', fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>{post.title}</div></Link><div style={{fontFamily: 'Montserrat', fontSize: 15}}>Tags: {post.tags}</div></div>;
    });
  }
  render() {
    return (
      <div style={{margin: 10}}>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts.all, post: state.posts.post };
};

export default connect(mapStateToProps, { fetchPosts })(Index);
