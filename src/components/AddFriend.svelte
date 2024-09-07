<script>
	import { goto } from "$app/navigation";
  export let id = '';
  // @ts-ignore
  // @ts-ignore
  async function addFriend(id) {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Please login first.');
      goto("/login");
      return;
    }
    try {
      const response = await fetch('/api/social/friends/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ friend_id: parseInt(id) })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to add friend');
      }
      const result = await response.json();
      console.log(result.message); // "Book added to user successfully"
      return result;

    } catch (error) {
        // @ts-ignore
        alert('Error:', error.message);
    }
  }
</script>

<button on:click={addFriend(id)}>Add Friend</button>