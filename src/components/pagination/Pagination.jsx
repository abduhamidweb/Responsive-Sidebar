import React from "react";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

const Paginations = () => {
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  return (
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={1}
      total={500}
    />
  );
};

export default Paginations;
