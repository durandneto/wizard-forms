export type AppInterface = {
  count: number;
};

export type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: AppInterface };

export const init = (initialCount: AppInterface) => {
  return initialCount;
};

export default function reducer(
  state: AppInterface,
  action: Action
): AppInterface {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      return state;
  }
}
