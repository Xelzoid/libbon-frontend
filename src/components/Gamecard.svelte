<script>
    export let title = '';
    export let author = '';
    export let coverImage = '';
  </script>
  
  <a class="card_container1" href="/game/1">
    <img src="{coverImage}" class="card_image" alt="Cover Image">
    <div>
      <h3 class="title1">{title}</h3>
      <p class="author1">{author}</p>
    </div>
  </a>
  <style>
    .card_container1 {
      cursor: pointer;
      width: 400px;
      height: 500px;
      background-color: #DBD3C6;
      margin-right: 35px;
      box-shadow: 15px 15px 20px 1px rgba(0, 0, 0, 0.35);
      border-radius: 15px;
      text-decoration: none;
      color: black;
      transition: 0.2s;
      display: flex;
      flex-direction: column;
      text-align: center;
      border: 1px solid black;
    }
    .title1 {
  font-size: 35px; /* Увеличиваем размер текста заголовка */
  font-weight: bold;
}

.author1 {
  font-size: 30px; /* Увеличиваем размер текста автора */
}
  
    .card_container1:hover {
      transform: translateY(-8px);
      background-color: #D0C0A7;
    }
  
    .card_image {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 15px 15px 0 0;
    }
  </style>
  