import React from "react";
import { ElementEnum, ElementItem } from "../../interfaces/element";

interface CustomFormProps {
  item: ElementItem;
  callback: (e: ElementItem) => void;
}

const CustomForm: React.FC<CustomFormProps> = (props) => {
  const {
    item: { components, prop },
    callback,
  } = props;

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemChange = { ...props.item };
    const { value, name } = e.target;
    Object.assign(itemChange, {
      prop: {
        ...itemChange.prop,
        [name]: value,
      },
    });

    callback(itemChange);
  };

  const renderForm = () => {
    switch (components) {
      case ElementEnum.ElementButton:
        return (
          <form className="custom-form">
            <div>
              <p>Button Text</p>
              <input name="text" onChange={handleOnchange} value={prop.text} />
            </div>
            <div>
              <p>Alert Message</p>
              <input
                name="message"
                onChange={handleOnchange}
                value={prop.message}
              />
            </div>
          </form>
        );
      case ElementEnum.ElementParagraph:
        return (
          <form className="custom-form">
            <div>
              <p>Paragraph Text</p>
              <input name="text" onChange={handleOnchange} value={prop.text} />
            </div>
          </form>
        );
    }
  };

  return <div>{renderForm()}</div>;
};

export default CustomForm;
