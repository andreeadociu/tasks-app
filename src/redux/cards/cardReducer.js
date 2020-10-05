import uuid from "uuid/v4";

export const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [
        ...state,
        {
          id: uuid(),
          title: action.task.title,
          content: action.task.content,
          status: action.task.status,
        },
      ];
    case "EDIT_CARD":
      return state.map((task) =>
        task.id === action.task.id
          ? {
              ...task,
              title: action.task.title,
              content: action.task.content,
              status: action.task.status,
            }
          : task
      );
    case "COMPLETE_TASK":
      return state.map((task) =>
        task.id === action.id
          ? {
              ...task,
              status: action.status,
            }
          : task
      );
    default:
      return state;
  }
};
