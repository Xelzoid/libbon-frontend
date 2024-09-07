<script>
  let name = '';
  let error = '';

  async function CreateClub() {
    const formBody = new URLSearchParams();
    formBody.append("name", name)
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      const response = await fetch("http://localhost:8000/api/social/create-club", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "Authorization": `Bearer ${token}`
        },
        // body: JSON.stringify({
        //   name
        // })
        body: formBody.toString()
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error creating club');
      }
      const result = await response.json();
      alert('Club created successfully!');
      console.log(result);
    } catch (err) {
      // Handle the error
      alert(`Failed to create club: ${err.message}`);
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
