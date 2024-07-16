<script lang="ts">
  import { Card } from "flowbite-svelte";

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  export let promise = async () => {
    await sleep(3000);
    return "OK!";
  };
</script>

<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Promised Render
  </h5>
  {#await promise()}
    <!-- promise is pending -->
    <p>...waiting</p>
  {:then value}
    <!-- promise was fulfilled -->
    <p>value is: {value}</p>
  {:catch error}
    <!-- promise was rejected -->
    <p>error is: {error.message}</p>
  {/await}
</Card>
