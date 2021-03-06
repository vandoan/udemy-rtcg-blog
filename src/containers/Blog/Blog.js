import React, { Component } from 'react';
import Posts from './../Posts/Posts';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from './NewPost/NewPost'
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                activeClassName="activeNav"
                                exact 
                                activeStyle={{
                                    color: 'blueviolet',
                                    textDecoration: 'underline'
                                }}
                                to="/posts/">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post"}}
                                >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state ? <Route path='/new-post' exact component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                    {/* <Route path='/' component={Posts} /> */}

                </Switch>

                
                {/* <section>
                    <FullPost  id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}


export default Blog;