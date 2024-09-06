<script>
  import BookCard from "../../components/BookCard.svelte";
  import Mainprofile from "../../components/Mainprofile.svelte";
  import Button from "../../components/Button.svelte";
  import { onMount } from "svelte";
  let books = [], user, error = null;
  import { onMount } from "svelte";

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/me");
      if (!response.ok) {
          throw new Error("Failed to fetch data");
      }
      user = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });
  </script>
  
  <div class="container">
    <div class="profile-container">
      <Mainprofile 
        name={user.name} 
        read={user.read} 
        photo={user.photo} 
      />
    </div>
  </div>
  
  <style>
    .container{
      margin-left: 10%;
      margin-right: 10%;
    }
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .profile-container{
      display: flex;
      justify-content: end;
    }
  </style>
  
  
  