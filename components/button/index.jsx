import React from "react";
import PropTypes from "prop-types";
import cls from "classnames";

import "./index.less";

const SIZES = {
  small: "small",
  default: "default",
  large: "large",
};

const TYPES = {
  primary: "primary",
  default: "default",
  warning: "warning",
  success: "success",
  error: "error",
  info: "info",
};

const prefixCls = "choco-button";

export const Button = ({
  className,
  primary,
  backgroundColor,
  label,
  children,
  size = SIZES.default,
  type = TYPES.default,
  disabled = false,
  ...props
}) => {
  const baseProps = {
    ...props,
    className: cls(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-size-${size}`]: size,
      [`${prefixCls}-disabled`]: disabled,
    }),
  };

  return (
    <button type="button" {...props} {...baseProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZES)),
  type: PropTypes.oneOf(Object.values(TYPES)),
  onClick: PropTypes.func,
};
