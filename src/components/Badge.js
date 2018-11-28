import React from 'react';
import './Badge.css';
// Create a Badge component which takes a number and displays that number
// in a circle. Bonus: have the circle change color based on the value of
// the number (e.g. red if it's < 50, green otherwise).
//
// Example (the badge is the part with the 88 or 888):
const Badge = (props) => {
    return (
        <section className="notifications">
            <span id="notice"> Notifications </span>
            <span className={"badge " + (props.count > 50 ? "orange" : "blue")}>{props.count}</span>
        </section>
    )
};

export default Badge;
