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
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
