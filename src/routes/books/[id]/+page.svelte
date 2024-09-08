<script>
  import { onMount } from "svelte";
  import Bookprivate from "../../../components/PageBook.svelte";
  import Comment from "../../../components/Comment.svelte";
  import AddBook from "../../../components/AddBook.svelte";
  import RemoveBook from "../../../components/RemoveBook.svelte";
	import Footer from "../../../components/Footer.svelte";
  
  let error = null, book, showCommentForm = false, newComment = '', comments = [], isBookInLibrary = false;

  // Получение книги и комментариев с сервера
  onMount(async () => {
    try {
      const bookResponse = await fetch("http://localhost:8000/book"); // изменить на реальный API для получения книги
      const commentsResponse = await fetch("http://localhost:8000/comments"); // запрос для получения комментариев
      
      if (!bookResponse.ok || !commentsResponse.ok) {
        throw new Error("Failed to fetch data");
      }
      
      book = await bookResponse.json();
      comments = await commentsResponse.json(); // Получаем список комментариев с сервера
    } catch (err) {
      error = err.message;
    }
  });

  book = {id: '0', title:"Book's Title", author:"Author", description:"Description", photo:""};

  // Функция для добавления комментария
  async function addComment() {
    if (newComment.trim() === '') {
      return; 
    }

    try {
      const response = await fetch("http://localhost:8000/comments", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: Date.now(), text: newComment }) // Отправляем комментарий на сервер
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const newCommentFromServer = await response.json();
      comments = [...comments, newCommentFromServer]; // Обновляем список комментариев

      newComment = ''; 
      showCommentForm = false;
    } catch (err) {
      error = err.message;
    }
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
  
  <button style="margin-left: 55px;" class="coment_btn" on:click={() => showCommentForm = !showCommentForm}>
    {showCommentForm ? 'Отмена' : 'Оставить Отзыв '}
  </button>

  {#if showCommentForm}
    <div class="comment-form">
      <textarea bind:value={newComment} placeholder="Напишите сюда свой отзыв..."></textarea>
      <button class="coment_btn" on:click={addComment}>Добавить отзыв</button>
    </div>
  {/if}

  {#each comments as { id, text }}
    <Comment text={text} />
  {/each}
</div>

<Footer/>

<style>
  .coment_btn {
    margin-top: 15px;
    height: 40px;
    width: 120px;
    background-color: #ebe3d5;
    font-weight: 500;
    border: none;
    box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.15);
    transition: 0.1s;
  }
  .coment_btn:hover {
    background-color: #ded5c5;
  }
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
