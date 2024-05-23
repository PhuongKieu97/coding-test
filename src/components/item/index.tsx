import { ElementEnum } from "../../interfaces/element";

interface ItemDataProp {
  data: { id: string; name: string; type: ElementEnum };
  handleOnDrag: (e: React.DragEvent, type: ElementEnum) => void;
}

const ItemData: React.FC<ItemDataProp> = (props) => {
  const {
    data: { name, type },
    handleOnDrag,
  } = props;
  return (
    <div
      className="item-data"
      draggable
      onDragStart={(e) => handleOnDrag(e, type)}
    >
      <div className="box"></div>
      <p>{name}</p>
    </div>
  );
};

export default ItemData;
