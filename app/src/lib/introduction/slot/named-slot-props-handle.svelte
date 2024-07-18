<script lang="ts">
  import NamedSlotProrpsContent from "./named-slot-prorps-content.svelte";

  type Item = { text: string };

  let items: Item[] = [{ text: "one" }, { text: "two" }, { text: "three" }];
</script>

<NamedSlotProrpsContent {items}>
  <div slot="item" let:item>{item.text}</div>
</NamedSlotProrpsContent>
