<script>
  export let title = '';
  export let author = '';
  export let coverImage = '';
</script>

<div class="card_container">
  <img src="{coverImage}" class="card_image" alt="Cover_Image">
  <div>
    <h2 class="title">{title}</h2>
    <p class="author">{author}</p>
  </div>
</div>


<style>
  .card_container{
    width: 200px;
    height: 300px;

  }
  .card_image{
    width: 150px;
    height: 150px;
    
  }
</style>
