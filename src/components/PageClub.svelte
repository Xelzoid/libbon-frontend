<script>
	import { FetchUser } from "$lib/utils";
	import Mainprofile from "./Mainprofile.svelte";

    export let name = "Name", description = 'Description', picture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s',
                owner = 'Owner', isPrivate = 'Unknown', users = [
    {photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    name: 'Amir',
    surname: 'Amirovich,' , 
    score: 34,},
    {photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    name: 'Amir',
    surname: 'Amirovich',
    score: 34,},
    {photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    name: 'Amir',
    surname: 'Amirovich', score: 34,}
    ];
    console.log(FetchUser(owner))
</script>

<div class="container">
    <img class="club_img" src="">
    <div class="content">
        <h1>{name}</h1>
        <p>{description}</p>
        <h3>{FetchUser(owner).name}</h3>
        <ul>
        <li>
            {#each users as user}
                <Mainprofile 
                    name={user.name + ' ' + user.surname}
                    read={user.score}
                    photo={user.profile_picture}
                />
            {/each}
        </li>
        </ul>

    </div>
</div>

<style>
    .container{
        display: flex;
        
    }
    .content{
        margin-left: 15%;
    }
    .club_img {
        height: 400px;
        width: 300px;
        object-fit: cover;
    }
    h1{
        font-weight: bold;
        font-size: 50px;
    }
    h3{
        font-size: 30px;
    }
</style>