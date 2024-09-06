
<script>
    import Bookprivate from "../../../components/Bookprivate.svelte";
    
    let books = [{
        name: "bool",
        author: "Bil",
        description: "bil's book",
    }]
    
</script>

{#each books as book}
      <Bookprivate 
        name={book.name} 
        author={book.author} 
        description={book.description} 
      />
    {/each}