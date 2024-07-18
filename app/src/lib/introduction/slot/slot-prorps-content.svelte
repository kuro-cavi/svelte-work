<script lang="ts">
  type T = $$Generic;
  
  export let items: T[];
</script>

<ul>
  {#each items as item}
    <li>
      <slot {item} />
    </li>
  {/each}
</ul>
