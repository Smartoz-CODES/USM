import { useState } from "react";
import type { UserFormData } from "../types/user";

interface UserFormProps {
    
    initialData?: UserFormData;
    onSubmit: (data: UserFormData) => void;
    buttonLabel: string;
}

const emptyForm: UserFormData = {
    name: "",
    email: "",
    phone: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
    },
};

export const UserForm = (
    { initialData, onSubmit, buttonLabel }: UserFormProps
) => {
    
    const [formData, setFormData] = useState<UserFormData>(
        initialData ?? emptyForm
    );

    const handleChange = (field: keyof UserFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleAddressChange = (
        field: keyof UserFormData["address"],
        value: string
    ) => {
        setFormData(prev => ({
            ...prev,
            address: { ...prev.address, [field]: value },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim()) return;
        onSubmit(formData);
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <div className="form-section">
                <h2>Personal Info</h2>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                        className="form-input"
                        type="text"
                        value={formData.name}
                        placeholder="Full name"
                        onChange={(e) =>
                            handleChange("name", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        className="form-input"
                        type="email"
                        value={formData.email}
                        placeholder="Email address"
                        onChange={(e) =>
                            handleChange("email", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                        className="form-input"
                        type="text"
                        value={formData.phone}
                        placeholder="Phone number"
                        onChange={(e) =>
                            handleChange("phone", e.target.value)}
                    />
                </div>
            </div>

            <div className="form-section">
                <h2>Address</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Street</label>
                        <input
                            className="form-input"
                            type="text"
                            value={formData.address.street}
                            placeholder="Street"
                            onChange={(e) => handleAddressChange(
                                "street", e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Suite</label>
                        <input
                            className="form-input"
                            type="text"
                            value={formData.address.suite}
                            placeholder="Suite / Apt"
                            onChange={(e) => handleAddressChange(
                                "suite", e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">City</label>
                        <input
                            className="form-input"
                            type="text"
                            value={formData.address.city}
                            placeholder="City"
                            onChange={(e) => handleAddressChange(
                                "city", e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Zipcode</label>
                        <input
                            className="form-input"
                            type="text"
                            value={formData.address.zipcode}
                            placeholder="Zipcode"
                            onChange={(e) => handleAddressChange(
                                "zipcode", e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-submit">
                {buttonLabel}
            </button>
        </form>
    );
};