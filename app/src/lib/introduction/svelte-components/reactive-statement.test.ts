import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";

import ReactiveStatement from "./reactive-statement.svelte";

describe("ReactiveStatement", () => {
  test("inital render", () => {
    render(ReactiveStatement);

    const title = screen.getByRole("heading", { level: 5 });

    expect(title).toHaveTextContent("Default Title");
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
    expect(screen.getByText("Doubled: 0")).toBeInTheDocument();
    expect(screen.getByText("Squared: 0")).toBeInTheDocument();
  });

  test("props", () => {
    render(ReactiveStatement, { title: "Hello World" });

    const title = screen.getByRole("heading", { level: 5 });

    expect(title).toHaveTextContent("Hello World");
  });

  test("count button", async () => {
    const user = userEvent.setup();
    render(ReactiveStatement);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
    expect(screen.getByText("Doubled: 2")).toBeInTheDocument();
    expect(screen.getByText("Squared: 1")).toBeInTheDocument();

    await user.click(decrementButton);
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
    expect(screen.getByText("Doubled: 0")).toBeInTheDocument();
    expect(screen.getByText("Squared: 0")).toBeInTheDocument();
  });
});
