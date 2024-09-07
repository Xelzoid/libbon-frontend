<script>
  import { onMount } from "svelte";
  import Bookprivate from "../../../components/Club.svelte";
  import Comment from "../../../components/Comment.svelte";

  // @ts-ignore
  let news = [];
  // @ts-ignore
  let error = null;
  let club;
  let showCommentForm = false;
  let newComment = '';
  let comments = []; 

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/news");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      club = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });

  club = {title:"Club name", author:"Author", description:"Description", photo:""};

  function addComment() {
    if (newComment.trim() === '') {
      return; 
    }
    comments = [...comments, { id: Date.now(), text: newComment }];
    newComment = ''; 
    showCommentForm = false; 
  }

  function joinClub() {
  }
</script>

<div class="container">
  <Bookprivate
    name={club.title}
    author={club.author}
    description={club.description}
    photo={club.photo}
  />
  <div class="description-container">
    <button on:click={joinClub} class="join-club-button">
      Зайти в клуб
    </button>
  </div>
  <button on:click={() => showCommentForm = !showCommentForm} class="comment-toggle-button">
    {showCommentForm ? 'Отмена' : 'Оставить Отзыв '}
  </button>
  {#if showCommentForm}
    <div class="comment-form">
      <textarea bind:value={newComment} placeholder="Write your review here..."></textarea>
      <button on:click={addComment} class="add-comment-button">Добавить отзыв</button>
    </div>
  {/if}
  {#each comments as { id, text }}
    <Comment text={text} />
  {/each}
</div>

<style>
  .container {
    margin-left: 20%;
    margin-top: 5%;
  }

  .description-container {
    margin-top: 20px;
  }

  .join-club-button {
    background-color: #17a2b8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: block;
  }

  .join-club-button:hover {
    background-color: #117a8b;
  }

  .comment-toggle-button, .add-comment-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
  }

  .comment-toggle-button {
    background-color: #007BFF;
    color: white;
  }

  .comment-toggle-button:hover {
    background-color: #0056b3;
  }

  .add-comment-button {
    background-color: #28a745;
    color: white;
  }

  .add-comment-button:hover {
    background-color: #218838;
  }

  .comment-form {
    margin-top: 20px;
  }

  .comment-form textarea {
    width: 100%;
    height: 100px;
  }

  .comment-form button {
    margin-top: 10px;
  }
</style>
