import React from "react";

const Tabs = (props) => {
  const tabed = (id) => {
    props.setActive(id);
  };
  return (
    <>
      <ul className="nav justify-content-center">
        {props.list.map((item) => (
          <li
            key={item.id}
            className={`nav-item mx-3 btn ${
              item.id === props.activeTab.id
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => tabed(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <hr />

      <h2>{props.activeTab.content}</h2>
    </>
  );
};

export default Tabs;
