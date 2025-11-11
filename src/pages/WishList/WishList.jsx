import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getItems } from "../../utility/addToDB";

const WishList = () => {
  const [items, setItems] = useState([]);
  const [sort,setSort]=useState('')
  const books = useLoaderData();

  useEffect(() => {
    const wishList = getItems();
    const item = books.filter((i) => wishList.includes(i.bookId));
    setItems(item);
  }, []);

  const handleSort=(sort)=>{
    setSort(sort);
    if(sort==='pages'){
      const sortByPage=[...items].sort((a,b)=>a.totalPage-b.totalPage)
     setItems(setSort)
    }

  }

  return (
    <div>
      <h1>WishList</h1>
      <details className="dropdown">
        <summary className="btn m-1">Sort by {sort?sort:''}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={()=>handleSort('pages')}>Pages</a>
          </li>
          <li>
            <a onClick={()=>handleSort('rating')}>Rating</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList className="flex">
          <Tab>
            <button className="btn">one</button>
          </Tab>
          <Tab>
            <button className="btn">two</button>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>hello world</h2>
          {items.map((item, id) => (
            <h3 key={id}>{item.bookName}</h3>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>ami second</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WishList;
