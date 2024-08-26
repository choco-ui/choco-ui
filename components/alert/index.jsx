import cls from "classnames";
import PropTypes from "prop-types";

import { SuccessIcon, WarningIcon, ErrorIcon, InfoIcon } from "../icon";
import "./index.less";

const prefixCls = "choco-alert";

const TYPE = {
  success: {
    value: "success",
    icon: <SuccessIcon />,
  },

  warning: {
    value: "warning",
    icon: <WarningIcon />,
  },
  error: {
    value: "error",
    icon: <ErrorIcon />,
  },
  info: {
    value: "info",
    icon: <InfoIcon />,
  },
};

export const Alert = ({ children, type, className, showIcon, message }) => {
  const containerCls = cls(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
  });

  const renderIcon = () => {
    return showIcon && (TYPE[type]?.icon || <SuccessIcon />);
  };

  return (
    <div className={containerCls}>
      <span className={`${prefixCls}-icon`}>{renderIcon()}</span>
      {message && <span>{message}</span>}
      {children && <span>{children}</span>}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPE)),
};

Alert.defaultProps = {
  type: TYPE.info,
  showIcon: false,
};
