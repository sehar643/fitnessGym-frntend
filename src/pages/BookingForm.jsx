import React, { useState } from "react";
import axios from "axios";
import "../style/bookingForm.css";
import { SERVER_URL } from "../App";
import Swal from "sweetalert2";

const BookingForm = () => {
  const [activityName, setActivityName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [activityTime, setActivityTime] = useState("");
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState("");

  // uppdate the user activity: `${SERVER_URL}/activities/update/${id}`
  // get all the user activity: `${SERVER_URL}/activities/all`
  // delete the user activity: `${SERVER_URL}/activities/delete/${id}`
  // get single the user activity: `${SERVER_URL}/activities/single/${id}`

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${SERVER_URL}/activities/create`,
        {
          activityName: activityName,
          bookingDate: bookingDate,
          activityTime: activityTime,
          phone: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: response.data.message || "Booking confirmed!",
          icon: "success",
        });
        setActivityName("");
        setBookingDate("");
        setActivityTime("");
        setPhone("");
      }
      setFeedback("Booking confirmed!");
    } catch (error) {
      setFeedback("Error booking activity. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
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
                    <h2 className="mb-5 text-danger">Booking Details</h2>
                  </div>
                  <form onSubmit={handleSubmit}>
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
                            <option value="Boot Camp Fitness">
                              Boot Camp Fitness
                            </option>
                            <option value="Weight Loss Program">
                              Weight Loss Program
                            </option>
                            <option value="Nutrition Guideline">
                              Nutrition Guideline
                            </option>
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
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <button
                            type="button"
                            id="cancel"
                            name="cancel"
                            className="btn btn-secondary m-3"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-danger"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {feedback && (
                    <div className="row gutters mt-3">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="alert alert-info">{feedback}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import '../style/bookingForm.css';

// const BookingForm = () => {
//     const [activityName, setActivityName] = useState('');
//     const [bookingDate, setBookingDate] = useState('');
//     const [activityTime, setActivityTime] = useState('');
//     const [phone, setPhone] = useState('');
//     const [feedback, setFeedback] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:7000/api/v1/auth/activities', {
//                 ActivityName: activityName,
//                 BookingDate: bookingDate,
//                 ActivityTime: activityTime,
//                 Phone: phone
//             });
//             setFeedback('Booking confirmed!');
//             console.log(response.data);
//         } catch (error) {
//             setFeedback('Error booking activity. Please try again.');
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <div className="container mt-5">
//                 <div className="row gutters">
//                     <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
//                         <div className="card h-100">
//                             <div className="card-body">
//                                 <div className="account-settings">
//                                     <div className="user-profile">
//                                         <div className="user-avatar">
//                                             <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
//                                         </div>
//                                         <h5 className="user-name">Yuki Hayashi</h5>
//                                         <h6 className="user-email">yuki@Maxwell.com</h6>
//                                     </div>
//                                     <div className="about">
//                                         <h5>About</h5>
//                                         <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
//                         <div className="card h-100">
//                             <div className="card-body">
//                                 <div className="row gutters">
//                                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
//                                         <h2 className="mb-5 text-danger">Booking Details</h2>
//                                     </div>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="row gutters">
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
//                                                 <div className="form-group">
//                                                     <label htmlFor="activityName">Activity Name</label>
//                                                     <select
//                                                         type="text"
//                                                         className="form-control"
//                                                         id="activityName"
//                                                         placeholder="Enter activity name"
//                                                         value={activityName}
//                                                         onChange={(e) => setActivityName(e.target.value)}
//                                                     >
//                                                         <option></option>
//                                                         <option>Boot Camp Fitness</option>
//                                                         <option>Weight Loss Program</option>
//                                                         <option>Nutrition Guidline</option>
//                                                      </select>
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
//                                                 <div className="form-group">
//                                                     <label htmlFor="bookingDate">Booking Date</label>
//                                                     <input
//                                                         type="date"
//                                                         className="form-control"
//                                                         id="bookingDate"
//                                                         placeholder="Enter booking date"
//                                                         value={bookingDate}
//                                                         onChange={(e) => setBookingDate(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
//                                                 <div className="form-group">
//                                                     <label htmlFor="activityTime">Activity Time</label>
//                                                     <input
//                                                         type="time"
//                                                         className="form-control"
//                                                         id="activityTime"
//                                                         placeholder="Enter activity time"
//                                                         value={activityTime}
//                                                         onChange={(e) => setActivityTime(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
//                                                 <div className="form-group">
//                                                     <label htmlFor="phone">Phone</label>
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         id="phone"
//                                                         placeholder="Enter phone number"
//                                                         value={phone}
//                                                         onChange={(e) => setPhone(e.target.value)}
//                                                     />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="row gutters">
//                                             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                                                 <div className="text-right">
//                                                     <button type="button" id="cancel" name="cancel" className="btn btn-secondary m-3">Cancel</button>
//                                                     <button type="submit" id="submit" name="submit" className="btn btn-danger">Confirm</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </form>
//                                     {feedback && <div className="row gutters mt-3">
//                                         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                                             <div className="alert alert-info">{feedback}</div>
//                                         </div>
//                                     </div>}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingForm;

// import React from 'react'
// import '../style/bookingForm.css'

// const BookingForm = () => {
//     return (
//         <div>
//             <div className="container mt-5">
//                 <div className="row gutters">
//                     <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
//                         <div className="card h-100">
//                             <div className="card-body">
//                                 <div className="account-settings">
//                                     <div className="user-profile">
//                                         <div className="user-avatar">
//                                             <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
//                                         </div>
//                                         <h5 className="user-name">Yuki Hayashi</h5>
//                                         <h6 className="user-email">yuki@Maxwell.com</h6>
//                                     </div>
//                                     <div className="about">
//                                         <h5>About</h5>
//                                         <p>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
//                         <div className="card h-100">
//                             <div className="card-body">
//                                 <div className="row gutters">
//                                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
//                                         <h2 className="mb-5 text-danger">Booking Details</h2>
//                                     </div>
//                                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
//                                         <div className="form-group">
//                                             <label htmlFor="fullName">Activity Name</label>
//                                             <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
//                                         <div className="form-group">
//                                             <label htmlFor="eMail">Booking Date</label>
//                                             <input type="date" className="form-control" id="eMail" placeholder="Enter email ID" />
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"> <br/> <br/>
//                                         <div className="form-group">
//                                             <label htmlFor="phone">Phone</label>
//                                             <input type="text" className="form-control" id="phone" placeholder="Enter phone number" />
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"> <br/> <br/>
//                                         <div className="form-group">
//                                             <label htmlFor="website">Activity Time</label>
//                                             <input type="time" className="form-control" id="website" placeholder="Website url" />
//                                         </div>
//                                     </div>
//                                 </div> <br/> <br/>
//                                 <div className="row gutters">
//                                     <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
//                                         <div className="text-right">
//                                             <button type="button" id="submit" name="submit" className="btn btn-secondary m-3">Cancel</button>
//                                             <button type="button" id="submit" name="submit" className="btn btn-danger ">Confirm</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default BookingForm
