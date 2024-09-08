<script>
export let bookId = '';
async function removeBookFromLibrary(bookId) {
    const token = localStorage.getItem('token'); // Retrieve the JWT token

    if (!token) {
        console.error('No token found. Please login first.');
        goto("/login");
        return;
    }

    try {
        const response = await fetch('http://localhost:8000/api/remove_from_library', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Use the stored JWT token
            },
            body: JSON.stringify({ book_id: bookId })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Failed to remove book from library');
        }

        const result = await response.json();
        console.log(result.message); // "Book removed from user successfully"
        return result;

    } catch (error) {
        console.error('Error:', error.message);
    }
}
</script>
<button on:click={addBookToLibrary(bookId)}>Remove Book</button>