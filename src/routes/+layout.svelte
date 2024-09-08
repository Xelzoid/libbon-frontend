<script>
  import { onMount } from "svelte";
  let user = {
    friend_id: 0
  }, error = null;
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
    flex-direction: row-reverse;
    width: 50%;

  }

  li a {
    box-sizing: border-box;
    display: block;
    text-decoration: none;
    margin: 0px 5px;
    padding: 7px 20px;
    text-align: center;
    background-color: #DBD3C6;
    color: black;
    border-radius: 10px;
    transition: background-color 0.3s;

  }
  li a:hover {
    background-color: #D0C0A7; /* Цвет фона при наведении */
  }
  
</style>

<slot></slot>


