const findMatching = (drivers, name) => {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

const fuzzyMatch = (drivers, letters) => {
  return drivers.filter(driver => driver.startsWith(letters));
};

const matchName = (drivers, name) => {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
};