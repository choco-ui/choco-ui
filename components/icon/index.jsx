import React from "react";
import {
  FiVolume2,
  FiLoader,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
  FiUser,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

export const InfoIcon = (props) => <FiVolume2 {...props} />;
export const LoadingIcon = (props) => <FiLoader {...props} />;
export const SuccessIcon = (props) => <FiCheckCircle {...props} />;
export const ErrorIcon = (props) => <FiXCircle {...props} />;
export const WarningIcon = (props) => <FiAlertCircle {...props} />;

export const UserIcon = props => <FiUser {...props} />;

export const ArrowRightIcon = props => <FiChevronRight {...props} />;
export const ArrowLeftIcon = props => <FiChevronLeft {...props} />;
