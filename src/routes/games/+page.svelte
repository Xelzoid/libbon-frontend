<script>
import Gamecard from "../../components/Gamecard.svelte";
import GameCard2 from "../../components/GameCard2.svelte";
  let books = [
    {
      title: "Quiz",
      author: "Викторина — игра, заключающаяся в ответах на устные или письменные вопросы",
      coverImage: "",
    },
    {
      title: "Wordle",
      author: "Суть игры заключается в угадывании пятибуквенного слова за пяти попыток.",
      coverImage: "",
    }
  ];
</script>

<div class="container">
  <div class="card-container">
    
    <Gamecard
      title={books[0].title}
      author={books[0].author}
      coverImage={books[0].coverImage}
    />

    <GameCard2 
      title={books[1].title}
      author={books[1].author}
      coverImage={books[1].coverImage}
    />
  </div>
</div>

<style>
  .container {
    margin-left: 10%;
    margin-right: 5%;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 80px;
  }
</style>
