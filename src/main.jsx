import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // Քո գլխավոր App բաղադրիչը
import './index.css'        // Քո գլխավոր CSS-ը

// Swiper-ի հիմնական սթայլերը ներմուծում ենք այստեղ
import 'swiper/css';
import 'swiper/css/navigation'; // Եթե սլաքներ ես օգտագործելու
import 'swiper/css/pagination'; // Եթե կետիկներ ես օգտագործելու

createRoot(document.getElementById('swp')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)