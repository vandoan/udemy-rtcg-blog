import React, { Component } from 'react';
import Posts from './../Posts/Posts';
import './Blog.css';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost'

class Blog extends Component {

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
                                to="/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post"}}
                                >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={ () => <h1>Home</h1>} ></Route> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />

                
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