<script lang="js">
  import BookCard from "../../../components/BookCard.svelte";
  import Mainprofile from "../../../components/Mainprofile.svelte";
  import Button from "../../../components/Button.svelte";
  import ClubCard from "../../../components/ClubCard.svelte";
  import { onMount } from "svelte";
  // @ts-ignore
  let user, friends = [], clubs = [], error = null;
  // @ts-ignore
  user = {
    id: 0,
    name: 'Zangar',
    booksread: 12,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    books: [],
    friends: [],
    clubs: []
  }
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

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/social/friends");
      if (!response.ok) {
          throw new Error("Failed to fetch friends");
      }
      friends = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
    try {
      const response = await fetch("http://localhost:8000/api/my-clubs");
      if (!response.ok) {
          throw new Error("Failed to fetch clubs");
      }
      clubs = await response.json();
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
        read={user.boooksread} 
        photo={user.photo} 
      />
    </div>

    <div class="button-container">
      <Button label="Books"/>
      <Button label="Friends"/>
      <Button label="Clubs"/>
    </div>
    <div class="gr-container">
      {#each user.books as book} 
        <BookCard 
          title={book.title} 
          author={book.author} 
          coverImage={book.coverImage} 
        />
      {/each}
    </div>

    <div class="gr-container">
      {#each friends as friend} 
        <Mainprofile 
          name={friend.name} 
          read={friend.read} 
          photo={friend.coverImage} 
        />
      {/each}
    </div>
    <div class="gr-container">
      {#each clubs as club} 
        <ClubCard 
          name={club.name} 
          membercount={club.member} 
          photo={club.photo} 
        />
      {/each}
    </div>
  </div>
  
  <style>
    .container{
      margin-left: 10%;
      margin-right: 10%;
      margin-top: 20px;
    }
    .button-container {
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
      
    }
    .gr-container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding: 16px;
    }
    .profile-container{
      display: flex;
      justify-content: center;
    }
  </style>