import React, { useRef, useState, useEffect } from 'react';

import HomePage from '../home_page/HomePage';

const MyParallaxComponent: React.FC = () => {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const itemRef = useRef<HTMLDivElement | null>(null);

   const [position, setPosition] = useState({ x: 0, y: 0 });

   const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      const item = itemRef.current;

      if (container && item) {
         const containerRect = container.getBoundingClientRect();
         //const itemRect = item.getBoundingClientRect();

         const offsetX = (e.clientX - containerRect.left) / containerRect.width;
         const offsetY = (e.clientY - containerRect.top) / containerRect.height;

         const itemX = (offsetX - 0.5) * 40; // Adjust the factor for the parallax effect
         const itemY = (offsetY - 0.5) * 40;

         setPosition({ x: itemX, y: itemY });
      }
   };

   useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
         document.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100vh' }}>
         <div
            ref={itemRef}
            style={{
               position: 'absolute',
               top: '50%',
               left: '50%',
               transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
            }}
         >
            <HomePage />
         </div>
      </div>
   );
};

export default MyParallaxComponent;