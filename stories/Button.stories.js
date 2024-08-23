import { fn } from "@storybook/test";
import { Button } from "../components/index";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    children: "Button",
    size: "large",
    type: "primary",
    disabled: true,
  },
};
export const Success = {
  args: {
    children: "Button",
    size: "default",
    type: "success",
  },
};
export const Warning = {
  args: {
    children: "Button",
    size: "default",
    type: "warning",
  },
};

export const Error = {
  args: {
    children: "Button",
    size: "default",
    type: "error",
  },
};

export const Info = {
  args: {
    children: "Button",
    size: "default",
    type: "info",
  },
};

export const Large = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    children: "Button",
  },
};

export const Disabled = {
  args: {
    children: "Button",
    disabled: true,
  },
};
