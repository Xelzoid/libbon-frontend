<script>
    import { onMount } from "svelte";
    import Club from "../../../components/Club.svelte";
  import { onMount } from "svelte";
  import Bookprivate from "../../../components/Club.svelte";
  import Comment from "../../../components/Comment.svelte";
  import Footer from "../../../components/Footer.svelte";

  // @ts-ignore
  let news = [];
  // @ts-ignore
  let error = null;
  let club;
  let showCommentForm = false;
  let newComment = '';
  let comments = []; 

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/news");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      club = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });

  club = {title:"Club name", author:"Author", description:"Description", photo:""};

  function addComment() {
    if (newComment.trim() === '') {
      return; 
    }
    comments = [...comments, { id: Date.now(), text: newComment }];
    newComment = ''; 
    showCommentForm = false; 
  }

  function joinClub() {
  }
</script>

<Bookprivate
    name={book.title}
    description={book.description}
    photo={book.photo}
/>

<Footer/>
