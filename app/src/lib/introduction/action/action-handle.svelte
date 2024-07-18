<script lang="ts">
  import { Button, Card } from "flowbite-svelte";
  import { focusMount } from "./action";

  let show: boolean = false;
</script>

<Card>
  <div class="mb-4 h-10">
    {#if show}
      <input
        type="text"
        class="block w-full p-2.5 focus:border-primary-500 focus:ring-primary-500 bg-gray-50 text-gray-900 border-gray-300 text-sm rounded-lg"
        use:focusMount={"parameter"}
      />
    {/if}
  </div>
  <Button on:click={() => (show = !show)}>{show ? "Hidden" : "Show"}</Button>
</Card>
