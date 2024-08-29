import { Empty } from "../components/index";

export default {
  title: "Components/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { description: "No Data" },
};

export const NoData = {
  args: {},
};

export const HeightEmpty = {
  args: {
    height: 120,
  },
};

export const StyleEmpty = {
  args: {
    style: {
      height: '120px',
    }
  },
};
