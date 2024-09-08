<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from '$app/stores';

  import { changeClub, FetchClubId, FetchMe } from "$lib/utils"; 
  import Club from "../../../components/Club.svelte";
  import PageClub from "../../../components/PageClub.svelte";
  import Comment from "../../../components/Comment.svelte";
  import Footer from "../../../components/Footer.svelte";

  let user, club, showCommentForm = false, newComment = '', comments = [], isOwner = false, isPrivate, error = null; 
  const { id } = $page.params;
  let token = '';
  let isEditing = false; // Флаг для режима редактирования
  let description = '';  // Описание клуба

  // Функция для сохранения изменений
  async function saveChanges() {
    try {
      await changeClub(id, description, isPrivate, token);
      club.description = description; // Обновляем описание клуба после изменения
      isEditing = false; // Выключаем режим редактирования
      alert('Описание клуба успешно изменено!');
    } catch (err) {
      error = 'Ошибка при изменении клуба';
    }
  }

  onMount(async () => {
    token = localStorage.getItem("token");
    user = await FetchMe(); // Получение данных пользователя
    club = await FetchClubId(id); // Получение данных клуба
    isPrivate = club.is_private;
    description = club.description; // Устанавливаем текущее описание клуба
    if (user.id === club.owner_id) {
      isOwner = true;
    }
  });

  // Функция для добавления комментариев
  function addComment() {
    if (newComment.trim() === '') {
      return; 
    }
    comments = [...comments, { id: Date.now(), text: newComment }];
    newComment = ''; 
    showCommentForm = false; 
  }

  // Функция для включения режима редактирования
  function startEditing() {
    isEditing = true;
  }
</script>
{#if loading}
  <p>loading...</p>
{:else}
<PageClub name = {club.name} description = {club.description} owner = {club.owner} users = {club.users}/>
{/if}
<!-- {#if isOwner} -->
  {#if isEditing}
  <div>
    <h3>Редактирование описания клуба</h3>
    <textarea bind:value={description}></textarea>
    <button on:click={saveChanges}>Сохранить</button>
    <button on:click={() => isEditing = false}>Отмена</button>
  </div>
  {:else}
  <div>
    <h3>Описание клуба</h3>
    <p>{club.description}</p> <!-- Отображаем текущее описание клуба -->
    <button on:click={startEditing}>Изменить описание</button>
  </div>
  {/if}
<!-- {/if} -->

<Footer/>
