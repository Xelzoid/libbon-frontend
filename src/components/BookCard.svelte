

<script>
  export let title = '';
  export let author = '';
  export let coverImage = '';
</script>

<div class="card_container">
  <img src="{coverImage}" class="card_image" alt="Cover_Image">
  <div>
    <h3 class="title">{title}</h3>
    <p class="author">{author}</p>
  </div>
</div>


<style>
  .card_container{
    width: 200px;
    height: 300px;
    background-color: antiquewhite;
    margin-right: 20px;
    box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);
    border-radius: 15px;

  }
  .card_image{
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
</style>
