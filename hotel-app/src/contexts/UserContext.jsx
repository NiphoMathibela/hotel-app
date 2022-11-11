import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [terms, setTerms] = useState(false);

  return (
    <UserContext.Provider value={{ email, setEmail, pwd, setPwd, phoneNum, setPhoneNum, terms, setTerms}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
