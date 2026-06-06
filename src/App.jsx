import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function App() {
  return (
    // Քո հիմնական wrapper-ը, որտեղ դրել ես swp class-ը
    <div className="swp" style={{ width: '85%'}}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Իմ Swiper Սլայդերը</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div style={{ background: '#3498db', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', borderRadius: '8px' }}>
            Սլայդ 1
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div style={{ background: '#2ecc71', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', borderRadius: '8px' }}>
            Սլայդ 2
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div style={{ background: '#e74c3c', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', borderRadius: '8px' }}>
            Սլայդ 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;