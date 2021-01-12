
import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import {Route} from 'react-router-dom';
import './Posts.css';
import FullPost from '../FullPost/FullPost';
class Posts extends Component {
    state = {
        posts: []


    }
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'fatih'
                    }
                })
                this.setState({ posts: updatedPosts })
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        //this.props.history.push({pathname: '/posts/' + id})
        this.props.history.push('/posts/' + id)
       
    }
    render() {
        const posts = this.state.posts.map(post => {
            return (
                // <Link  to={'/' + post.id}>
                <Post
                    author={post.author}
                    key={post.id}
                    title={post.title}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
                // </Link>
            )
        })
        return (
            <div>
                <Route path={this.props.match.url +  '/:id'} exact component={FullPost} />
                <section className="Posts">
                    {posts}
                </section>
            </div>


        )
    }
}
export default Posts;