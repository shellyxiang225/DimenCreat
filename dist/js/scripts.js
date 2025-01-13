/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const images = document.querySelectorAll('.scroll-container img');
    const totalImages = images.length;
    let currentIndex = 0;
  
    function autoScroll() {
      currentIndex++;
      if (currentIndex >= totalImages) {
        currentIndex = 0; // 回到第一张
      }
      scrollContainer.scrollTo({
        left: scrollContainer.offsetWidth * currentIndex, // 滚动到下一张图片
        behavior: 'smooth',
      });
    }
  
    // 自动滚动设置为 5 秒
    setInterval(autoScroll, 5000);
  });
