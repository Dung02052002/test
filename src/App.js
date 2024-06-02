import React, { useRef, useState } from 'react';
import imageurl from './img/test.png';
import './Css/App.css';;

function App() {
  const [isZoomed, setIsZoomed]= useState(false);
  const iframeRef = useRef(null);
  const overlayImageRef  = useRef(null);

  const handleZoomChange = (e) =>{
    const zoomlevel = parseFloat(e.target.value);
    setIsZoomed(zoomlevel);
    if(iframeRef.current) {
      iframeRef.current.style.opacity = `${1- zoomlevel}`;
 
   }
   if(overlayImageRef.current){
    overlayImageRef.current.style.opacity =`${zoomlevel}`;
   }
}
  const imageUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19490.361088447553!2d105.8067477718341!3d21.141142502311244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313501b2b5392b1f%3A0x49b37993f5e98e2!2zVHLGsOG7nW5nIFRIUFQgVsOibiBO4buZaQ!5e0!3m2!1svi!2s!4v1717317915934!5m2!1svi!2s';
  return (
    <div className="map-container container">
 
    <iframe
      ref={iframeRef}
      src= {imageUrl}
      style={{ width: '60%', height: '500px', opacity: isZoomed ? '0.3' : '1', transition: 'opacity 0.3s ease' }}
      allowFullScreen
      aria-hidden="false"
      tabIndex="0"
    ></iframe>

    <img
      className='imageurl'
      ref={overlayImageRef}
      src={imageurl}
      alt="Overlay Image"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '60%',
        height: '500px',
        zIndex: 1,
        opacity: isZoomed ? '1' : '0',
        transition: 'opacity 0.3s ease'
      }}
    />


   <div className='toolbar'>
      <input
      type='range'
      min="0"
      max="1"
      step="0.01"
      value={isZoomed}
      onChange={handleZoomChange}
       />
   </div>

  </div>
  );
}

export default App;