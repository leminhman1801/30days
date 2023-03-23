const container = document.createElement("container");
container.className = "test-container";

document.body.appendChild(container);

const postItem = React.createElement(
  "redom",
  {
    className: "hello",
  },
  React.createElement(
    "div",
    {
      title: "Test",
    },
    "Text"
  )
);

ReactDOM.render(postItem, container);

// const root = ReactDOM.createRoot(container)
//root.render(postItem)
