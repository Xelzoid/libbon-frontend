<script>
  import { onMount } from "svelte";
  import Bookprivate from "../../../components/Bookprivate.svelte";
  import Comment from "../../../components/Comment.svelte";
  import AddBook from "../../../components/AddBook.svelte";
  import RemoveBook from "../../../components/RemoveBook.svelte";
	import Footer from "../../../components/Footer.svelte";
  // @ts-ignore
  let error = null, book, showCommentForm = false, newComment = '', comments = [], isBookInLibrary = false;

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/news"); //get book from db !!!!!!!!!!! change to correct api
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      book = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });

  book = {id: '0', title:"Book's Title", author:"Author", description:"Description", photo:""};

  function addComment() {
    if (newComment.trim() === '') {
      return; 
    }
    // @ts-ignore
    comments = [...comments, { id: Date.now(), text: newComment }];
    newComment = ''; 
    showCommentForm = false; 
  }
</script>

<div class="container">


  <Bookprivate
    name={book.title}
    author={book.author}
    description={book.description}
    photo={book.photo}
  />
  {#if isBookInLibrary}
    <RemoveBook bookId={book.id}/>
  {:else}
   <AddBook bookId={book.id}/>
  {/if}
  
  <button on:click={() => showCommentForm = !showCommentForm}>
    {showCommentForm ? 'Отмена' : 'Оставить Отзыв '}
  </button>
  {#if showCommentForm}
    <div class="comment-form">
      <textarea bind:value={newComment} placeholder="Write your review here..."></textarea>
      <button on:click={addComment}>Добавить отзыв</button>
    </div>
  {/if}
  {#each comments as { id, text }}
    <Comment text={text} />
  {/each}
</div>
<Footer/>


<style>
  .container {
    margin-left: 20%;
    margin-top: 5%;
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