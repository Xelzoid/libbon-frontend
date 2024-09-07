<script>
  async function CreateClub() {
    try {
      const response = await fetch("http://localhost:8000/api/create-club", {
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
    }
    catch (err) {
      // @ts-ignore
      error = err.message;
    }
  }
</script>