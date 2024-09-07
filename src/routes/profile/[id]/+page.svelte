<script>
  // @ts-ignore
  import BookCard from "../../components/BookCard.svelte";
  // @ts-ignore
  import Mainprofile from "../../components/Mainprofile.svelte";
  // @ts-ignore
  import Button from "../../components/Button.svelte";
  // @ts-ignore
  import { onMount } from "svelte";
  // @ts-ignore
  let books = [], user, error = null;
  // @ts-ignore
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
  
  
  