import React, { useEffect, useState } from "react";
import { ElementItem } from "../../interfaces/element";
import CustomElement from "../../components/custom-element";

const ConsumerPage: React.FC = () => {
  const [instances, setInstances] = useState<ElementItem[]>([]);

  useEffect(() => {
    const items = localStorage.getItem("instances");
    if (items) {
      setInstances(JSON.parse(items));
    }
  }, []);
  return (
    <div className="consumer">
      {instances.map((i) => {
        return (
          <CustomElement
            key={i.id}
            item={i}
            mode="view"
            handleSelect={() => {}}
          />
        );
      })}
    </div>
  );
};

export default ConsumerPage;
