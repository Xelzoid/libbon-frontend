<script>
  import { onMount } from 'svelte';
  import CardBook from '../../../components/CardBook.svelte';
  let books = [];
  let error = null;

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:8000/api/books?limit=5');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      books = await response.json();
    } catch (err) {
      error = err.message || 'An error occurred';
    }
  });
</script>

{#if error}
  <div>{error}</div>
{:else if books.length === 0}
  <div>Loading...</div>
{:else}
  <div>
    <h2>Katalog</h2>
    <ul>
      {#each books as book (book.id)}
        <li>
          <CardBook 
          name={book.name}
          author={book.description}
          photo={' '}></CardBook>
        </li>
      {/each}
    </ul>
  </div>
{/if}