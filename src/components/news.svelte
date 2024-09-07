<script>
  import { onMount } from "svelte";
  // @ts-ignore
  let news = [];
  // @ts-ignore
  let error = null;

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/news");
      if (!response.ok) {
          throw new Error("Failed to fetch data");
      }
      news = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });
</script>

<div class="news">
  <h2>What's New?</h2>
  {#if error}
  <p>Error: {error}</p>
  {:else}
  <ul>
  {#each news as novost}
      <li>{novost}</li>
  {/each}
  </ul>
  {/if}
</div>

<style>
  .news {
    display: flex;
    flex-direction: column;
  }
  ul {
    
  }
</style>