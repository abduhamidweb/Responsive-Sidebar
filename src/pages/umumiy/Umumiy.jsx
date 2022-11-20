import React, { useState } from "react";
import MainTop from "../../components/mainTop/MainTop";
import Pagination from "../../components/pagination/Pagination";
import Table from "../../components/Table/Table";
import Input from "../../components/Input/Input";
import "./Umumiy.css";

const Umumiy = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="umumiy-container px-4">
      <MainTop panelName={"Umumiy ma'lumotlar"} panelRole={"Admin"} />

      <div>
        <div className="w-100 d-flex justify-content-between flex-wrap gap-4 mb-5">
          <Input
            inputType={"text"}
            inputPlaceholder={"Search"}
            inputName={"input"}
            inputClassName={"form-control w-25 me-1"}
            labelName={"userName"}
            inputValue={searchValue}
            setInputValue={setSearchValue}
          />
          <Input
            inputType={"text"}
            inputPlaceholder={"Search"}
            inputName={"input"}
            inputClassName={"form-control w-25"}
            labelName={"userName"}
            inputValue={searchValue}
            setInputValue={setSearchValue}
          />
          <Input
            inputType={"text"}
            inputPlaceholder={"Search"}
            inputName={"input"}
            inputClassName={"form-control w-25"}
            labelName={"userName"}
            inputValue={searchValue}
            setInputValue={setSearchValue}
          />
          <Input
            inputType={"text"}
            inputPlaceholder={"Search"}
            inputName={"input"}
            inputClassName={"form-control w-25"}
            labelName={"userName"}
            inputValue={searchValue}
            setInputValue={setSearchValue}
          />
        </div>
        <div className="mb-5">
        <Table />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Umumiy;
