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
      const response = await fetch('/api/add_book_to_library', {
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

<button on:click={addBookToLibrary(bookId)}>Add Book</button>