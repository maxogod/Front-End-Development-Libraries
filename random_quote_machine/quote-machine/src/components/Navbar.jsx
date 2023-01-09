import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="https://github.com/maxogod" target='_blank'>GitHub</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;