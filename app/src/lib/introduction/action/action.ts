export const focusMount = (node: HTMLElement, parameter: string) => {

  node.focus();

  return {
    update(parameter: string) {
      // the value of `parameter` has changed
		},
    destroy() {
     // the node has been removed from the DOM
    },
  };
};
