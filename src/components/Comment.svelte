<script>
    export let text = ""; 
    import { onMount } from "svelte";
  // @ts-ignore
  let user, error = null;
  // @ts-ignore
  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user/me");
      if (!response.ok) {
          throw new Error("Failed to fetch user info");
      }
      user = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });
  user = { name:"User"};
</script>

<div class="container">
    <div class="text_container">
        <h3>{user.name}</h3>
        <p>{text}</p>
    </div>
</div>

<style>
    .container{
        margin-top: 1%;
        max-width: 600px;
        
    }
    .text_container{
        max-width: 600px;
        font-size: 15px;
        box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);
        height: auto;
        background-color: #ebe3d5;
        padding: 0px 5px 5px 5px;

    }
    h3{
        font-size: 18px;
    }
    p{
        margin-left: 10px;
    }
    
</style>