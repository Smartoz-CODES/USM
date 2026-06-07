import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/user-slice";
import { UserCard } from "../../components/user-card";
import type { RootState, AppDispatch } from "../../redux/store";

export const UserList = () => {
    const { users, loading, error } = useSelector(
        (state: RootState) => state.users
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsers());
        }
    }, [dispatch, users.length]);

    if (loading) {
        return (
            <div className="page-status">
                <div className="spinner" />
                <p>Loading users...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-status error">
                <p>{error}</p>
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="page-status">
                <p>No users found. Add one to get started.</p>
            </div>
        );
    }

    return (
        <div className="user-list-container">
            <div className="page-header">
                <h1>Users</h1>
                <p>{users.length} users total</p>
            </div>
            <div className="user-list-grid">
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};