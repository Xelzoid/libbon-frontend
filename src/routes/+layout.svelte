<script>
	import { FetchMe } from "$lib/utils";
  import { onMount } from "svelte";
  let user, error = null;
  // onMount(async () => {
  //   user = await FetchMe();
  // });
  // let profileUrl = `/profile/${user.id}`;
</script>



<div class="header">
  <nav>
    <a href="/"><img  src="logobl.png"></a>
    <ul>
      <li><a href="/">Home</a></li>
      <!-- <li><a href={profileUrl}>Profile</a></li> -->
      <li><a href="/social">Social</a></li>
      <li><a href="/catalog/1">Books</a></li>
      <li><a href="/games">Games</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
</div>


<style>
  img{
    width: 240px;
    height: 80px;
    object-fit: fill;
  }
  .header{
    width: 100%;
    background-color: #ebe3d5;
    margin: 0;
    padding: 0;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.12);
  }
  nav {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0px 250px 0 250px;
  }

  nav h1 {
    margin: 0;
    width: 50%;
  }

  nav ul {
    box-sizing: border-box;
    display: flex;
    list-style-type: none;
    flex-direction: row;
    width: 50%;

  }

  li a {
    box-sizing: border-box;
    display: block;
    text-decoration: none;
    margin: 0px 5px;
    padding: 7px 20px;
    text-align: center;
    color: black;
    border-radius: 10px;
    transition: background-color 0.3s;

  }
  li a:hover {
    background-color: #D0C0A7; 
  }
  
</style>

<slot></slot>


