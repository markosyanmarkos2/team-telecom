import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // Քո գլխավոր App բաղադրիչը
import './index.css'        // Քո գլխավոր CSS-ը
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

createRoot(document.getElementById('swp')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)