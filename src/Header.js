import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './Header.css'

export default withRouter(class Header extends Component {
    render() {
        return (
            <header>
            <div class='headerLink'>
            {
                this.props.location.pathname !== '/' &&
                <NavLink exact activeClassName="selected" to="/">
                    HomePage
                </NavLink>
            }
            </div>

            {
                this.props.location.pathname !== '/search' 
                    && <NavLink exact activeClassName="selected" to="/search">
                        Search Page
                    </NavLink>
            }
            <div class='moreLink'>
            {
               this.props.location.pathname === '/search' && <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">Want to learn more?</a>
            }
            </div>
            </header>
        )
    }
})
