<script>
    let query = "";
  
    function handleInput(event) {
      query = event.target.value;
      dispatch("search", query);
    }
  </script>
  
  <input type="text" placeholder="Search by name" on:input={handleInput} />
  
  <style>
    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      background-color: blue;
    }
  </style>