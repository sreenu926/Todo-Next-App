import React from "react";

const Todo = ({
  id,
  title,
  description,
  mongoId,
  complete,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <tr className=" border-b border-gray-200">
      <th
        scope="row"
        className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id + 1}
      </th>
      <td className={`px-6 text-center py-4 ${complete ? "line-through" : ""}`}>
        {title}
      </td>
      <td className={`px-6 text-center py-4 ${complete ? "line-through" : ""}`}>
        {description}
      </td>
      <td className="px-6 text-center py-4">
        {complete ? "Completed" : "Pending"}
      </td>
      <td className="px-6 py-4 flex justify-around gap-2">
        <button
          onClick={() => deleteTodo(mongoId)}
          className="py-2 px-4 bg-red-500 rounded text-white"
        >
          Delete
        </button>
        {complete ? (
          ""
        ) : (
          <button
            onClick={() => completeTodo(mongoId)}
            className={`py-2 px-4 bg-green-500 rounded text-black`}
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
