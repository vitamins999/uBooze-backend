// Capitalise first letter
export const capitaliseFirstLetter = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

// Takes a postcode and fetches a list of nearby supermarkets, using the API endpoint
// designed for that purpose.
export const fetchSupermarkets = async (postcode) => {
  const res = await fetch(
    `http://localhost:3001/api/products/postcode?postcode=${postcode}`
  );
  return res.json();
};

// Creates a query string of an array supermarkets array, to be sent to the API.
export const createQueryString = (supermarketList) => {
  const data = supermarketList.map((supermarket) => {
    const capitalisedSupermarket = capitaliseFirstLetter(supermarket);
    return `&supermarkets=${capitalisedSupermarket}`;
  });
  return data.join('');
};

// Convert price from integer to GBP.
export const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

// Return the relevant supermarket logo SVG for an image string.
export const supermarketLogo = (supermarket) => {
  if (supermarket === 'Waitrose') {
    return '/waitrose_logo.svg';
  } else if (supermarket === "Sainsbury's") {
    return '/sainsburys_logo.svg';
  } else if (supermarket === 'Tesco') {
    return '/tesco_logo.svg';
  }
};
