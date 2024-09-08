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

<h1>Что нового?</h1>

<div class="news">
  {#if error}
    <p>Error: {error}</p>
  {:else}
    <ul>
      {#each articles.slice(0, 5) as novost} <!-- Ограничиваем количество новостей до 5 -->
        <li>
          <div class="content">
            {novost.title}
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .news {
    display: flex;
  }
  ul {
    display: flex;
    margin-left: -60px;
  }
  li {
    color: black;
    background-color: #ebe3d5;
    text-decoration: none;
    list-style-type: none;
    width: 200px;
    max-height: 100px;
    margin-left: 20px;
    border: 1px solid black;  
    border-radius: 14px;
    font-size: 13px;
  }
  .content {
    padding: 5px;
  }
</style>
