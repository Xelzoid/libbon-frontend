<script>
  import Footer from '../../../components/Footer.svelte';

  let currentQuestionIndex = 0;
  let selectedAnswer = null;
  let isQuizComplete = false;
  let score = 0;

  const questions = [
    {
      question: 'Кто автор "Преступления и наказания"?',
      options: ['Федор Достоевский', 'Лев Толстой', 'Антон Чехов', 'Николай Гоголь'],
      correctAnswer: 0
    },
    {
      question: 'Кто написал "Войну и мир"?',
      options: ['Лев Толстой', 'Федор Достоевский', 'Антон Чехов', 'Александр Пушкин'],
      correctAnswer: 0
    },
    {
      question: 'Кто написал "Мертвые души"?',
      options: ['Николай Гоголь', 'Федор Достоевский', 'Антон Чехов', 'Лев Толстой'],
      correctAnswer: 0
    }
  ];

  // Реактивная переменная для прогресса, начнем с 0%
  $: progress = (currentQuestionIndex / questions.length) * 100;

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      selectedAnswer = null;
    } else {
      isQuizComplete = true;
    }
  }

  function skipQuestion() {
    nextQuestion();
  }

  function submitAnswer() {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        score++;
      }
      nextQuestion();
    } else {
      alert('Пожалуйста, выберите ответ.');
    }
  }
</script>

<style>


  .container {
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .quiz-container {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: left;
  }

  .progress-bar {
    background-color: #e0e0e0;
    border-radius: 5px;
    margin-bottom: 20px;
    height: 10px;
    width: 100%;
    position: relative;
  }

  .progress-bar-inner {
    background-color: #4caf50;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.3s ease;
  }

  h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  label {
    font-size: 18px;
    display: block;
    margin: 10px 0;
  }

  .button-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }
</style>

<div class="container">
  <div class="quiz-container">
    {#if isQuizComplete}
      <h2>Квиз завершен! Ваши баллы: {score}</h2>
    {:else}
      <div class="progress-bar">
        <div class="progress-bar-inner" style="width: {progress}%"></div>
      </div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <form on:submit|preventDefault={submitAnswer}>
        {#each questions[currentQuestionIndex].options as option, index}
          <label>
            <input type="radio" name="answer" value={index} bind:group={selectedAnswer}>
            {option}
          </label>
        {/each}
        <div class="button-group">
          <button type="button" on:click={skipQuestion}>Пропустить</button>
          <button type="submit">Ответить</button>
        </div>
      </form>
    {/if}
  </div>
</div>

<Footer />
