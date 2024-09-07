<script>
  import { onMount } from 'svelte';

  let articles = [];
  let error = null;

  const API_KEY = 'be2afff8e7cb481e975045c6b33e1450';
  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  async function fetchNews() {
    try {
      const response = await fetch(NEWS_API_URL);
      if (!response.ok) {
        throw new Error('Ошибка при получении новостей');
      }
      const data = await response.json();
      articles = data.articles;
    } catch (err) {
      error = err.message;
    }
  }

  onMount(() => {
    fetchNews();
  });
</script>

<div class="news">
  <h1>Что нового?</h1>
  {#if error}
    <p>Error: {error}</p>
  {:else}
    <ul>
      {#each articles as novost}
        <li>{novost.title}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .news {
    display: flex;
  }
</style>