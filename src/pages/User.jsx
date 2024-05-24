import React, { useEffect, useState } from 'react';
import { SERVER_URL } from "../App";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
    const [activities, setActivities] = useState([]);

    const getActivitiesList = async () => {
        try {
            const response = await axios.get(`${SERVER_URL}/activities/all`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const result = response.data;

            if (result.success && Array.isArray(result.data)) {
                setActivities(result.data);
            } else {
                throw new Error(result.message || "Failed to fetch activities");
            }
        } catch (error) {
            console.error("Error fetching activities:", error);
            toast.error("Failed to fetch activities. Please try again later.");
        }
    };

    const deleteActivity = async (id) => {
        try {
            const response = await axios.delete(`${SERVER_URL}/activities/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const result = response.data;
            if (result.success) {
                toast.success(result.message);
                getActivitiesList(); // Refresh the list after deletion
            } else {
                throw new Error(result.message || "Failed to delete activity");
            }
        } catch (error) {
            console.error("Error deleting activity:", error);
            toast.error("Failed to delete activity. Please try again later.");
        }
    };

    useEffect(() => {
        getActivitiesList();
    }, []);

    return (
        <div>
            <h1 className='my-3 text-center text-danger'>List of Activities</h1> <br/>
            <div className='container w-75'>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr className='bg-dark text-light'>
                            <th scope="col">#</th>
                            <th scope="col">Activity Name</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">Booking Time</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activities.length > 0 ? (
                                activities.map((activity, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{activity.activityName}</td>
                                            <td>{new Date(activity.bookingDate).toLocaleDateString()}</td>
                                            <td>{activity.activityTime}</td>
                                            <td>
                                                <Link to={`/update/${activity._id}`} className="btn btn-primary btn-sm">Update</Link> &ensp;
                                                <button className="btn btn-danger btn-sm" onClick={() => deleteActivity(activity._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">No activities found</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table> <br/><br/>
            </div>
            <Toaster />
        </div>
    );
};

export default User;


















// import React, { useEffect, useState } from 'react';
// import { SERVER_URL } from "../App";
// import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const User = () => {
//     const [activities, setActivities] = useState([]);
//     const [editingActivity, setEditingActivity] = useState(null);

//     const getActivitiesList = async () => {
//         try {
//             const response = await axios.get(`${SERVER_URL}/activities/all`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure the token is passed
//                 },
//             });
//             const result = response.data;

//             if (result.success && Array.isArray(result.data)) {
//                 setActivities(result.data);
//             } else {
//                 throw new Error(result.message || "Failed to fetch activities");
//             }
//         } catch (error) {
//             console.error("Error fetching activities:", error);
//             toast.error("Failed to fetch activities. Please try again later.");
//         }
//     };

//     const deleteActivity = async (id) => {
//         try {
//             const response = await axios.delete(`${SERVER_URL}/activities/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure the token is passed
//                 },
//             });
//             const result = response.data;
//             if (result.success) {
//                 toast.success(result.message);
//                 getActivitiesList(); // Refresh the list after deletion
//             } else {
//                 throw new Error(result.message || "Failed to delete activity");
//             }
//         } catch (error) {
//             console.error("Error deleting activity:", error);
//             toast.error("Failed to delete activity. Please try again later.");
//         }
//     };

//     const updateActivity = async (id, updatedData) => {
//         try {
//             const response = await axios.put(`${SERVER_URL}/activities/update/${id}`, updatedData, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure the token is passed
//                 },
//             });
//             const result = response.data;
//             if (result.success) {
//                 toast.success(result.message);
//                 setEditingActivity(null);
//                 getActivitiesList(); // Refresh the list after updating
//             } else {
//                 throw new Error(result.message || "Failed to update activity");
//             }
//         } catch (error) {
//             console.error("Error updating activity:", error);
//             toast.error("Failed to update activity. Please try again later.");
//         }
//     };

//     useEffect(() => {
//         getActivitiesList();
//     }, []);

//     return (
//         <div>
//             <h1 className='my-3 text-center text-danger'>List of Activities</h1>
//             <div className='container w-75'>
//                 <table className="table table-bordered table-striped table-hover">
//                     <thead>
//                         <tr className='bg-dark text-light'>
//                             <th scope="col">#</th>
//                             <th scope="col">Activity Name</th>
//                             <th scope="col">Booking Date</th>
//                             <th scope="col">Booking Time</th>
//                             <th scope="col">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             activities.length > 0 ? (
//                                 activities.map((activity, index) => {
//                                     return (
//                                         <tr key={index}>
//                                             <th scope="row">{index + 1}</th>
//                                             <td>{activity.activityName}</td>
//                                             <td>{new Date(activity.bookingDate).toLocaleDateString()}</td>
//                                             <td>{activity.activityTime}</td>
//                                             <td>
//                                                 <button className="btn btn-primary btn-sm" onClick={() => setEditingActivity(activity)}>Update</button>
//                                                 <button className="btn btn-danger btn-sm" onClick={() => deleteActivity(activity._id)}>Delete</button>
//                                             </td>
//                                         </tr>
//                                     )
//                                 })
//                             ) : (
//                                 <tr>
//                                     <td colSpan="5" className="text-center">No activities found</td>
//                                 </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//             <Toaster />
//             {/* Update Form Modal */}
//             {editingActivity && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={() => setEditingActivity(null)}>&times;</span>
//                         <h2>Update Activity</h2>
//                         <form onSubmit={(e) => {
//                             e.preventDefault();
//                             const updatedData = {
//                                 activityName: e.target.activityName.value,
//                                 bookingDate: e.target.bookingDate.value,
//                                 activityTime: e.target.activityTime.value
//                             };
//                             updateActivity(editingActivity._id, updatedData);
//                         }}>
//                             <div className="form-group">
//                                 <label>Activity Name:</label>
//                                 <input type="text" name="activityName" defaultValue={editingActivity.activityName} className="form-control" />
//                             </div>
//                             <div className="form-group">
//                                 <label>Booking Date:</label>
//                                 <input type="date" name="bookingDate" defaultValue={new Date(editingActivity.bookingDate).toISOString().substr(0, 10)} className="form-control" />
//                             </div>
//                             <div className="form-group">
//                                 <label>Booking Time:</label>
//                                 <input type="text" name="activityTime" defaultValue={editingActivity.activityTime} className="form-control" />
//                             </div>
//                             <Link to="update"><button type="submit" className="btn btn-primary">Update</button></Link>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default User;























// import React, { useEffect, useState } from 'react';
// import { SERVER_URL } from "../App";
// import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';

// const User = () => {
//     const [activities, setActivities] = useState([]);

//     const getActivitiesList = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 throw new Error('No token found');
//             }

//             const response = await axios.get(`${SERVER_URL}/activities/all`, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });

//             const result = response.data;

//             if (result.success && Array.isArray(result.data)) {
//                 setActivities(result.data);
//             } else {
//                 throw new Error(result.message || "Failed to fetch activities");
//             }
//         } catch (error) {
//             console.error("Error fetching activities:", error);
//             toast.error("Failed to fetch activities. Please try again later.");
//         }
//     };

//     useEffect(() => {
//         getActivitiesList();
//     }, []);

//     return (
//         <div>
//             <h1 className='my-3 text-center text-danger'>List of Activities</h1>
//             <div className='container w-75'>
//                 <table className="table table-bordered table-striped table-hover">
//                     <thead>
//                         <tr className='bg-dark text-light'>
//                             <th scope="col">#</th>
//                             <th scope="col">Activity Name</th>
//                             <th scope="col">Booking Date</th>
//                             <th scope="col">Booking Time</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             activities.length > 0 ? (
//                                 activities.map((activity, index) => {
//                                     return (
//                                         <tr key={index}>
//                                             <th scope="row">{index + 1}</th>
//                                             <td>{activity.activityName}</td>
//                                             <td>{new Date(activity.bookingDate).toLocaleDateString()}</td>
//                                             <td>{activity.activityTime}</td>
//                                         </tr>
//                                     )
//                                 })
//                             ) : (
//                                 <tr>
//                                     <td colSpan="4" className="text-center">No activities found</td>
//                                 </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//             </div>
//             <Toaster />
//         </div>
//     );
// };

// export default User;