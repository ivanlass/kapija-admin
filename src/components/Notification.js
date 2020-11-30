import React, { useEffect } from 'react';
import '../App.css';

function Notification(props) {

    useEffect(() => {
        setTimeout(() => {
            props.setIsVisible(false)
        }, 3000);
    }, [])

    return (
        <div className="notification">
            <p>Done</p>
        </div>
    );
}

export default Notification;
