<script lang="ts">
  import SlotProrpsContent from "./slot-prorps-content.svelte";

  type Item = { text: string };

  let items: Item[] = [{ text: "one" }, { text: "two" }, { text: "three" }];
</script>

<SlotProrpsContent {items} let:item>
  <div>{item.text}</div>
</SlotProrpsContent>
