<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";

  onMount(() => {
    console.log('the component has mounted');

    return () => {
      console.log('the component has dismounting');
    };
  });

  beforeUpdate(() => {
    console.log('the component is about to update');
  });

  afterUpdate(() => {
    console.log('the component just updated');

  });

  onDestroy(() => {
    console.log('the component is being destroyed');
  });
</script>
