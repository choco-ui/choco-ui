import cls from "classnames";
import PropTypes from "prop-types";

import { EmptyIcon } from "../icon";
import "./index.less";

const prefixCls = "choco-empty";

export const Empty = ({
  className,
  description,
  height,
  style,
  icon = <EmptyIcon />,
}) => {
  return (
    <div className={cls(prefixCls, className)} style={{ height, ...style }}>
      <div className={cls(`${prefixCls}-icon`)}>{icon}</div>
      <div className={cls(`${prefixCls}-description`)}>{description}</div>
    </div>
  );
};

Empty.propTypes = {
  icon: PropTypes.node,
  description: PropTypes.string,
};
