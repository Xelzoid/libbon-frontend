<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from '$app/stores';

  import { changeClub, FetchClubId, FetchMe } from "$lib/utils"; 
  import Club from "../../../components/Club.svelte";
  import PageClub from "../../../components/PageClub.svelte"
  import Comment from "../../../components/Comment.svelte";
  import Footer from "../../../components/Footer.svelte";


  // @ts-ignore
  let user, club, showCommentForm = false, newComment = '', comments = [], isOwner = false, isPrivate, error = null; 
  const { id } = $page.params;
  console.log(id);
  let token = '';
  onMount(async () => {
    token = localStorage.getItem("token");
    user = FetchMe;
    club = FetchClubId(id);
    isPrivate = club.is_private;
    console.log(club);
    console.log(user);

    if (user.id == club.owner_id) {
      isOwner = true;
    }
    isOwner = true;
  });
  let isEditing = false, description = '';
  function addComment() {
    if (newComment.trim() === '') {
      return; 
    }
    comments = [...comments, { id: Date.now(), text: newComment }];
    newComment = ''; 
    showCommentForm = false; 
  }
  async function change() {
    isEditing = !isEditing;
    if (isEditing) {
      changeClub(club.id, description, isPrivate, token)
    }
  }
  function updateDescription(event) {
      description = event.target.value; // Update description from textarea
  }
</script>

<PageClub></PageClub>
{#if isOwner}
  {#if isEditing}
      <!-- Show a textarea if in editing mode -->
      <textarea bind:value={description} on:input={updateDescription}></textarea>
      <button on:click={change}>Save</button>
  {:else}
      <!-- Show a paragraph if not in editing mode -->
      <p>{description}</p>
      <button on:click={change}>CHANGE</button>
  {/if}
{/if}
<Footer/>
