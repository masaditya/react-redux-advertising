import React from 'react'
import PropTypes from 'prop-types'

const HeaderComponent = props => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}

HeaderComponent.propTypes = {
    name: PropTypes.string
}

export default HeaderComponent
