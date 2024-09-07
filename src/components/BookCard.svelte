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
    background-color: antiquewhite;
    margin-right: 20px;
    box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    text-decoration: none;
    color: black;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .card_container:hover{
    transform: translatey(-14px);
  }
  .card_image{
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
</style>