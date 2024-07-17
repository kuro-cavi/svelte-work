import { writable, type Readable } from "svelte/store";
import { getContext, setContext } from "svelte";

interface State {
  current: number;
}

interface CountStore extends Readable<State> {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const countStore = (): CountStore => {
  const state = { current: 0 };

  const { subscribe, set, update } = writable<State>(state);

  return {
    subscribe,
    increment: () => update((state) => ({ current: state.current + 1 })),
    decrement: () => update((state) => ({ current: state.current - 1 })),
    reset: () => set({ current: 0 }),
  };
};

export const COUNT_CONTEXT_KEY = "count_context_store";
export const createCountContext = () => setContext(COUNT_CONTEXT_KEY, countStore());
export const getCountContext = () => getContext<CountStore>(COUNT_CONTEXT_KEY);
