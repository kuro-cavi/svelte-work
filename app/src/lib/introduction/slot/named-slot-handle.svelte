<script lang="ts">
  import NamedSlotContent from "./named-slot-content.svelte";
</script>

<NamedSlotContent>
	<h1 slot="header">Hello</h1>
  <svelte:fragment slot="footer">
		<p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
	</svelte:fragment>
</NamedSlotContent>
