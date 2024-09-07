<script>
  import { onMount } from "svelte";
  let user = {
    friend_id: 0
  }, error = null;
  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/me");
      if (!response.ok) {
          throw new Error("Failed to fetch user info");
      }
      user = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });
  let profileUrl = `/profile/${user.friend_id}`;
</script>

<div class="header">
  <nav>
    <img src="logobl.png">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href={profileUrl}>Profile</a></li>
      <li><a href="/social">Social</a></li>
      <li><a href="/catalog/1">Books</a></li>
      <li><a href="/games">Games</a></li>
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
    background-color: #DBD3C6;
    margin: 0;
    padding: 0;
  }
  nav {
    display: flex;
    width: 1100px;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }

  nav h1 {
    text-align: center;
    margin: 0;
  }

  ul {
    display: flex;
    list-style-type: none;
    
  }

  li {
    margin: 0 16px; 
  }

  li a {
    display: block;
    text-decoration: none;
    padding: 15px 20px;
    text-align: center;
    background-color: #DBD3C6;
    color: black;
    border-radius: 15px;
    transition: background-color 0.3s;
  }

  li a:hover {
    background-color: #D0C0A7; /* Цвет фона при наведении */
  }
  
</style>

<slot></slot>


