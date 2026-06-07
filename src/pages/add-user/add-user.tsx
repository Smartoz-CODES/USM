import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user-slice";
import { UserForm } from "../../components/user-form";
import type { UserFormData } from "../../types/user";

export const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (data: UserFormData) => {
        dispatch(addUser(data));
        navigate("/users");
    };

    return (
        <div className="form-page-container">
            <div className="page-header">
                <h1>Add New User</h1>
            </div>
            <UserForm onSubmit={handleSubmit} buttonLabel="Add User" />
        </div>
    );
};