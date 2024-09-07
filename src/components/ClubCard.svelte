<script>
  export let name = '';
  export let membercount = '';
  export let photo = '';
</script>

<div class="card_container">
  <img src={photo} class="cardimage" alt="Cover Image">
  <div>
      <h3 class="name">{name}</h3>
      <p class="membercount">{membercount}</p>
  </div>
</div>

<style>
  .card_container {
      width: 200px;
      height: 300px;
      background-color: antiquewhite;
      margin-right: 20px;
      box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      overflow: hidden; /* Added to ensure rounded corners work with the image */
  }
  .cardimage {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 15px 15px 0 0;
  }
  .name {
      font-size: 20px;
      font-weight: bold;
  }
  .membercount {
      font-size: 16px;
      color: gray;
  }
</style>
