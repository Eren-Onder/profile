import React, { Component } from 'react'

import  './css/Main.css'

class Header extends Component {
    render() {
        return (
            <div id="home">   
                <h1 className="header-h1">Input Format</h1>
                <h3>First line contain <i><b>N.N</b></i> lines follow, each having a PAN nummer.</h3>
            </div>
        )
    }
}

export default Header