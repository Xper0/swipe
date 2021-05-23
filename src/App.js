
import './App.css';
import TextArea from "./components/TextArea";
import Clock from "./components/Clock";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import {useEffect} from "react";


function App() {
    const slides = [<TextArea />, <Clock />]

  return (
    <div className="App">
      <Swiper >
         {slides.map((item,index) =>
             <SwiperSlide
                 key={index}>{item}
             </SwiperSlide>)}
      </Swiper>
    </div>
  );
}

export default App;
