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

export const Button = ({
  className,
  type,
  primary,
  backgroundColor,
  size,
  label,
  children,
  disabled,
  ...props
}) => {
  const prefixCls = "choco-button";
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

Button.defaultProps = {
  size: SIZES.default,
  type: TYPES.default,
  onClick: undefined,
  disabled: false,
};
