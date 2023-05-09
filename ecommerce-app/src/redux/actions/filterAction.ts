import { FilterType } from "../../interfaces/interface";

export const updateFilter = (data: FilterType) => {
  return {
    type: "UPDATE_FILTER", 
    payload: data,
  };
};
