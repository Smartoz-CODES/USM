import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/user-slice";
import type { RootState } from "../../redux/store";

export const UserDetails = () => {
     const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) =>
        state.users.users.find(u => u.id === Number(id))
    );

    if (!user) {
        return (
            <div className="page-status">
                <p>User not found.</p>
                <button
                    className="btn btn-view"
                    onClick={() => navigate("/users")}
                >
                    Back to Users
                </button>
            </div>
        );
    }

    const handleDelete = () => {
        dispatch(deleteUser(user.id));
        navigate("/users");
    };

    return (
        <div className="user-details-container">
            <div className="page-header">
                <h1>User Details</h1>
            </div>
            <div className="details-card">
                <div className="details-avatar">
                    {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="details-body">
                    <div className="details-row">
                        <span className="details-label">Name</span>
                        <span className="details-value">
                            {user.name}
                        </span>
                    </div>
                    <div className="details-row">
                        <span className="details-label">Email</span>
                        <span className="details-value">
                            {user.email}
                        </span>
                    </div>
                    <div className="details-row">
                        <span className="details-label">Phone</span>
                        <span className="details-value">
                            {user.phone}
                        </span>
                    </div>
                    <div className="details-row">
                        <span className="details-label">Street</span>
                        <span className="details-value">
                            {user.address.street}, {user.address.suite}
                        </span>
                    </div>
                    <div className="details-row">
                        <span className="details-label">City</span>
                        <span className="details-value">
                            {user.address.city}, {user.address.zipcode}
                        </span>
                    </div>
                </div>
                <div className="details-actions">
                    <button
                        className="btn btn-edit"
                        onClick={() => navigate(`/edit-user/${user.id}`)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                    <button
                        className="btn btn-view"
                        onClick={() => navigate("/users")}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};