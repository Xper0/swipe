import React, {useEffect, useState} from 'react';
import "./Textarea.scss"

const TextArea = () => {
    //массив задач
    const [showMessage, setShowMessage] = useState([]);
    //инициализация текст
    const [userInput, setUserInput] = useState("")

    const sendMessage = (e, userInput) => {
        e.preventDefault()
        if (userInput){
            setShowMessage([...showMessage, userInput])
        }
       setUserInput("")
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollHandller)
        return () =>  {
            document.removeEventListener("scroll", scrollHandller)
        }

    }, [])
    function scrollHandller(e){
        console.log("scroll")
        console.log(e.target.documentElement.scrollHeight)
        console.log(e.target.documentElement.scrollTop)
        console.log(window.innerHeight)

    }

    return (
        <div className="Swiper-slide">
            <div className="Swiper-slide__control">
                 <textarea
                     className="swiper-slide__input"
                     placeholder="Введите текст"
                     value={userInput}
                     onChange={(e) => setUserInput(e.target.value)}/>
                {/*получение данных из inputa*/}

                {/*передача сообщения кнопкой*/}
                <button
                    className="swiper-slide__btn"
                    onClick={(event) => sendMessage(event , userInput)}>Send
                </button>
            </div>
            {/*Создание формы*/}
            <div className="Swiper-slide__desc">
                {/*Создание списка*/}
                {showMessage.map((item, index) => <div
                    className="Swiper__list"
                    key={index}>
                    {item}
                </div>)}
            </div>
        </div>
    );
};

export default TextArea;