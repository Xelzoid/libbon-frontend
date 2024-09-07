<script>
	import ClubCard from "../../components/CardClub.svelte";
	import MiniprofilesForFriends from "../../components/MiniprofilesForFriends.svelte";
    import Search from "../../components/Search.svelte";
    import { onMount } from "svelte";

    // @ts-ignore
    // @ts-ignore
    let user = {}, friends = [], clubs = [], error = null;
    
    onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user/me");
      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }
      user = await response.json();
    } catch (err) {
      // @ts-ignore
      console.log(err.message);
    }
    try {
      const response = await fetch('http://localhost:8000/api/social/my-clubs');
      if (!response.ok) {
        throw new Error('Failed to fetch clubs');
      }
      const data = await response.json();
      clubs = data.clubs;
    } catch (err) {
      // @ts-ignore
      console.log(err.message);
    }

    try {
      const response = await fetch('http://localhost:8000/api/social/friends');
      if (!response.ok) {
        throw new Error('Failed to fetch clubs');
      }
      const data = await response.json();
      friends = data.friends;
    } catch (err) {
      // @ts-ignore
      console.log(err.message);
    }
  });
  // @ts-ignore
  clubs = [];
  friends = [{
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    name: 'Amir',
    read: "12",
  }];
</script>



<div class="container">
    <Search/>
    <h2 class="lab">Друзья</h2>
    <div class="friends_row">
        {#each friends as user} 
            <MiniprofilesForFriends 
                name={user.name} 
                read={user.read} 
                photo={user.photo} 
            />
        {/each}
    </div>
    <h2>Клубы</h2>
    <div class="friends_row">
        {#each clubs as club} 
            <ClubCard 
                name={club.name} 
                membercount={club.membercount} 
                photo={club.photo} 
            />
        {/each}
    </div>
</div>

<style>
    .container{
        max-width: 1000px;
        height: auto;
        margin-left: 15%;
        margin-top:2%;
    }
    .friends_row{
        display: flex;

    }
    .lab{
        margin-bottom: -20px;
    }
    

</style>