import { NORMALIZE_DATA } from "./constants";

const getItemDataValue = (normalizeData, data) =>
  normalizeData.find(({ name }) => data.name === name).value;

const getNormalizedData = (normalizeData, data) =>
  data.map((item) => {
    return {
      ...item,
      value: getItemDataValue(normalizeData, item),
    };
  });

const setNormalizedData = (data) => {
  return {
    dough: getNormalizedData(NORMALIZE_DATA.dough, data.dough),
    sizes: getNormalizedData(NORMALIZE_DATA.sizes, data.sizes),
    sauces: getNormalizedData(NORMALIZE_DATA.sauces, data.sauces),
    ingredients: getNormalizedData(
      NORMALIZE_DATA.ingredients,
      data.ingredients
    ),
  };
};

export { setNormalizedData };
