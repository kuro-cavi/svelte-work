<script lang="ts">
  import { Button, Card } from "flowbite-svelte";

  let count: number = 0;
  let onceCount: number = 0;
  let xCount:number = 0;
  let yCount:number = 0;
</script>

<Card>
  <!-- Handlers can be declared inline with no performance penalty. -->
  <Button class="mb-2" on:click={() => (count += 1)}>
    count: {count}
  </Button>
  <Button class="mb-2" on:click|once={() => (onceCount += 1)}>
    once count: {onceCount}
  </Button>
  <Button on:click={() => (xCount += 1)} on:click={() => (yCount += 2)}>
    x count: {xCount} - y count: {yCount}
  </Button>
</Card>
