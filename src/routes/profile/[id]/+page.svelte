<script>
  import { onMount } from "svelte";
  import {FetchMe, FetchClubs, FetchFriends, FetchUser} from '$lib/utils'
  import { goto } from "$app/navigation";

  import BookCard from "../../../components/CardBook.svelte";
  import Mainprofile from "../../../components/Mainprofile.svelte";
  import Button from "../../../components/Button.svelte";
  import ClubCard from "../../../components/CardClub.svelte";
  import Footer from "../../../components/Footer.svelte";
  // @ts-ignore
  let user, friends = [], clubs = [], error = null, loading = true;
  let invations = [];
  import { page } from '$app/stores';
  $: id = $page.params.id;
  onMount(async () => {
    const token = localStorage.getItem('token'); // Retrieve the saved token
    user = FetchUser(id, token);
    loading = false;
    if (user.invations != null) {
      invations = user.invations.split('.').map(id => parseInt(id, 10));
    }
  });
</script> 
{#if loading}
  <p>loading...</p>
{:else}
  <div class="container">
    <div class="profile-container">
      <Mainprofile 
        name={user.name}
        photo={' '} 
      />
    </div>

    <div class="button-container">
      <Button label="Books"/>
      <Button label="Friends"/>
      <Button label="Clubs"/>
    </div>
    <div class="gr-container">
      <!-- {#each user.books as book} 
        <BookCard 
          title={book.title} 
          author={book.author} 
          coverImage={book.coverImage} 
        />
      {/each} -->
    </div>

    <div class="gr-container">
      <!-- {#each user.friend_ids as friend} 
        <Mainprofile 
          name={FetchUser(friend).name} 
          read={FetchUser(friend).read} 
          photo={FetchUser(friend).coverImage} 
        />
      {/each} -->
    </div>
    <div class="gr-container">
      <!-- {#each user.clubs as club}
        <ClubCard 
          name={club.name} 
          membercount={club.member} 
          photo={club.photo} 
        />
      {/each} -->
    </div>
  </div>
  {/if}
<Footer/>

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