<script>
    import { onMount } from 'svelte';
    import Footer from '../components/Footer.svelte';
    
    let wordList = ["APPLE", "BAKER", "CANDY", "DANCE", "EAGER", "FLAME", "GRAPE", "HAPPY", "INPUT", "JOKER",
    "KNIFE", "LEMON", "MANGO", "NOBLE", "OCEAN", "PIANO", "QUEEN", "RIVER", "SUNNY", "TABLE",
    "UNCLE", "VIVID", "WHALE", "XENON", "YACHT", "ZEBRA", "ANGEL", "BLISS", "CHARM", "DREAM",
    "EAGLE", "FROZE", "GIANT", "HOVER", "INDEX", "JOLLY", "KNEEL", "LIVER", "MINER", "NURSE",
    "OASIS", "PETAL", "QUAKE", "REIGN", "STORM", "TIGER", "UNION", "VIRUS", "WITTY", "XEROX",
    "YOUTH", "AZURE", "BRAVE", "CROWN", "DRIFT", "FANCY", "GLOBE", "HORSE", "IMAGE", "JEWEL",
    "KINKY", "LUNAR", "MAJOR", "NIGHT", "OLIVE", "PEARL", "QUEST", "ROYAL", "SPIKE", "TOUGH",
    "ULTRA", "VALVE", "WRIST", "XYLEM", "YIELD", "ZESTY", "ALERT", "BRICK", "CLOUD", "DODGE",
    "ELBOW", "FEAST", "GLARE", "HOVER", "IMPLY", "JOLLY", "KNACK", "LODGE", "MERGE", "NERDY",
    "BEACH", "CHAIR", "DOUBT", "EARLY", "FRONT", "GLORY", "HUMAN", "JUICE", "KOALA", "LEVER",
    "MODEL", "NERVE", "OPERA", "PLANT", "QUOTE", "RANCH", "SWEET", "THINK", "UPPER", "VIDEO",
    "WAGON", "YOUNG", "ZONED", "CRISP", "GHOST", "SPARK", "BRUSH", "NIGHT", "GLASS", "SHINE",
    "FAITH", "GRILL", "MARCH", "SHAPE", "SMILE", "TRACK", "YIELD", "BLANK", "GUARD", "VOWEL",
    "CRANK", "FLAIR", "MIGHT", "SPLIT", "WHEEL", "THORN", "BOOST", "BLOOM", "CREEK", "GUESS",
    "SLEEP", "BRICK", "GRAIN", "FRESH", "CRASH", "PROVE", "STORM", "TRUST", "POWER", "BLEND",
    "FRAME", "GROWN", "BRISK", "GRASP", "JUDGE", "SHIFT", "FLEET", "FORCE", "PEACE", "SMART"]; 
    
    
    let answer = wordList[Math.floor(Math.random() * wordList.length)];
    
    let rows = Array(6).fill().map(() => Array(5).fill({ letter: '', status: '' }));
    let currentRow = 0;
    let currentCol = 0;
    let gameOver = false;
    let message = '';
    let keyboardStatus = {};
    
    const keyboard = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];
    
    function handleKeyPress(key) {
        if (gameOver) return;
    
        if (key === 'ENTER') {
        if (currentCol === 5) {
            checkWord(); 
        }
        } else if (key === '←') {
        if (currentCol > 0) {
            currentCol--;
            rows[currentRow][currentCol] = { letter: '', status: '' };
        }
        } else if (currentCol < 5) {
        rows[currentRow][currentCol] = { letter: key, status: '' };
        currentCol++;
        }
    }
    
    function checkWord() {
        const guess = rows[currentRow].map(cell => cell.letter).join('');
        const answerArray = answer.split('');
        const tempKeyboardStatus = { ...keyboardStatus };
        const tempRowStatuses = [];
    
        rows[currentRow].forEach((cell, i) => {
        tempRowStatuses[i] = { ...cell }; 
        if (cell.letter === answerArray[i]) {
            tempRowStatuses[i].status = 'correct';
            tempKeyboardStatus[cell.letter] = 'correct'; 
            answerArray[i] = null; 
        }
        });
    
    
        rows[currentRow].forEach((cell, i) => {
        if (tempRowStatuses[i].status !== 'correct' && answerArray.includes(cell.letter)) {
            tempRowStatuses[i].status = 'present';
            tempKeyboardStatus[cell.letter] = tempKeyboardStatus[cell.letter] !== 'correct' ? 'present' : tempKeyboardStatus[cell.letter]; // Обновляем клавиатуру, если она не уже "correct"
            answerArray[answerArray.indexOf(cell.letter)] = null; 
        } else if (tempRowStatuses[i].status !== 'correct') {
            tempRowStatuses[i].status = 'absent';
            tempKeyboardStatus[cell.letter] = tempKeyboardStatus[cell.letter] !== 'correct' && tempKeyboardStatus[cell.letter] !== 'present' ? 'absent' : tempKeyboardStatus[cell.letter]; // обновляем только если она не "correct" или "present"
        }
        });
    
    
        rows[currentRow] = tempRowStatuses;
        keyboardStatus = tempKeyboardStatus;
    
        
        if (guess === answer) {
        gameOver = true;
        message = 'You won!';
        } else if (currentRow === 5) {
        gameOver = true;
        message = `Game over! The word was ${answer}`;
        } else {
        currentRow++;
        currentCol = 0;
        }
    }
    
    function handleKeyboardInput(event) {
        const key = event.key.toUpperCase();
        if (keyboard.flat().includes(key) || key === 'ENTER' || key === 'BACKSPACE') {
        handleKeyPress(key === 'BACKSPACE' ? '←' : key);
        }
    }
    
    onMount(() => {
        window.addEventListener('keydown', handleKeyboardInput);
    });
    </script>
    
    
    
    <div>
    {#each rows as row}
        <div class="row">
        {#each row as cell}
            <div class="cell {cell.status}">{cell.letter}</div>
        {/each}
        </div>
    {/each}
    
    <div class="keyboard">
        {#each keyboard as row}
        <div class="key-row">
            {#each row as key}
            <div class="key {keyboardStatus[key]}" on:click={() => handleKeyPress(key)}>{key}</div>
            {/each}
        </div>
        {/each}
        <div class="key-row">
        <div class="key" on:click={() => handleKeyPress('←')}>←</div>
        <div class="key" on:click={() => handleKeyPress('ENTER')}>ENTER</div>
        </div>
    </div>
    
    {#if message}
        <div class="message">{message}</div>
    {/if}
    </div>
    <Footer/>
    
    <style>
    .row {
        display: flex;
        justify-content: center;
    }
    .cell {
        caret-color: transparent;
    
        width: 50px;
        height: 50px;
        border: 1px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        transition: background-color 0.3s;
        margin: 2px;
    }
    .correct {
        background-color: green;
        color: white;
    }
    .present {
        background-color: rgb(237, 237, 97);
        color: black;
    }
    .absent {
        background-color: grey;
        color: white;
    }
    .keyboard {
        margin-top: 30px;
    }
    .key-row {
        display: flex;
        justify-content: center;
        margin: 5px 0;
    }
    .key {
        margin: 0 5px;
        padding: 10px;
        border: 1px solid #000;
        cursor: pointer;
        font-weight: bold;
        min-width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .key.correct {
        background-color: green;
        color: white;
    }
    .key.present {
        background-color: yellow;
        color: black;
    }
    .key.absent {
        background-color: grey;
        color: white;
    }
    .message {
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;
    }
    </style>