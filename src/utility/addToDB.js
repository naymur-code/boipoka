const getItems = () => {
  const items = localStorage.getItem("wishList");
  if (items) {
    const books = JSON.parse(items);
    return books;
  } else {
    return [];
  }
};

const addToLs = (id) => {
  const items = getItems();
  if (items.includes(id)) {
    alert("ai id asa");
  } else {
    items.push(id);
    const newItems = JSON.stringify(items);
    localStorage.setItem("wishList", newItems);
  }
};

export { addToLs,getItems};
