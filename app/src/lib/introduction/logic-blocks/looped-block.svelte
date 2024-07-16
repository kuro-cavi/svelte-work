<script lang="ts">
  import { Card, Indicator } from "flowbite-svelte";
  import type { IndicatorProps } from "flowbite-svelte/Indicator.svelte";

  interface Color {
    color: IndicatorProps["color"];
    size: IndicatorProps["size"];
  }

  export let colors: Color[] = [
    { color: "gray", size: "xl" },
    { color: "dark", size: "xl" },
    { color: "orange", size: "xl" },
    { color: "blue", size: "xl" },
    { color: "green", size: "xl" },
    { color: "red", size: "xl" },
    { color: "purple", size: "xl" },
    { color: "indigo", size: "xl" },
    { color: "yellow", size: "xl" },
    { color: "teal", size: "xl" },
  ];
</script>

<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Looped Render
  </h5>
  <div class="flex mt-2 space-x-3">
    {#each colors as { color, size }, index (color)}
      <Indicator {color} {size}>
        <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">{index + 1}</p>
      </Indicator>
    {:else}
      <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">No Colors!</p>
    {/each}
  </div>
</Card>
