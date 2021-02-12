import React, { Component,Suspense } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
//import NewPost from './NewPost/NewPost';
//import asyncComponent from '../../hoc/asyncComponent';

/* const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
}) */

const NewPosts = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
state={
    auth: true
}
    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact
                                to="/posts/"
                                activeClassName="activ"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <h1>Home</h1>}/>
                  <Route path="/" render={()=> <h1>Home</h1>}/> */}
                <Switch>
                    {this.state.auth?<Route path="/new-post" render={()=> (
                        <Suspense fallback={<div>loading.... </div>}>
                            <NewPosts/>
                        </Suspense>
                    )
                    } />:null}
                    <Route path="/posts/"  component={Posts} />
                    {/* <Route render={()=> <h1>not found</h1>}/> */} {/* we can use this way to redirect or render something end of the route path 
                    but we cant use this redirecting way with redirect component */}
                    <Redirect from="/" to="/posts"/>
                  {/*   <Route path="/"  component={Posts} /> */} {/* to redirect user to posts even if the user is in the root directory */}
                    

               
                </Switch>
            </div>
        );
    }
}

export default Blog;