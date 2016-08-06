import React, { Component } from 'react';
import { Link } from 'react-router';
import Textarea from 'react-textarea-autosize';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';


class New extends Component {
  constructor(props) {
    super(props);
    // this.state = { notecount: 0, searchterm: '' };
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onAdd = this.onAdd.bind(this);
    this.state = { title:'',content:'',tags:'',error:''};
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onCreatePost = this.onCreatePost.bind(this);
  }
  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onContentChange(event) {
    this.setState({ content: event.target.value });
  }
  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }
  onCreatePost(){
    if(this.state.title===''||this.state.content===''||this.state.tags===''){
      this.setState({ error: 'Please fill in all fields.' });
    }
    else{
      this.setState({ error: '' });
      const post = {
        title: this.state.title,
        content: this.state.content,
        tags: this.state.tags
      };
      this.props.createPost(post);
    }
  }
  render() {
    return (
      <div style={{fontFamily: 'Montserrat', margin: 10}}>
        <div>
          <div style={{marginBottom: 5}}>{"Title"}</div>
          <Textarea onChange={this.onTitleChange} id="title">{this.state.title}</Textarea>
        </div>
        <div>
          <div style={{marginBottom: 5}}>{"Content"}</div>
          <Textarea onChange={this.onContentChange} id="content">{this.state.content}</Textarea>
        </div>
        <div>
          <div style={{marginBottom: 5}}>{"Tags"}</div>
          <Textarea onChange={this.onTagsChange} id="tags">{this.state.tags}</Textarea>
        </div>
        <div style={{color: 'red', marginTop: 5}}>
          {this.state.error}
        </div>
        <div>
          <button style={{ fontFamily: 'Montserrat', fontSize: 15, borderRadius: 10, padding: 10, marginTop: 20, color: 'white', backgroundColor: 'black' }} onClick={this.onCreatePost}>Create post!</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);
export default connect(mapStateToProps, { createPost })(New);
