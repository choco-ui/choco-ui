import { Avatar } from "../components/index";

export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { shape: "circle", size: "default" },
};

export const Circle = {
  args: {
    shape: "circle",
  },
};

export const Square = {
  args: {
    shape: "square",
  },
};

export const CircleLarge = {
  args: {
    shape: "circle",
    size: 'large'
  },
};
export const CircleSmall = {
  args: {
    shape: "circle",
    size: 'small'
  },
};
