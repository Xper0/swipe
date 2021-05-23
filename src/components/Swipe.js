import React, {useState} from 'react';
import "./Swipe.scss"

const Swipe = ({ children }) => {
    let [x , setX] = useState(null)
    let [y , setY] = useState(null)
    let [trasform, setTransform] = useState(0)

    //console.log(children)
    function moveMouse(e){
        const [X, Y] = [e.targetTouches[0].clientX, e.targetTouches[0].clientY]
        setX(X)
        setY(Y)
    }
    function changeSwipe(e){
        let [x1, y1] = [e.targetTouches[0].clientX, e.targetTouches[0].clientY]
        //console.log(x1,y1, "ksdf")
        let xDif = x1 - x;
        let yDif = y1 - y;
        if (Math.abs(xDif) > Math.abs(yDif)){
            //r-1
             if ( xDif > 0 ) {
                 trasform === 600 * (children.length -1) ? setTransform(0) :  setTransform( trasform + 10)

             }
            else {
                trasform ===  0 ? setTransform(600 * (children.length - 1)) :  setTransform( trasform - 10)
             }
        }

    }
    console.log(trasform)
    return (
        <div className="swiper-container" >
            <div className="swiper-wrapper" onTouchStart={event => moveMouse(event)} style={{transform: `translate(${trasform}px)`}}>
                {children.map((item, index) =>
                    <div className="swiper-wrapper__slide" s
                         key={index}
                         onTouchMove={(event => changeSwipe(event))}
                    >
                        {item}
                    </div>)}

            </div>
        </div>
    );
};

export default Swipe;