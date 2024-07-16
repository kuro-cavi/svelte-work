<script lang="ts">
  import { fade } from "svelte/transition";
  import { Button, Card } from "flowbite-svelte";

  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Key Block Render
  </h5>
  <div class="mb-2 h-7">
    {#key count}
      <!-- When used around components, this will cause them to be reinstantiated and reinitialised. -->
      <div in:fade>
        {count}
      </div>
    {/key}
  </div>
  <div>
    <Button on:click={increment}>Increment</Button>
  </div>
</Card>
