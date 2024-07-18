<script lang="ts">
  import { Button, Card } from "flowbite-svelte";
  import Shared, { getTotal } from "../context-module/shared.svelte";

  let total = getTotal();

  const handle = () => {
    total = getTotal();
  };
</script>

<Card>
  <div class="flex flex-col space-y-2">
    <Button on:click={handle}>Total Count: {total}</Button>
    <Shared />
    <Shared />
    <Shared />
  </div>
</Card>
