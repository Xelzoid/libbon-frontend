<script>
    import { onMount } from 'svelte';
    import Footer from '../../../components/Footer.svelte';
    let currentQuestionIndex = 0;
    let selectedAnswer = null;
    let isQuizComplete = false;
    let score = 0;
  
    const questions = [
  {
    question: 'Кто является автором романа "Мастер и Маргарита"?',
    options: ['Михаил Булгаков', 'Федор Достоевский', 'Лев Толстой', 'Александр Пушкин'],
    correctAnswer: 0
  },
  {
    question: 'Как называется знаменитая трагедия Уильяма Шекспира о датском принце?',
    options: ['Отелло', 'Макбет', 'Ромео и Джульетта', 'Гамлет'],
    correctAnswer: 3
  },
  {
    question: 'Как называется эпопея Льва Толстого, описывающая события войны 1812 года?',
    options: ['Война и мир', 'Анна Каренина', 'Севастопольские рассказы', 'Детство'],
    correctAnswer: 0
  },
  {
    question: 'Кто автор стихотворения "Я помню чудное мгновенье"?',
    options: ['Александр Пушкин', 'Михаил Лермонтов', 'Федор Тютчев', 'Константин Бальмонт'],
    correctAnswer: 0
  },
  {
    question: 'Какой французский писатель написал роман "Отверженные"?',
    options: ['Эмиль Золя', 'Густав Флобер', 'Виктор Гюго', 'Марсель Пруст'],
    correctAnswer: 2
  },
  {
    question: 'Как называется знаменитый роман Джорджа Оруэлла, изображающий тоталитарное общество?',
    options: ['В поисках утраченного времени', 'Скотный двор', 'Старик и море', '1984'],
    correctAnswer: 0
  },
  {
    question: 'Какой роман Фрэнсиса Скотта Фицджеральда считается символом "потерянного поколения"?',
    options: ['Великий Гэтсби', 'Ночь нежна', 'Благословение', 'Элита'],
    correctAnswer: 0
  },
  {
    question: 'Кто написал пьесу "Чайка"?',
    options: ['Лев Толстой', 'Максим Горький', 'Антон Чехов', 'Николай Гоголь'],
    correctAnswer: 3
  },
  {
    question: 'Как называется знаменитая эпопея американского писателя Джона Стейнбека о жизни фермеров во время Великой депрессии?',
    options: ['Гроздья гнева', 'О мышах и людях', 'Сквозь поле', 'Дорога домой'],
    correctAnswer: 0
  },
  {
    question: 'Какой русский писатель написал роман "Обломов"?',
    options: ['Иван Гончаров', 'Александр Пушкин', 'Лев Толстой', 'Федор Достоевский'],
    correctAnswer: 0
  },
  {
    question: 'Кто является автором романа "Тотальный диктант"?',
    options: ['Людмила Улицкая', 'Дмитрий Быков', 'Светлана Алексиевич', 'Роман Сенчин'],
    correctAnswer: 1
  },
  {
    question: 'Какой американский писатель написал роман "Убить пересмешника"?',
    options: ['Харпер Ли', 'Джон Стейнбек', 'Фрэнсис Скотт Фицджеральд', 'Эрнест Хемингуэй'],
    correctAnswer: 0
  },
  {
    question: 'Как называется роман Джейн Остин, в котором рассказывается о трудностях, связанных с поиском мужа в англосаксонском обществе?',
    options: ['Гордость и предубеждение', 'Разум и чувства', 'Эмма', 'Север и юг'],
    correctAnswer: 0
  },
  {
    question: 'Кто написал "Маленького принца"?',
    options: ['Антуан де Сент-Экзюпери', 'Жюль Верн', 'Ги де Мопассан', 'Марсель Пруст'],
    correctAnswer: 0
  }
];
  
    // Функция для расчета прогресса
    function getProgress() {
      return ((currentQuestionIndex + 1) / questions.length) * 100;
    }
  
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
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
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
      transition: width 0.5s ease; /* Плавное изменение ширины */
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
  
  <div class="quiz-container">
    {#if isQuizComplete}
      <h2>Квиз завершен! Ваши баллы: {score}</h2>
    {:else}
      <div class="progress-bar">
        <div class="progress-bar-inner" style="width: {getProgress()}%"></div>
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

  <Footer/>
  