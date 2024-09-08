<script>
    let slideIndex = 1;
    let autoSlideTimer;
    const slides = [
      {
        src: "https://white-rainbow.ru/upload/resize_cache/iblock/b26/7sf66d03tagu4tqpxywzr9e18325c05v/600_400_1/BSA_3747_Pano_copy.750.jpg",
        caption: "самая популярная книга",
        numbertext: "1 / 3",
      },
      {
        src: "https://white-rainbow.ru/upload/resize_cache/iblock/b26/7sf66d03tagu4tqpxywzr9e18325c05v/600_400_1/BSA_3747_Pano_copy.750.jpg",
        caption: "самый популярный клуб",
        numbertext: "2 / 3",
      },
      {
        src: "https://white-rainbow.ru/upload/resize_cache/iblock/b26/7sf66d03tagu4tqpxywzr9e18325c05v/600_400_1/BSA_3747_Pano_copy.750.jpg",
        caption: "самая популярная игра",
        numbertext: "3 / 3",
      }
    ];
  
    // Обработка кликов на кнопки "вперед" и "назад"
    function plusSlides(n) {
      slideIndex = (slideIndex + n - 1 + slides.length) % slides.length + 1;
      resetAutoSlide();
    }
  
    // Обработка кликов на точки
    function currentSlide(n) {
      slideIndex = n;
      resetAutoSlide();
    }
  
    // Автоматическая смена слайдов
    function autoSlide() {
      slideIndex = (slideIndex % slides.length) + 1;
    }
  
    function resetAutoSlide() {
      clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(autoSlide, 10000); // Смена каждые 10 секунд
    }
  
    // Запускаем автоматическую смену слайдов
    resetAutoSlide();
  </script>
  
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background-color: #f0f0f0;
    }
    .slideshow-container {
      max-width: 500px;
      position: relative;
      margin: auto;
      display: flex;
      align-items: center; 
    }
    .mySlides {
      display: none;
    }
    .activeSlide {
      display: block;
    }
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      user-select: none;
    }
    .next {
      right: 0;
    }
    .prev:hover, .next:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    .text {
      color: #000;
      font-size: 15px;
      padding: 8px 12px;
      position: absolute;
      bottom: 8px;
      width: 100%;
      text-align: center;
    }
    .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }
    .activeDot, .dot:hover {
      background-color: #717171;
    }
    .fade {
      animation-name: fade;
      animation-duration: 1.5s;
    }
    @keyframes fade {
      from { opacity: 0.4; }
      to { opacity: 1; }
    }
  </style>
  
  <div class="slideshow-container">
    {#each slides as slide, index}
      <div class="mySlides fade {index + 1 === slideIndex ? 'activeSlide' : ''}">
        <div class="numbertext">{slide.numbertext}</div>
        <img src={slide.src} alt={`Slide ${index + 1}`} style="width:100%">
        <div class="text">{slide.caption}</div>
      </div>
    {/each}
  
    <a class="prev" on:click={() => plusSlides(-1)}>&#10094;</a>
    <a class="next" on:click={() => plusSlides(1)}>&#10095;</a>
  </div>
  
  <div style="text-align:center">
    {#each slides as _, i}
      <span class="dot {i + 1 === slideIndex ? 'activeDot' : ''}" on:click={() => currentSlide(i + 1)}></span>
    {/each}
  </div>
  