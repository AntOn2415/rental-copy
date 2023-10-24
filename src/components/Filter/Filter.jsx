import React, { useState, useEffect } from "react";
import Select from "react-select";
import { fetchCarMakes, fetchCarPrices } from "../../helpers/filters";
import iconChevron from "../../images/icons.svg";
import {
  FilterContainerDiv,
  ContainerDiv,
  Label,
  ContainerInputDiv,
  ContainerSvg,
  P,
  LabelInput,
  Input,
  InputTo,
  FormBtn,
} from "./Filter.styled";
import { customSelectStyles } from "../../helpers/customSelectStyles";

const Filter = ({ onFilterChange, isLoading }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [isActiveSelect, setIsActiveSelect] = useState(false);
  const [makes, setMakes] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchCarMakes()
      .then(makes => {
        setMakes(makes);
      })
      .catch(error => {
        console.error(error);
      });

    fetchCarPrices()
      .then(prices => {
        setPrices(prices);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFilter = () => {
    const filter = {
      make: selectedMake,
      price: selectedPrice,
      minMileage,
      maxMileage,
    };
    onFilterChange(filter);
  };

  const handleMinMileageChange = e => {
    setMinMileage(e.target.value);
  };

  const handleMaxMileageChange = e => {
    setMaxMileage(e.target.value);
  };

  const handleSelectFocus = selectName => {
    setIsActiveSelect(selectName);
  };

  const makeOptions = makes.map(make => ({
    value: make,
    label: make,
  }));

  const priceOptions = prices.map(price => ({
    value: price,
    label: `${price}`,
  }));

  return (
    <form>
      <FilterContainerDiv>
        <ContainerDiv>
          <Label htmlFor="makeSelect">Car brand:</Label>
          <Select
            id="makeSelect"
            value={makeOptions.find(option => option.value === selectedMake)}
            onChange={selectedOption => setSelectedMake(selectedOption.value)}
            options={makeOptions}
            placeholder="Enter the text"
            styles={customSelectStyles}
            onFocus={() => handleSelectFocus("makeSelect")}
            onBlur={() => setIsActiveSelect(false)}
          />
          <ContainerSvg isActive={isActiveSelect === "makeSelect"}>
            <svg width="20" height="20">
              <use href={`${iconChevron}#icon-chevron`} />
            </svg>
          </ContainerSvg>
        </ContainerDiv>
        <ContainerDiv>
          <Label htmlFor="priceSelect">Price/1 hour</Label>
          <Select
            id="priceSelect"
            value={priceOptions.find(option => option.value === selectedPrice)}
            onChange={selectedOption => setSelectedPrice(selectedOption.value)}
            options={priceOptions}
            placeholder="To $"
            styles={customSelectStyles}
            onFocus={() => handleSelectFocus("priceSelect")}
            onBlur={() => setIsActiveSelect(false)}
          />
          <ContainerSvg isActive={isActiveSelect === "priceSelect"}>
            <svg width="20" height="20">
              <use href={`${iconChevron}#icon-chevron`} />
            </svg>
          </ContainerSvg>
        </ContainerDiv>
        <ContainerDiv>
          <P>Car mileage / km</P>
          <div style={{ display: "flex" }}>
            <ContainerInputDiv>
              <LabelInput htmlFor="minMileageInput">From</LabelInput>
              <Input
                type="number"
                id="minMileageInput"
                value={minMileage}
                onChange={handleMinMileageChange}
              />
            </ContainerInputDiv>
            <ContainerInputDiv>
              <LabelInput htmlFor="maxMileageInput">To</LabelInput>
              <InputTo
                type="number"
                id="maxMileageInput"
                value={maxMileage}
                onChange={handleMaxMileageChange}
              />
            </ContainerInputDiv>
          </div>
        </ContainerDiv>

        <FormBtn
          type="button"
          onClick={handleFilter}
          aria-label="Search for cars"
          aria-disabled={isLoading ? "true" : "false"}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </FormBtn>
      </FilterContainerDiv>
    </form>
  );
};

export default Filter;
