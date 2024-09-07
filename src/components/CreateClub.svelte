<script>
  import Cookies from 'js-cookie';
  async function CreateClub() {
    try {
      const token = Cookies.get('access_token');
      const response = await fetch("http://localhost:8000/api/create-club", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name
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

<form action="">
  <label for=""></label>
</form>