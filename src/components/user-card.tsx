import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/user-slice";
import type { User } from "../types/user";

interface UserCardProps {
    user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser(user.id));
    };

    return (
        <div className="user-card">
            <div className="user-card-avatar">
                {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="user-card-info">
                <h3 className="user-card-name">{user.name}</h3>
                <p className="user-card-email">{user.email}</p>
                <p className="user-card-address">
                    {user.address.street}, {user.address.city}
                </p>
            </div>
            <div className="user-card-actions">
                <button
                    className="btn btn-view"
                    onClick={() => navigate(`/users/${user.id}`)}
                >
                    View
                </button>
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
            </div>
        </div>
    );
};