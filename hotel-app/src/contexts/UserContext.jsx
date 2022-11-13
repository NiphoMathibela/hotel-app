import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [terms, setTerms] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState("password");
  const [searchTerm, setSearchTerm] = useState("");
  const hotels = [
    {
      id: 1,
      backImg: "https://images.unsplash.com/photo-1546484488-2a1430996887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      hotelName: "The Lawn",
      rating: 4.9,
      price: 100,
      location: "Cannuga"
    },
    {
      id: 2,
      backImg: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBpbiUyMGJhbGl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hotelName: "Citadenes Berawa",
      rating: 4.0,
      price: 130,
      location: "Bandung"
    },
    {
      id: 3,
      hotelName: "Tagallalang",
      backImg: "https://images.unsplash.com/photo-1527246201253-ce566026066e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      rating: 4.2,
      price: 150,
      location: "Indonesia"
    },
    {
      id: 4,
      hotelName: "Monkey Watch",
      backImg: "https://images.unsplash.com/photo-1506126799754-92bc47fc5d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      rating: 5.0,
      price: 110,
      location: "Ubud"
    },
    {
      id: 5,
      hotelName: "Hotel Bundaran",
      backImg: "https://images.unsplash.com/photo-1620773257573-48847d30bf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rating: 4.0,
      price: 90,
      location: "Jakarta"
    },
    {
      id: 3,
      hotelName: "Tagallalang",
      backImg: "https://images.unsplash.com/photo-1527246201253-ce566026066e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      rating: 4.2,
      price: 150,
      location: "Indonesia"
    },
    {
      id: 4,
      hotelName: "Monkey Watch",
      backImg: "https://images.unsplash.com/photo-1506126799754-92bc47fc5d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      rating: 5.0,
      price: 110,
      location: "Ubud"
    },
    {
      id: 5,
      hotelName: "Hotel Bundaran",
      backImg: "https://images.unsplash.com/photo-1620773257573-48847d30bf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      rating: 4.0,
      price: 90,
      location: "Jakarta"
    }
    
  ]

  const userDetails = {
    name: { name },
    email: { email },
    phoneNum: { phoneNum },
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        pwd,
        setPwd,
        phoneNum,
        setPhoneNum,
        terms,
        setTerms,
        visible,
        setVisible,
        type,
        setType,
        userDetails,
        name,
        setName,
        searchTerm,
        setSearchTerm,
        hotels
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
