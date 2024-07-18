<script context="module" lang="ts">
  // not trigger rendering
  let total: number = 0;

  export const getTotal = () => {
    return total;
  };
</script>

<script lang="ts">
  import { Button } from "flowbite-svelte";

  let count: number = 0;
  const handle = () => {
    count++;
    total++;
  };
</script>

<Button on:click={handle}>Shared Count: {count}</Button>
