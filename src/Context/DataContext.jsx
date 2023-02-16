import { createContext, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "addBankInfo": {
      // console.log(action);
      return [...state, action.payload];
    }
    case "removeBankInfo": {
      return state.filter((s) => s.id !== action.id);
    }
    case "updateBakInfo": {
      return state.map((s) => {
        if (s.id === action.newBankData.id) {
          return action.newBankData;
        } else {
          return s;
        }
      });
    }
    default:
      return state;
  }
};

const reducer1 = (branch, action) => {
  switch (action.type) {
    case "ADD_BRANCH": {
      // console.log(action);
      return [...branch, action.payload];
    }
    case "REMOVE_BRANCH": {
      return branch.filter((b) => b.id !== action.id);
    }
    case "UPDATE_BRANCH": {
      return branch.map((b) => {
        if (b.id === action.payload.id) {
          return action.payload;
        } else {
          return b;
        }
      });
    }
    default:
      return branch;
  }
};

const reducer2 = (cus, action) => {
  switch (action.type) {
    case "ADD": {
      console.log(action);
      return [...cus, action.payload];
    }
    case "DELETE": {
      return cus.filter((c) => c.id !== action.id);
    }
    case "UPDATE": {
      return cus.map((c) => {
        if (c.id === action.payload.id) {
          return action.payload;
        } else {
          return c;
        }
      });
    }
    default:
      return cus;
  }
};

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [branch, dispatch1] = useReducer(reducer1, []);
  const [cus, dispatch2] = useReducer(reducer2, []);
  const [newBankInfo, setNewBankInfo] = useState("");
  const [newBranchInfo, setNewBranchInfo] = useState("");
  const [newCusInfo, setNewCusInfo] = useState("");

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        newBankInfo,
        setNewBankInfo,
        branch,
        dispatch1,
        newBranchInfo,
        setNewBranchInfo,
        cus,
        dispatch2,
        newCusInfo,
        setNewCusInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
