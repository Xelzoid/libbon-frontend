<script>
    let showCatalog = false;

    function toggleCatalog() {
        showCatalog = !showCatalog;
    }
</script>

<div class="catalog-container">
    <button class="catalog-btn" on:click={toggleCatalog}>каталог книг</button>
    {#if showCatalog}
        <div class="catalog-menu">
            <ul>
                <h2>Каталог жанров</h2>
                <li><a href="#">Литература</a></li>
                <li><a href="#">Научная литература</a></li>
                <li><a href="#">Научная фантастика</a></li>
                <li><a href="#">Фантастика</a></li>
                <li><a href="#">Биографии</a></li>
            </ul>
        </div>
    {/if}
</div>

<style>
    .catalog-container {
        position: relative;
        display: inline-block;
    }

    .catalog-btn {
        background-color: #3498db;
        color: white;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

    .catalog-menu {
        position: absolute;
        background-color: #fff;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        padding: 10px;
        width: 200px;
        border-radius: 8px;
    }

    .catalog-menu ul {
        list-style: none;
        padding: 0;
    }

    .catalog-menu ul li {
        margin-bottom: 10px;
    }

    .catalog-menu ul li a {
        text-decoration: none;
        color: #3498db;
        font-size: 14px;
    }

    .catalog-menu ul li a:hover {
        color: #2980b9;
    }
</style>