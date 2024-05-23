import React, { useState } from "react";
import { datas } from "../../constants/items";
import ItemData from "../../components/item";
import { ElementEnum, ElementItem } from "../../interfaces/element";
import CustomElement from "../../components/custom-element";
import { uuidv4 } from "../../utils/generate-uuid";
import CustomForm from "../../components/forms";
import { Link } from "react-router-dom";

const initialValue = {
  id: "",
  components: ElementEnum.ElementButton,
  prop: {},
};

const AdminPage: React.FC = () => {
  const [instances, setInstances] = useState<ElementItem[]>([]);
  const [selectedInstance, setSelectedInstance] =
    useState<ElementItem>(initialValue);

  const handleOnDrag = (e: React.DragEvent, type: ElementEnum) => {
    e.dataTransfer.setData("type", type);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const id = uuidv4();
    const type = e.dataTransfer.getData("type") as ElementEnum;
    setInstances([
      ...instances,
      { id, components: type, prop: { text: "", message: "" } },
    ]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSelect = (item: ElementItem) => {
    setSelectedInstance(item);
  };

  const callback = (item: ElementItem) => {
    setSelectedInstance(item);

    const items = [...instances];
    const newItems = items.map((i) => {
      if (i.id === item.id) {
        return {
          ...item,
        };
      }

      return { ...i };
    });

    setInstances(newItems);
  };

  const handleClear = () => {
    setInstances([]);
    setSelectedInstance(initialValue);
  };

  const handleSave = () => {
    localStorage.setItem("instances", JSON.stringify(instances));
  };
  return (
    <div className="admin-page">
      <div className="left">
        {datas.map((data) => {
          return (
            <ItemData key={data.id} data={data} handleOnDrag={handleOnDrag} />
          );
        })}
      </div>
      <div className="right" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <div className="section-info">
          <div className="info">
            <div className="action">
              <button className="btn" onClick={handleSave}>
                Save
              </button>
              <button className="btn" onClick={handleClear}>
                Clear
              </button>
              <Link to={"/consumer"} target="_blank">
                <button className="btn">View</button>
              </Link>
            </div>
            <p>Instance: {instances.length}</p>
            <p>
              Config:{" "}
              {selectedInstance.id ? JSON.stringify(selectedInstance) : ""}
            </p>
          </div>
          <div className="list-item">
            {instances.map((instance) => {
              return (
                <CustomElement
                  handleSelect={handleSelect}
                  key={instance.id}
                  item={instance}
                />
              );
            })}
          </div>
        </div>
        <div className="section-form">
          {!!selectedInstance.id && (
            <CustomForm callback={callback} item={selectedInstance} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
