import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import LoopedBlock from "./looped-block.svelte";

describe("LoopedBlock", () => {
  test("inital render", () => {
    render(LoopedBlock);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("when empty, `No Colors!` is displayed", () => {
    render(LoopedBlock, {colors: []});
    
    expect(screen.getByText("No Colors!")).toBeInTheDocument();
  });
});
