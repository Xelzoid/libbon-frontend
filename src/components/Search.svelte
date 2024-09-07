
<div class="search-container">
        <input type="text" id="search" placeholder="Search...">
        <button id="searchBtn">Search</button>
    </div>
<style>
    .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

input[type="text"] {
    padding: 10px;
    border: none;
    border-radius: 20px;
    outline: none;
    width: 200px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    border: none;
    background-color: #28a745;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #218838;
}
</style>
<script>
    import { onMount } from 'svelte';

    onMount(() => {
        document.getElementById("searchBtn").addEventListener("click", function() {
            let query = document.getElementById("search").value;
            if (query) {
                alert("You searched for: " + query);
            } else {
                alert("Please enter a search term.");
            }
        });
    });
</script>
    