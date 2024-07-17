<script lang="ts">
  import { Button, Card } from "flowbite-svelte";
  import { createCountContext, getCountContext } from "./context-store";

  createCountContext();
  const count = getCountContext();
</script>

<Card>
  <p class="mb-4">count: {$count.current}</p>
  <div class="flex gap-4 justify-center items-center">
    <Button on:click={count.increment}>+</Button>
    <Button on:click={count.decrement}>-</Button>
    <Button on:click={count.reset}>reset</Button>
  </div>
</Card>
