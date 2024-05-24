import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/bookingForm.css";
import { SERVER_URL } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateComp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activityName, setActivityName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [activityTime, setActivityTime] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const getSingleActivity = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/activities/single/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const result = response.data;
        if (result.success) {
          setActivityName(result.data.activityName);
          setBookingDate(result.data.bookingDate);
          setActivityTime(result.data.activityTime);
          setPhone(result.data.phone);
        } else {
          Swal.fire("Error", result.message, "error");
        }
      } catch (error) {
        console.error("Error fetching activity:", error);
        Swal.fire("Error", "Failed to fetch activity. Please try again later.", "error");
      }
    };

    getSingleActivity();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        activityName,
        bookingDate,
        activityTime,
        phone,
      };
      const response = await axios.put(`${SERVER_URL}/activities/update/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = response.data;
      if (result.success) {
        Swal.fire("Success", result.message, "success");
        navigate("/"); // Navigate back to the list after updating
      } else {
        Swal.fire("Error", result.message, "error");
      }
    } catch (error) {
      console.error("Error updating activity:", error);
      Swal.fire("Error", "Failed to update activity. Please try again later.", "error");
    }
  };

  return (
    <div> <br/> 
      <div className="container mt-5">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 className="user-name">Yuki Hayashi</h5>
                    <h6 className="user-email">yuki@Maxwell.com</h6>
                  </div>
                  <div className="about">
                    <h5>About</h5>
                    <p>
                      I'm Yuki. Full Stack Designer I enjoy creating
                      user-centric, delightful and human experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                    <h2 className="mb-5 text-danger">Update Booking Details</h2>
                  </div>
                  <form onSubmit={updateUser}>
                    <div className="row gutters">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="activityName">Activity Name</label>
                          <select
                            className="form-control"
                            id="activityName"
                            value={activityName}
                            onChange={(e) => setActivityName(e.target.value)}
                          >
                            <option value=""></option>
                            <option value="Boot Camp Fitness">Boot Camp Fitness</option>
                            <option value="Weight Loss Program">Weight Loss Program</option>
                            <option value="Nutrition Guideline">Nutrition Guideline</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="bookingDate">Booking Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="bookingDate"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="activityTime">Activity Time</label>
                          <input
                            type="time"
                            className="form-control"
                            id="activityTime"
                            value={activityTime}
                            onChange={(e) => setActivityTime(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters mt-4">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <button type="submit" className="btn btn-primary">Update</button>&ensp; 
                          <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <br/><br/>
    </div>
  );
};

export default UpdateComp;




























