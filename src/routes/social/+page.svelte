<script>
	import { FetchClubs, FetchFriends, FetchMe } from "$lib/utils";
	import ClubCard from "../../components/CardClub.svelte";
	import MiniprofilesForFriends from "../../components/MiniprofilesForFriends.svelte";
    import Footer from "../../components/Footer.svelte";
    import Search from "../../components/Search.svelte";
    import { onMount } from "svelte";

  // @ts-ignore
  let user, friends = [], clubs = [], error = null;
  
//   onMount(async () => {
//     user = FetchMe();
//     clubs = FetchClubs();
//     friends = FetchFriends();
//   });
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
<Footer/>

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