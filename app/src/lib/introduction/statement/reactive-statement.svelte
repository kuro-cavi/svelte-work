<script lang="ts">
  import { Button, Card } from "flowbite-svelte";

  // `export` keyword to mark a variable declaration as a property or prop
  export let title: string = "Default Title";

  let count: number = 0;
  let doubled: number = 0;
  let pet: string, fruits: string;

  // `$:` block will become of the reactive statement
  $: squared = count * count;

  $: {
    // block expression
    doubled = count * 2;
    pet = count % 5 === 0 ? "dog" : "cat";
    if (count > 5) {
      fruits = "apple";
    }
  }

  // $: console.log(pet);
  // $: console.log(fruits);
</script>

<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
  </h5>
  <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Counter: {count}</p>
  <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Doubled: {doubled}</p>
  <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Squared: {squared}</p>
  <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Pet: {pet}</p>
  <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Fruits: {fruits}</p>
  <div class="flex mt-2 space-x-3">
    <Button on:click={() => count++}>Increment</Button>
    <Button on:click={() => count--}>Decrement</Button>
  </div>
</Card>
