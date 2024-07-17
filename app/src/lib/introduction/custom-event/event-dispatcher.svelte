<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch("message", {
      text: "Hello!",
    });
  }
</script>

<Button on:click={sayHello}> Click to say hello </Button>
