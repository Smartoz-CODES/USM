import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/user-slice";
import { UserForm } from "../../components/user-form";
import type { RootState } from "../../redux/store";
import type { UserFormData } from "../../types/user";

export const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Find the user to edit from Redux state.
  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === Number(id)),
  );

  if (!user) {
    return (
      <div className="page-status">
        <p>User not found.</p>
        <button className="btn btn-view" onClick={() => navigate("/users")}>
          Back to Users
        </button>
      </div>
    );
  }

  const handleSubmit = (data: UserFormData) => {
    dispatch(updateUser({ id: user.id, ...data }));
    navigate("/users");
  };

  const formData = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
  };

  return (
    <div className="form-page-container">
      <div className="page-header">
        <h1>Edit User</h1>
      </div>
      <UserForm
        initialData={formData}
        onSubmit={handleSubmit}
        buttonLabel="Save Changes"
      />
    </div>
  );
};
