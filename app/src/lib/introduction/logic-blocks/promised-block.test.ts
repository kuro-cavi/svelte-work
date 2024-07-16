import { render, screen, waitFor } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import PromisedBlock from "./promised-block.svelte";

describe("PromisedBlock", () => {
  test("inital render", () => {
    render(PromisedBlock);

    expect(screen.getByText("...waiting")).toBeInTheDocument();
  });

  test("promise was fulfilled. `value is: OK!` is displayed", async () => {
    render(PromisedBlock);
    
    await waitFor(() => expect(screen.getByText("value is: OK!")).toBeInTheDocument(), {timeout: 3500})
  })

  test("promise was rejected. `error is: ...` is displayed", async () => {
    const rejected = async () => {
      throw new Error('Test Error');
    };

    render(PromisedBlock, {promise: rejected});
    
    await waitFor(() => expect(screen.getByText("error is: Test Error")).toBeInTheDocument(), {timeout: 100})
  });
});
