<script>
  import BookCard from "../components/BookCard.svelte";
  import News from "../components/News.svelte";
  import Mainprofile from "../components/Mainprofile.svelte";
  import Button from "../components/Button.svelte";

    let books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "a",
    },
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "a",
    }
  ];

  let profiles = [
    {
      name: "Mukanov Amir",
      read: "12",
      photo: "",
    }
  ];

  let buttons = [
    {
      label: "click me",
    }
  ]
</script>

<div class="container">
  <News/>
  <div class="profile-container">
    {#each profiles as profile}
      <Mainprofile 
        name={profile.name} 
        read={profile.read} 
        photo={profile.photo} 
      />
    {/each}
  </div>  
  <div class="card-container">
    {#each books as book}
      <BookCard 
        title={book.title} 
        author={book.author} 
        coverImage={book.coverImage} 
      />
    {/each}
    {#each buttons as button}
      <Button 
        label={button.label} 
      />
    {/each}
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


