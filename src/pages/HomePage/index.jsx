import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Template from "../../components/Template";
import styles from "./Home.module.css";
import DataContext from "../../Context/DataContext";

const Home = () => {
  const {
    state,
    dispatch,
    setNewBankInfo,
    branch,
    dispatch1,
    setNewBranchInfo,
    cus,
    dispatch2,
    setNewCusInfo,
  } = useContext(DataContext);
  const navigate = useNavigate();

  const deleteBankInfo = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure to delete?")) {
      dispatch({
        type: "removeBankInfo",
        id,
      });
    }
  };

  const deleteBranchInfo = (bid) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure to delete?")) {
      dispatch1({
        type: "REMOVE_BRANCH",
        id: bid,
      });
    }
  };

  const deleteCusInfo = (cid) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure to delete?")) {
      dispatch2({
        type: "DELETE",
        id: cid,
      });
    }
  };

  return (
    <>
      <Template>
        {/* <div className="overflow-scroll"></div> */}
        <div className="row position-absolute">
          <div className="col-2"></div>
          <div className={`col-10 justify-content-center ${styles.row}`}>
            <div className="row mt-3">
              <div>
                {/* <h1>Bank Register</h1> */}
                <table className="table table-borderlesstable table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone No</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  {state.map((s) => (
                    <tbody className="g-2 align-items-center" key={s.id}>
                      <tr className="table table-striped">
                        <td>{s.name}</td>
                        <td>{s.phone}</td>
                        <td
                          className="me-2 my-2"
                          onClick={() => {
                            setNewBankInfo({
                              id: s.id,
                              name: s.name,
                              phone: s.phone,
                            });
                            navigate("/bank");
                          }}
                        >
                          Edit<i class="bi bi-pencil-square"></i>
                        </td>
                        <td onClick={() => deleteBankInfo(s.id)}>
                          Delete<i class="bi bi-trash3-fill"></i>
                        </td>
                      </tr>
                    </tbody>
                  ))}

                  <tbody className=" align-items-center">
                    <tr>
                      <td className="">
                        <Link to="/bank">
                          Rgister Here<i class="bi bi-sign-turn-left"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-borderlesstable table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Related Bank</th>
                      <th>Branch</th>
                      <th>Location</th>
                      <th>Phone</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>

                  {branch.map((b) => (
                    <tbody className="g-2 align-items-center" key={b.id}>
                      <tr className="table table-striped">
                        <td>{b.bankName}</td>
                        <td>{b.branchName}</td>
                        <td>{b.location}</td>
                        <td>{b.phone}</td>
                        <td
                          className="me-2 my-2"
                          onClick={() => {
                            setNewBranchInfo({
                              id: b.id,
                              bankName: b.bankName,
                              branchName: b.branchName,
                              location: b.location,
                              phone: b.phone,
                            });
                            navigate("/branch");
                          }}
                        >
                          Edit<i class="bi bi-pencil-square"></i>
                        </td>
                        <td onClick={() => deleteBranchInfo(b.id)}>
                          Delete<i class="bi bi-trash3-fill"></i>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                  <tbody className=" align-items-center">
                    <tr>
                      <td className="">
                        <Link to="/branch">
                          Rgister Here<i class="bi bi-sign-turn-left"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-borderlesstable table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>NRC</th>
                      <th>Phone</th>
                      <th>Account NO</th>
                      <th>Address</th>
                      <th>Gender</th>
                      <th>Bank</th>
                      <th>Branch</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  {cus.map((c) => (
                    <tbody className="g-2 align-items-center" key={c.id}>
                      <tr className="table table-striped">
                        <td>{c.cusName}</td>
                        <td>{c.NRC}</td>
                        <td>{c.phone}</td>
                        <td>{c.account}</td>
                        <td>{c.address}</td>
                        <td>{c.gender}</td>
                        <td>{c.bankName}</td>
                        <td>{c.branchName}</td>
                        <td
                          className="me-2 my-2"
                          onClick={() => {
                            setNewCusInfo({
                              id: c.id,
                              cusName: c.cusName,
                              NRC: c.NRC,
                              phone: c.phone,
                              account: c.account,
                              address: c.address,
                              gender : c.gender,
                              bankName: c.bankName,
                              branchName: c.branchName,
                            });
                            navigate("/customer");
                          }}
                        >
                          Edit<i class="bi bi-pencil-square"></i>
                        </td>
                        <td onClick={() => deleteCusInfo(c.id)}>
                          Delete<i class="bi bi-trash3-fill"></i>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                  <tbody className=" align-items-center">
                    <tr>
                      <td className="">
                        <Link to="/customer">
                          Rgister Here<i class="bi bi-sign-turn-left"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default Home;
