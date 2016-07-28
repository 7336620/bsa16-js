import React, { Component } from 'react'
import './pageContent.css'

class PageContent extends Component {
    render() {
        return (
            <div className='page-content'>{this.props.children}</div>
        )
    }
}

export default PageContent