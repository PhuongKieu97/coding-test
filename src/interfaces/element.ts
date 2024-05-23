export enum ElementEnum {
  ElementButton = "ElementButton",
  ElementParagraph = "ElementParagraph",
}

export interface Property {
  text?: string;
  message?: string;
}

export interface ElementItem {
  id: string;
  components: ElementEnum;
  prop: Property;
}
