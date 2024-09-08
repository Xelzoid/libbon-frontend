<script>
  import { onMount } from "svelte";
  import Bookprivate from "../../components/PageBook.svelte";
  import Footer from "../../components/Footer.svelte";
  
  let error = null, book, showCommentForm = false, newComment = '', comments = [], isBookInLibrary = false;
  let participants = [
    { name: "Participant 1", score: 85, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s", href: "" },
    { name: "Participant 2", score: 92, photo: "", href: "" },
    { name: "Participant 3", score: 76, photo: "", href: "" },
    { name: "Participant 4", score: 88, photo: "", href: "" },
    { name: "Participant 5", score: 95, photo: "", href: "" }
  ];

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/news"); // Изменить API на правильное
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      book = await response.json();
    } catch (err) {
      error = err.message;
    }
  });

  book = { id: '0', title: "Book's Title", author: "Author", description: "Description", photo: "" };
</script>

<div class="container">
  <div class="book-container">
    <Bookprivate
      name={book.title}
      author={book.author}
      description={book.description}
      photo={book.photo}
    />

    <div class="participant-menu">
      <div class="participant-header">
        <h2>Participants</h2>
      </div>
      <div class="participants-list">
        {#each participants as participant}
          <a href={participant.link} class="participant-card">
            <img class="participant-photo" src={participant.photo} alt={participant.name} />
            <div class="participant-info">
              <h3>{participant.name}</h3>
              <p>Score: {participant.score}</p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<Footer/>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
  }

  .book-container {
    width: 60%;
  }

  .participant-menu {
    width: 100%;
    margin-top: 20px;
  }

  .participant-header {
    background-color:  #ebe3d5;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }

  .participants-list {
    display: flex;
    flex-direction: column; /* Вертикальное расположение */
    align-items: left;
    margin-top: 10px;
  }

  .participant-card {
    display: flex;
    align-items: center;
    background-color: #ebe3d5;
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-decoration: none;
    color: black;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .participant-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .participant-photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }

  .participant-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .participant-info h3 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }

  .participant-info p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }

  p {
    margin-top: 10px;
    text-align: center;
  }
</style>
