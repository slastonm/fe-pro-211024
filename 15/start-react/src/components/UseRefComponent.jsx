import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import reactLogo from '../assets/react.svg'
function UseRefComponent(props) {
    let inputEl = useRef(null)
    let raiting = [true, true, true, false]
    function changeStyel(){
        console.log(inputEl);
        if(inputEl.current){
            inputEl.current.style.backgroundColor ='orange';
            inputEl.current.style.color ='blue';
            inputEl.current.style.padding = '50px';
        }
    }
    return (
        <div>
            <input type="text" ref={inputEl} />
            <button className="btn" onClick={changeStyel}>
                {/* {
                    raiting.map
                } */}
                <FontAwesomeIcon icon="fa-regular fa-star" />
                Change input 
                <FontAwesomeIcon icon="fa-solid fa-star" />
                <span>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </span>
            </button>
            <div>
            <Swiper
                slidesPerView={5}
                spaceBetween={50}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>
                    Slide 2
                    <img src={reactLogo} alt="logo" />
                </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7
                <img src={reactLogo} alt="logo" />

                </SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
}

export default UseRefComponent;