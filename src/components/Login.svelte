<script>
  let email = '', password = '', token = '', error = null;

  async function login() {
    if (!validateEmail(email)) {
        alert("Invalid email: Please enter a valid email address.");
        return;
    }
    if (!validatePassword(password)) {
        alert("Invalid password: Password must be at least 8 characters long and contain letters, numbers, and symbols.");
        return;
    }
    alert("Form submitted successfully!");
    
    try {
        const formBody = new URLSearchParams();
        formBody.append("username", email);
        formBody.append("password", password);

        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody.toString()  // URL encoded body
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail);
        }
        
        const data = await response.json();
        token = data.token; // Save the token for future use
        localStorage.setItem('token', token);
    } catch (err) {
        error = err.message;
    }
}
  // @ts-ignore
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // @ts-ignore
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

</script>

<form on:submit|preventDefault={login}>
  <h2>Log In</h2>
  <label>
      Email:
      <input type="email" bind:value={email} required />
  </label>

  <label>
      Password:
      <input type="password" bind:value={password} required />
  </label>
  <button type="submit">Login</button>
  <a href="/register">No account?</a>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

label {
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: 600;
}

input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: 16px;
    width: 100%;
}

button {
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #45a049;
}
</style>
