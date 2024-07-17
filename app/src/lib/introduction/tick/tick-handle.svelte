<script>
  import { Button, Card } from "flowbite-svelte";
  import { tick } from "svelte";

  let count = 0;

  const increment = async () => {
    count += 1;
    await tick();
    // Code to be executed after DOM is updated
    console.log("DOM has been updated with new count:", count);
  };
</script>

<Card>
  <Button on:click={increment}>Increment</Button>
  <p>count: {count}</p>
</Card>
