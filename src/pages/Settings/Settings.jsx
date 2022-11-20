import React, { useState } from "react";
import MainTop from "../../components/mainTop/MainTop";
import Table from "../../components/Table/Table";
import Input from "../../components/Input/Input";


const Settings = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-100 px-4">
      <MainTop panelName={"Settings"} panelRole={"Admin"} />

      <div>
        <div className="w-100 d-flex justify-content-around flex-wrap gap-4 mb-5">
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
      </div>
    </div>
  )
};

export default Settings;