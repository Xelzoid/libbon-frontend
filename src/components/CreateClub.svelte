<script>
  import Cookies from 'js-cookie';
  let name = '';
  let error = '';

  async function CreateClub() {
    try {
      const token = Cookies.get('access_token');
      const response = await fetch("http://localhost:8000/api/create-club", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Add token if required for authentication
        },
        body: JSON.stringify({
          name: name
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      // Handle successful club creation
      
    } catch (err) {
      // Handle the error
      error = err.message;
    }
  }
</script>

<form on:submit|preventDefault={CreateClub}>
  <label for="club-name">Club Name:</label>
  <input 
    id="club-name" 
    type="text" 
    bind:value={name} 
    placeholder="Enter club name"
    required
  />
  <button type="submit">Create Club</button>
  
  {#if error}
    <p style="color: red;">Error: {error}</p>
  {/if}
</form>
