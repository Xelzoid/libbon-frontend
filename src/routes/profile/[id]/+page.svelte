<script>
  import { onMount } from "svelte";
  import {FetchMe, FetchClubs, FetchFriends} from '$lib/utils'
  import { goto } from "$app/navigation";

  import BookCard from "../../../components/CardBook.svelte";
  import Mainprofile from "../../../components/Mainprofile.svelte";
  import Button from "../../../components/Button.svelte";
  import ClubCard from "../../../components/CardClub.svelte";
  // @ts-ignore
  let user, friends = [], clubs = [], error = null, loading = true;

  onMount(async () => {
    const token = localStorage.getItem('token'); // Retrieve the saved token
    if (!token) {
      console.error('No token found. Please login first.');
      goto("/login");
      return;
    }
    user = FetchMe();
    // @ts-ignore
    clubs = FetchClubs();
    // @ts-ignore
    friends = FetchFriends();
    loading = false;
  });
</script> 
{#if loading}
  <p>loading...</p>
{:else if error}
<p>Error: check console</p>
{:else}
  <div class="container">
    <div class="profile-container">
      <Mainprofile 
        name={user.name}
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
  {/if}
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