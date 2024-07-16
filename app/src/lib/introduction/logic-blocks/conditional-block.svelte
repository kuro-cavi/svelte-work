<script lang="ts">
  import { Button, Card } from "flowbite-svelte";

  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Conditional Render
  </h5>
  <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
    Counter: {count}
  </p>
  {#if count > 10}
    <p>is greater than 10</p>
  {:else if count < 5}
    <p>is less than 5</p>
  {:else}
    <p>is between 5 and 10</p>
  {/if}
  <div class="flex mt-2">
    <Button on:click={increment}>Increment</Button>
  </div>
</Card>
