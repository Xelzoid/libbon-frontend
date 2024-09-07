<script>
    import { onMount } from "svelte";
    import Club from "../../../components/Club.svelte";

    let error = null;

    onMount(async () => {
        try {
            const response = await fetch("http://localhost:8000/news");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            book = await response.json();
        } catch (err) {
            error = err.message;
        }
    });
    let book = { title: "Ghbajdoiajd", author: "adasdasd", description: "asdsadadad", photo: "" };
</script>

<Club
    name={book.title}
    description={book.description}
    photo={book.photo}
/>
