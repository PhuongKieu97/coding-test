import { ElementEnum, ElementItem } from "../../interfaces/element";

interface CustomElementProps {
  item: ElementItem;
  handleSelect: (item: ElementItem) => void;
  mode?: "view" | "edit";
}

const CustomElement: React.FC<CustomElementProps> = (props) => {
  const {
    item: { components, prop },
    handleSelect,
    mode = "edit",
  } = props;

  const handleClick = (e: ElementItem) => {
    if (mode === "edit") {
      handleSelect(e);
    } else if (mode === "view" && prop.message) {
      alert(prop.message);
    }
  };
  const renderElement = () => {
    switch (components) {
      case ElementEnum.ElementButton:
        return (
          <button onClick={() => handleClick(props.item)}>
            {prop.text || "Button"}
          </button>
        );
      case ElementEnum.ElementParagraph:
        return (
          <p onClick={() => handleClick(props.item)}>
            {prop.text || "Paragraph"}
          </p>
        );
    }
  };

  return <>{renderElement()}</>;
};

export default CustomElement;
