import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { Layout } from "../layout/layout";
import { UserList } from "../pages/user-list/user-list";
import { UserDetails } from "../pages/user-details/user-details";
import { AddUser } from "../pages/add-user/add-user";
import { EditUser } from "../pages/edit-user/edit-user";

export const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Redirect root to /users */}
                    <Route index element={<Navigate to="/users" replace />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/edit-user/:id" element={<EditUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};