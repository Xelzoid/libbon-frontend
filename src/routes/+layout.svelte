<script>
  import { onMount } from "svelte";
  let user, error = null;
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
  let profileUrl = "/profile/${user.friend_id}";
</script>

<nav>
  <h1>LIBBON</h1>
</nav>
<li>
  <a href="/">home</a>
	<a href={profileUrl}>profile</a>
	<a href="/social">social</a>
  <a href="/books">books</a>
  <a href="/games">games</a>
</li>


<style>
  li {
    list-style-type: none;
    width: 7%;
    height: 100%;
    min-width: 100px;
    padding-right: 10px;
    border-right: 1px solid black;
    position: fixed;
  }
  li a {
    display: block;
    text-decoration: none;
    margin-top: 15px;
    padding: 35px 8px;
    text-align: center;
    background-color: #D9D9D9;
    color: black;
    border-radius: 15px;
  }
  nav {
    border-bottom: 1px solid black;
    width: 100%;
  }
  nav h1 {
    text-align: center;
    display: block;
  }


</style>
<slot></slot>


