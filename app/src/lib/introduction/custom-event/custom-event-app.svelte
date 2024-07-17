<script lang="ts">
  import { Card } from "flowbite-svelte";
  import Forwarding from "./forwarding.svelte";
  
  let message = '';
  
  const handleMessage = (event: CustomEvent<{text: string}>) => {
    message = event.detail.text
  }
</script>

<Card>
  <Forwarding on:message={handleMessage} />
  <p class="mt-4">say: {message}</p>
</Card>
