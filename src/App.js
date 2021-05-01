import "./App.css";
import { Card } from "./Card";
// import { useState } from "react";

function App() {
  // const [name, setName] = useState("");
  // console.log("NAME: ", name);

  const location = "İstanbul";

  const array = [
    {
      name: "Erhan",
      age: 30,
      location: "İstanbul",
      img:
        "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
    },
    {
      name: "Mehmet",
      age: 35,
      location: "Ankara",
      img:
        "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
    },
    {
      name: "Erhan",
      age: 30,
      location: "İstanbul",
      img:
        "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
    },
    {
      name: "Mehmet",
      age: 35,
      location: "Ankara",
      img:
        "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
    },
    {
      name: "Erhan",
      age: 30,
      location: "İstanbul",
      img:
        "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
    },
    {
      name: "Mehmet",
      age: 35,
      location: "Ankara",
      img:
        "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
    },
    {
      name: "Erhan",
      age: 30,
      location: "İstanbul",
      img:
        "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
    },
    {
      name: "Mehmet",
      age: 35,
      location: "Ankara",
      img:
        "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
    },
  ];

  return (
    <div className="App">
      {/* <div className="header">
        <h1>React Basics</h1>
      </div> */}

      {array.map((item) => (
        <Card name={item.name} age={item.age} location={item.location} img={item.img}/>
      ))}

      {/* <Card name="Erhan" age={30} /> */}
    </div>
  );
}

export default App;
