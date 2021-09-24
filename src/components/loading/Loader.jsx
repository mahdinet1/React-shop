import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
    return (
        <div style={{position:'absolute',top:'50%'}}>
            <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
