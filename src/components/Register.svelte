<script>
  // @ts-ignore
  import { goto } from '$app/navigation'; 
  import { onMount } from "svelte";
  let number = '', email = '', password = '', name = '', surname = '', date_of_birth = '', error = null;
  // @ts-ignore
  function validateName(name) {
    const nameRegex = /^[A-Za-z]{2,}$/;
    return nameRegex.test(name);
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
  // @ts-ignore
  function validateNumber(number) {
    const telephoneRegex = /^\d+$/;
    return telephoneRegex.test(number);
  }
  async function Register() {
    // if (!validateName(name)) {
    //     alert("Invalid name: Name must be at least 2 characters and contain only letters.");
    //     return;
    // }
    // if (!validateName(surname)) {
    //     alert("Invalid surname: Surname must be at least 2 characters and contain only letters.");
    //     return;
    // }
    // if (!validateEmail(email)) {
    //     alert("Invalid email: Please enter a valid email address.");
    //     return;
    // }
    // if (!validatePassword(password)) {
    //     alert("Invalid password: Password must be at least 8 characters long and contain letters, numbers, and symbols.");
    //     return;
    // }
    // // @ts-ignore
    // if (number && !validateTelephone(number)) {
    //     alert("Invalid telephone number: must contain only numbers.");
    //     return;
    // }
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            number: number,
            email: email,
            password: password,
            name: name,
            surname: surname,
            date_of_birth: date_of_birth
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }
      else {
        goto("/login")
      }
    }
    catch (err) {
      // @ts-ignore
      error = err.message;
    }
  }
</script>
  
<form on:submit|preventDefault={Register}>
  <h2>Register</h2>


  <label>
    First Name:
    <input type="text" bind:value={name} required />
  </label>
  <label>
    Surname:
    <input type="text" bind:value={surname} required />
  </label>

  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>
  <label>
    Telephone Number:
    <input type="tel" bind:value={number} />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>

  <label>
    Date of Birth:
    <input type="date" bind:value={date_of_birth} required />
  </label>

  <button type="submit">Register</button>
  <a href="/login">Already have an account?</a>
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
  