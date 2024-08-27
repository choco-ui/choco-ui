import PropTypes from "prop-types";
import cls from "classnames";

import { UserIcon } from "../icon";
import "./index.less";

const SIZE = {
  small: "small",
  default: "default",
  large: "large",
};

const SHAPE = {
  circle: "circle",
  square: "square",
};
const prefixCls = "choco-avatar";

export const Avatar = ({
  children,
  className,
  icon = <UserIcon />,
  size = "default",
  shape = "circle",
}) => {
  const cl = cls(prefixCls, className, {
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-size-${size}`]: size,
  });
  return (
    <div className={cl}>
      {icon}
      {children}
    </div>
  );
};

Avatar.propTypes = {
  shape: PropTypes.oneOf(Object.values(SHAPE)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  icon: PropTypes.element,
};
