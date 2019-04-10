import React, { Component } from 'react';

class Sidebar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <div id="sidebar">
                <div className="inner">

                    <section id="search" className="alt">
                        <form method="post" action="#">
                            <input type="text" name="query" id="query" placeholder="Search" />
                        </form>
                    </section>

                    <nav id="menu">
                        <header className="major">
                            <h2>My feeds</h2>
                        </header>
                        <ul>
                            <li><a href="index.html">Homepage</a></li>
                            <li><a href="generic.html">Generic</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="#">Etiam Dolore</a></li>
                            <li><a href="#">Adipiscing</a></li>
                            <li><a href="#">Sapien Mauris</a></li>
                            <li><a href="#">Amet Lacinia</a></li>
                        </ul>
                    </nav>
                    
                </div>
            </div>    
        );
    }
}
 
export default Sidebar;