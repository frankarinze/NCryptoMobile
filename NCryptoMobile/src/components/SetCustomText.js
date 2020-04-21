import { Text } from "react-native";

export default function SetCustomText(customProps) {
  const TextRender = Text.render;
  const initialDefaultProps = Text.defaultProps;
  Text.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  };
  Text.render = function render(props) {
    let oldProps = props;
    props = { ...props, style: [customProps.style, props.style] };
    try {
      return TextRender.apply(this, arguments);
    } finally {
      props = oldProps;
    }
  };
}