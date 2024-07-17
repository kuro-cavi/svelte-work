<script lang="ts">
  import {
    Input,
    Checkbox,
    Card,
    Radio,
    Toggle,
    Select,
  } from "flowbite-svelte";

  let input: string = "";
  let check: boolean = false;
  let radio: string = "1";
  let toggle: boolean = false;
  let selected: string = "";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" },
  ];
</script>

<div class="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
  <Card class="justify-between leading-4">
    <Input id="input" bind:value={input} />
    <p>value: {input}</p>
  </Card>

  <Card class="justify-between">
    <Checkbox id="checkbox" bind:checked={check}>Checkbox</Checkbox>
    <p>value: {check}</p>
  </Card>

  <Card class="justify-between">
    <Radio name="radio" value="1" bind:group={radio}>Radio 1</Radio>
    <Radio name="radio" value="2" bind:group={radio}>Radio 2</Radio>
    <p>value: {radio}</p>
  </Card>

  <Card class="justify-between">
    <Toggle checked={toggle}>Toggle</Toggle>
    <p>value: {toggle}</p>
  </Card>

  <Card class="justify-between">
    <Select class="mt-2" items={countries} bind:value={selected} />
    <p>value: {selected}</p>
  </Card>
</div>
