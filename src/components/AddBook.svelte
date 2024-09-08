<script>
	import { goto } from "$app/navigation";
  export let bookId = '';
  // @ts-ignore
  // @ts-ignore
  async function addBookToLibrary(bookId) {
    const token = localStorage.getItem('token'); // Retrieve the saved token
    if (!token) {
      console.error('No token found. Please login first.');
      goto("/login");
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/api/add_book_to_library', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Use the stored token
        },
        body: JSON.stringify({ book_id: bookId })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to add book to library');
      }

      const result = await response.json();
      console.log(result.message); // "Book added to user successfully"
      return result;

    } catch (error) {
        // @ts-ignore
        console.error('Error:', error.message);
    }
  }
</script>

<button on:click={addBookToLibrary(bookId)}>В Избранные</button>

<style>
  button{
    margin-top: 15px;
    height: 40px;
    width: 120px;
    background-color: #ebe3d5;
    font-weight: 500;
    border: none;
    box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.15);
    transition: 0.1s;

  }
  button:hover{
    background-color: #ded5c5;
  }
</style>