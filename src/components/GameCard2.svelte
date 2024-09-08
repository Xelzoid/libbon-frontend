<script>
    export let title = '';
    export let author = '';
    export let coverImage = '';
  </script>
  
  <a class="card_container2" href="/wordle">
    <img src="{coverImage}" class="card_image" alt="Cover Image">
    <div>
      <h3 class="title2" >{title}</h3>
      <p class="author2">{author}</p>
    </div>
  </a>
  
  <style>
    .title2 {
  font-size: 35px; 
  font-weight: bold;
}
.author2 {
  font-size: 30px;
}
    .card_container2 {
      cursor: pointer;
      width: 400px;
      height: 500px;
      background-color: #DBD3C6;
      margin-right: 35px;
      box-shadow: 10px 10px 15px 1px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      text-decoration: none;
      color: black;
      transition: 0.2s;
      display: flex;
      flex-direction: column;
      text-align: center;
      border: 1px solid black;
    }
  
    .card_container2:hover {
      transform: translateY(-5px);
      background-color:  #D0C0A7;
    }
  
    .card_image {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
  </style>
  