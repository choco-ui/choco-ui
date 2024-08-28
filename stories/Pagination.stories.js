import { fn } from "@storybook/test";
import { Pagination } from "../components/index";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    total: 0,
    current: 2,
    pageChange: fn(),
    showTotal: false,
  },
};

export const NormalPagination = {
  args: { total: 8 },
};

export const SelectedPagination = {
  args: { total: 5, current: 1 },
};

export const Totalgination = {
  args: {
    total: 5,
    current: 2,
    showTotal: true,
    locale: { prevText: "前一页", nextText: "后一页" },
  },
};

export const Customagination = {
  args: {
    total: 5,
    current: 2,
  },
};
