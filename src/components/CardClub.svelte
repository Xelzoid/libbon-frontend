<script>
    export let name = '';
    export let membercount = '';
    export let photo = '';
  </script>
  
  <div class="card_container">
    <img src="{photo}" class="card_image" alt="Cover_Image">
    <div class="content">
      <h3 class="name">{name}</h3>
      <p class="membercount">{membercount}</p>
  </div>
</div>

<style>
  .card_container {
      width: 200px;
      height: 300px;
      background-color:#DBD3C6;
      margin-right: 35px;
      box-shadow: 15px 15px 20px 1px rgba(0, 0, 0, 0.35);
      border-radius: 15px ;
      transition: 0.2s;
  
    }
    .card_container:hover{
      transform: translateY(-8px);
      background-color: #D0C0A7;
    }
    .content{
      text-align: center;
      
    }
    .card_image{
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 15px 15px 0 0;
    }
  </style>
  