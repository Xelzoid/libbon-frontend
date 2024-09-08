<script>
    let images = [
      "/path/to/image1.jpg",
      "/path/to/image2.jpg",
      "/path/to/image3.jpg"
    ];
  
    let currentIndex = 0;
  
    // Функция смены слайда каждые 10 секунд
    const changeSlide = () => {
      currentIndex = (currentIndex + 1) % images.length;
    };
  
    // Устанавливаем интервал на 10 секунд
    const interval = setInterval(changeSlide, 10000);
  
    // Очистка интервала при удалении компонента
    onDestroy(() => {
      clearInterval(interval);
    });
  
    function next() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    function prev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  </script>
  
  <style>
    .slideshow-container {
      position: relative;
      max-width: 100%;
      height: 400px;
    }
  
    .slide {
      display: none;
      width: 100%;
      height: 100%;
    }
  
    .active {
      display: block;
    }
  
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 16px;
      font-size: 18px;
      color: white;
      background-color: rgba(0,0,0,0.5);
    }
  
    .prev {
      left: 0;
    }
  
    .next {
      right: 0;
    }
  </style>
  
  <div class="slideshow-container">
    {#each images as image, i}
      <img src={image} alt={`Slide ${i+1}`} class="slide {currentIndex === i ? 'active' : ''}">
    {/each}
  
    <div class="prev" on:click={prev}>❮</div>
    <div class="next" on:click={next}>❯</div>
  </div>
  