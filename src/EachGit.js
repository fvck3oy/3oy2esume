import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Col } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'

class EachGit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: ''
        }

    }

    render() {
        const { name, language, link } = this.props
        if (language == 'JavaScript') { this.state.check = 'fab fa-js-square fa-2x' }
        else if (language == 'Java') { this.state.check = 'fab fa-java fa-2x' }
        else if (language == 'HTML') { this.state.check = 'fab fa-html5 fa-2x' }
        else if (language == 'TypeScript') { this.state.check = 'fab fa-js-square fa-2x' }
        else if (language == 'C') { this.state.check = 'fab fa-cuttlefisgh fa-2x' }
        else { this.state.check = 'fas fa-code-branch fa-2x' }
        console.log('check : ', this.state.check);

        return (

            <Col md={2}>
                <a href={link} className="mt-2 mb-2">
                    <div className="outline-effect  e-git mt-2 mb-2" >
                        <i className={this.state.check}>&nbsp;</i>
                        {name}
                    </div>
                </a>
            </Col>

        )
    }
}

export default EachGit
