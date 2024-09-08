<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from '$app/stores';

  import { FetchClubId, FetchMe } from "$lib/utils"; 
  import Club from "../../../components/Club.svelte";
  import PageClub from "../../../components/PageClub.svelte"
  import Comment from "../../../components/Comment.svelte";
  // @ts-ignore
  let user, club, showCommentForm = false, newComment = '', comments = [], error = null; 
  const { clubId } = $page.params;
  console.log(clubId);

  onMount(async () => {
    const token = localStorage.getItem('token');
    user = FetchMe;
    club = FetchClubId(clubId);
    console.log(club);
    console.log(user);
  });

  
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

<PageClub></PageClub>
