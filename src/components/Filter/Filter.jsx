import React, { useState } from "react";

import {
  FilterContainerDiv,
  ContainerDiv,
  Label,
  ContainerInputDiv,
  Select,
  Option,
  Input,
  InputTo,
  FormBtn,
} from "./Filter.styled";

const Filter = ({ onFilterChange, isLoading }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const makes = ["Volvo", "HUMMER", "Mitsubishi"];
  const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

  const handleFilter = () => {
    const filter = {
      make: selectedMake,
      price: selectedPrice,
      minMileage,
      maxMileage,
    };
    onFilterChange(filter);
  };

  return (
    <FilterContainerDiv>
      <ContainerDiv>
        <Label htmlFor="makeSelect">Car brand:</Label>
        <Select
          id="makeSelect"
          value={selectedMake}
          onChange={e => setSelectedMake(e.target.value)}
        >
          <Option value="">Enter the text</Option>
          {makes.map(make => (
            <Option key={make} value={make}>
              {make}
            </Option>
          ))}
        </Select>
      </ContainerDiv>
      <ContainerDiv>
        <Label htmlFor="priceSelect">Price/1 hour</Label>
        <Select
          id="priceSelect"
          value={selectedPrice}
          onChange={e => setSelectedPrice(e.target.value)}
        >
          <Option value="">To $</Option>
          {prices.map(price => (
            <Option key={price} value={price}>
              {`${price}`}
            </Option>
          ))}
        </Select>
      </ContainerDiv>
      <ContainerDiv>
        <Label htmlFor="minMileageInput maxMileageInput">Car mileage / km</Label>
        <ContainerInputDiv>
          <Input
            type="number"
            placeholder="From"
            id="minMileageInput"
            value={minMileage}
            onChange={e => setMinMileage(e.target.value)}
          />
          <InputTo
            type="number"
            placeholder="To"
            id="maxMileageInput"
            value={maxMileage}
            onChange={e => setMaxMileage(e.target.value)}
          />
        </ContainerInputDiv>
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
  );
};

export default Filter;
