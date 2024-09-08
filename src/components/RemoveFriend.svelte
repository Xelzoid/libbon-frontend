<script>
  import { goto } from "$app/navigation";    
  export let id = '';
  // @ts-ignore
  async function RemoveFriend(id) {
    const token = localStorage.getItem('token'); 
    if (!token) {
        console.error('No token found. Please login first.');
        goto("/login");
        return;
    }
    try {
        const response = await fetch('http://localhost:8000/api/social/friends/remove', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ friend_id: parseInt(id) })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || 'Failed to remove friend');
        }

        const result = await response.json();
        console.log(result.message);
        return result;

    } catch (error) {
        // @ts-ignore
        console.error('Error:', error.message);
    }
}
</script>
<button on:click={RemoveFriend(id)}>Remove Book</button>