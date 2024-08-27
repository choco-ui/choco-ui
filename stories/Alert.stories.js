import { Alert } from "../components/index";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { showIcon: false, type: "success" },
};

export const Success = {
  args: {
    children: "Alert",
    type: "success",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laudantium provident maxime aliquid ratione, neque nostrum rerum obcaecati placeat possimus molestias soluta assumenda sint, natus nam suscipit incidunt. Molestiae, nisi?",
  },
};
export const Warning = {
  args: {
    children: "Alert",
    type: "warning",
  },
};

export const Error = {
  args: {
    children: "Alert",
    type: "error",
  },
};

export const Info = {
  args: {
    children: "Alert",
    type: "info",
  },
};

export const SuccessWithIcon = {
  args: {
    children: "Alert",
    type: "success",
    showIcon: true,
  },
};
export const WarningWithIcon = {
  args: {
    children: "Alert",
    type: "warning",
    showIcon: true,
  },
};

export const ErrorWithIcon = {
  args: {
    children: "Alert",
    type: "error",
    showIcon: true,
  },
};

export const InfoWithIcon = {
  args: {
    children: "Alert",
    type: "info",
    showIcon: true,
  },
};
