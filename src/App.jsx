import React, { useEffect, useState } from "react";
import Form from "./Components/Form";

const App = () => {
  const [jobs, setJob] = useState([
    {
      id: 1,
      name: "PHP Dev",
    },
    {
      id: 2,
      name: "Laravel Dev",
    },
    {
      id: 3,
      name: "Java Dev",
    },
    {
      id: 4,
      name: "JavaScript Dev",
    },
  ]);


  
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form jobs={jobs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
