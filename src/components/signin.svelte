<script>
  let email = '';
  let password = '';
  let telephone = '';

  const handleRegister = () => {
      if (!email || !password) {
          alert('Email and password are required.');
          return;
      }
      const userData = {
          email,
          password,
          telephone: telephone || null,
      };
      console.log('User Registered:', userData);
      import { onMount } from "svelte";
      let error = null;

      onMount(async () => {
          try {
              const response = await fetch("http://localhost:8000/news");
              if (!response.ok) {
                  throw new Error("Failed to fetch data");
              }
              news = await response.json();
          } catch (err) {
              error = err.message;
          }
      });
  };
</script>

<form on:submit|preventDefault={handleRegister}>
  <label>
      Email:
      <input type="email" bind:value={email} required />
  </label>

  <label>
      Password:
      <input type="password" bind:value={password} required />
  </label>

  <label>
      Telephone (optional):
      <input type="tel" bind:value={telephone} />
  </label>

  <button type="submit">Register</button>
</form>
