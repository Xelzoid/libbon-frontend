<script>
  import { onMount } from 'svelte';

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
          <h3>{book.name}</h3>
          <p>{book.description}</p>
          <p>Published on: {book.date_of_publication}</p>
          {#if book.picture}
            <img
              src={`data:image/png;base64,${book.picture}`}
              alt={book.name}
              style="width: 100px; height: auto;"
            />
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/if}