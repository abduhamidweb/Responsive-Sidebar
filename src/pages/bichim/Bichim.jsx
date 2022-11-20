import React, { useState } from "react";
import MainTop from "../../components/mainTop/MainTop";
import Pagination from "../../components/pagination/Pagination";
import Table from "../../components/Table/Table";
import Input from "../../components/Input/Input";

export default function Bichim() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-100 px-4">
      <MainTop panelName={"Bichim bo'limi"} panelRole={"Admin"} />

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
        <Table />
        <Table />
        </div>
        <Pagination />
      </div>
    </div>
  )
}
