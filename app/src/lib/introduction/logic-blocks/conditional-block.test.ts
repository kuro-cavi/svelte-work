import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import ConditionalBlock from "./conditional-block.svelte";

describe("ConditionalBlock", () => {
  test("inital render", () => {
    render(ConditionalBlock);

    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
    expect(screen.getByText("is less than 5")).toBeInTheDocument();
  });

  test("increment counter display case", async () => {
    const user = userEvent.setup();
    render(ConditionalBlock);

    const incrementButton = screen.getByRole("button", { name: "Increment" });

    // If the counter is less than 5, "is less than 5" is displayed
    for (let i = 0; i < 4; i++) {
      await user.click(incrementButton);
    }
    expect(screen.getByText("Counter: 4")).toBeInTheDocument();
    expect(screen.getByText("is less than 5")).toBeInTheDocument();

    // When the counter is between 5 and 10, "is between 5 and 10" is displayed.
    for (let i = 0; i < 5; i++) {
      await user.click(incrementButton);
    }
    expect(screen.getByText("Counter: 9")).toBeInTheDocument();
    expect(screen.getByText("is between 5 and 10")).toBeInTheDocument();

    // If the counter is greater than 10, "is greater than 10" is displayed
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText("Counter: 11")).toBeInTheDocument();
    expect(screen.getByText("is greater than 10")).toBeInTheDocument();
  });
});
