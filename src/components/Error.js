import React from 'react';

function Error(props) {
    return (
        <div className="error">
            <h1 className="error-status">{props.status}</h1>
            <div className="error-content">
                <p>
                    {props.reason}
                </p>
            </div>
        </div>
    );
}

export default Error;