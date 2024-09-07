

<script>
  
  export let title = '';
  export let author = '';
  export let coverImage = '';


</script>

<a class="card_container" href="/books/0">
  <img src="{coverImage}" class="card_image" alt="Cover_Image">
  <div>
    <h3 class="title">{title}</h3>
    <p class="author">{author}</p>
  </div>
</a>


<style>
  .card_container{
    cursor: pointer;
    width: 200px;
    height: 300px;
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
  .card_container:hover{
    transform: translatey(-8px);
    background-color: #D0C0A7;

  }
  .card_image{
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
</style>
