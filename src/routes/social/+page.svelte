<script>
	import ClubCard from "../../components/ClubCard.svelte";
	import MiniprofilesForFriends from "../../components/MiniprofilesForFriends.svelte";
    import Search from "../../components/Search.svelte";
    import { onMount } from "svelte";


    
    onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/me");
      if (!response.ok) {
          throw new Error("Failed to fetch user info");
      }
      users = await response.json();
      clubs = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });

  let clubs = [{
    name:"Amir's Club",membercount: "12", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s"
  },
{name:"Amir's Club",membercount: "12", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s"    
},
]
  let users = [{
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    name: 'Amir',
    read: "12",
    },{
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    name: 'Zangar',
    read: "12",
    },{
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    name: 'Arsen',
    read: "12",
    }
    ]
</script>



<div class="container">
    <Search/>
    <h2 class="lab">Друзья</h2>
    <div class="friends_row">
        {#each users as user} 
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