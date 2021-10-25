import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import { getServicesApi } from "../../Services/authApi";
import ServiceItem from "./ServiceItem";

import "./index.css";

export default function ServicesCom(props) {
  const categoriesSelect = [];
  const uniqueValue = new Set();

  const [searchInput, setsearchInput] = useState("");
  const [serviceItem, setServiceItem] = useState([]);

  const [options, setOptions] = useState([
    // { id: 1, country: "America" },
    // { id: 2, country: "India" },
    // { id: 3, country: "Africa" },
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const getOnChangeSearch = (value) => {
    // console.log(value)
    setsearchInput(value);
    setSelectedOptions(value);
  };

  const searchedResults = serviceItem.filter((each) =>
    each.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  // console.log(searchedResults)

  useEffect(() => {
    getServicesApi()
      .then((res) => {
        const { items } = res.data;
        setServiceItem(items);
        // eslint-disable-next-line no-lone-blocks
        {
          items.map(
            (each) => (categoriesSelect[each.category.name] = each.category.id)
          );
        }
        console.log(categoriesSelect);
        setOptions(categoriesSelect);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className=" mt-2 card">
      <h1 className="text-primary">Services</h1>
      {/* <input type="search" placeholder="Type name to search" onChange={(event) => getOnChangeSearch(event.target.value)} /> */}

      {/* <div  className="select-card"  >
                <Select style={{width:"250px"}} options={ options.map( ( item ) => { 
                    return { value: item.category.id, label: item.category.name}
                } ) } values={selectedOptions} onChange={(value) => setSelectedOptions(...[value])} />
            </div>  */}

      <div className="select-card">
        <Select
          style={{ width: "250px" }}
          options={options[0]}
          value={selectedOptions}
          onChange={(event) => setSelectedOptions(event)}
        />
      </div>

      <div className="mt-5 d-flex flex-row justify-content-center flex-wrap m-2 p-2">
        {searchedResults.map((each) => (
          <ServiceItem serviceDetails={each} key={each.id} />
        ))}
      </div>
    </div>
  );
}
