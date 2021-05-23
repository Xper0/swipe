import React, {useEffect, useState} from 'react';
import "./Clock.scss";

const Clock = () => {
    const [showTime, setShowTime] = useState("")
    useEffect(() => {
        setInterval(updateTime, 1000)
    },[showTime])
    function updateTime(){
        const time = new Date().toLocaleTimeString()
        setShowTime(time)
    }
    return (
            <div
                className="Swiper-slide">
                <span className="Swiper-slide__clock"> {showTime}</span>
            </div>
    );
};

export default Clock;