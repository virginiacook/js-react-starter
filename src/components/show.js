import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchPosts, fetchPost, updatePost, deletePost } from '../actions/index';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', content: '', tags: '', isEditing: false};
    this.onDeletePost = this.onDeletePost.bind(this);
    this.onUpdatePost = this.onUpdatePost.bind(this);
    this.onIsEditing = this.onIsEditing.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
  }
  componentWillMount() {
    this.props.fetchPosts();
    this.props.fetchPost(this.props.params.id);
    console.log(this.props.posts);
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
  onDeletePost(){
    this.props.deletePost(this.props.params.id);
  }
  onUpdatePost(){
    console.log('update');
    if(this.state.title===''||this.state.content===''||this.state.tags===''){
      this.setState({ error: 'Please fill in all fields.' });
    }
    else{
      this.setState({ error: '' });
      const post = {
        id: this.props.params.id,
        title: this.state.title,
        content: this.state.content,
        tags: this.state.tags
      };
      this.props.updatePost(post);
      this.setState({isEditing: false});
      this.props.fetchPost(this.props.params.id);
    }
  }
  onIsEditing(){
    if(this.state.isEditing == true){
      this.setState({isEditing: false});
    }
    else{
      this.setState({isEditing: true});
    }
  }
  renderPost(){
    if(this.state.isEditing){
      return <div style={{fontFamily: 'Montserrat', margin: 10}}><div><div>{"Title"}</div><Textarea onChange={this.onTitleChange} id="title">{this.props.post.title}</Textarea></div>
        <div><div>{"Content"}</div><Textarea onChange={this.onContentChange} id="content">{this.props.post.content}</Textarea></div>
        <div><div>{"Tags"}</div><Textarea onChange={this.onTagsChange} id="tags">{this.props.post.tags}</Textarea>
        </div>
        <div style={{color:'red'}}>
          {this.state.error}
        </div>
        <div style={{marginTop:20}}><i className="fa fa-check fa-2x" onClick={this.onUpdatePost} style={{color: 'black', marginRight: 30}} /><i className="fa fa-times fa-2x" style={{color: 'black', marginRight: 10}} onClick={this.onIsEditing} /></div>
        </div>;
    }
    else{
      this.state.title = this.props.post.title;
      this.state.tags = this.props.post.tags;
      this.state.content = this.props.post.content;
      return <div style={{fontFamily: 'Montserrat', margin: 10}}><div style={{fontSize: 20, fontWeight:'bold', marginBottom:5}}>{this.props.post.title}</div><div style={{color: 'black', marginBottom: 10}}>{this.props.post.content}</div><div>Tags: {this.props.post.tags}</div>
        <div style={{marginTop:20}}><i className="fa fa-pencil-square-o fa-2x" onClick={this.onIsEditing} style={{color: 'black', marginRight: 30}} /><i className="fa fa-trash fa-2x" style={{color: 'black', marginRight: 10}} onClick={this.onDeletePost} /></div></div>;
    }
  }
  render() {
    return (
      <div>
        {this.renderPost()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, { fetchPosts,fetchPost, deletePost, updatePost })(Show);
