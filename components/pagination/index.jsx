import React, { useState } from "react";
import cls from "classnames";
import PropTypes from "prop-types";

import { ArrowLeftIcon, ArrowRightIcon } from "../icon/index";
import "./index.less";

const prefixCls = "choco-pagination";

export const Pagination = ({
  className,
  current,
  pageChange,
  total = 0,
  showTotal = false,
  locale = { prevText: <ArrowLeftIcon />, nextText: <ArrowRightIcon /> },
}) => {
  const [selectedPage, setSelectedPage] = useState(current);

  const handlePageChange = (page) => {
    setSelectedPage(page);
    pageChange(page);
  };

  const handlePrev = () => {
    if (selectedPage <= 1) {
      return;
    }
    const page = selectedPage - 1;
    setSelectedPage(page);
    pageChange(page);
  };

  const handleNext = () => {
    if (selectedPage >= total) {
      return;
    }
    const page = selectedPage + 1;
    setSelectedPage(page);
    pageChange(page);
  };

  return (
    <ul className={cls(prefixCls, className)}>
      {!!showTotal && (
        <li className={cls(`${prefixCls}-total`, `${prefixCls}-item`)}>
          共{total}条
        </li>
      )}
      <li
        className={cls(`${prefixCls}-item`, {
          [`${prefixCls}-item-disabled`]: selectedPage <= 1,
        })}
        onClick={handlePrev}
      >
        {locale.prevText}
      </li>

      {Array.from({ length: total }).map((_, index) => {
        const page = index + 1;
        return (
          <li
            className={cls(`${prefixCls}-item`, {
              [`${prefixCls}-item-selected`]: page === selectedPage,
            })}
            key={index}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </li>
        );
      })}

      <li
        className={cls(`${prefixCls}-item`, {
          [`${prefixCls}-item-disabled`]: selectedPage >= total,
        })}
        onClick={handleNext}
      >
        {locale.nextText}
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  current: PropTypes.number,
  pageChange: PropTypes.func,
  showTotal: PropTypes.bool,
  locale: PropTypes.shape({
    prevText: PropTypes.node,
    nextText: PropTypes.node,
  }),
};
