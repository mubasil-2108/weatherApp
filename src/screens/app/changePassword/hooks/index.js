import { useState } from "react";
import { appImages } from "../../../../services";

export function useHooks() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };
    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmShowPassword(!showConfirmPassword);
    };

    return {
        confirmPassword,
        currentPassword,
        newPassword,
        setConfirmPassword,
        setCurrentPassword,
        setNewPassword,
        toggleConfirmPasswordVisibility,
        toggleCurrentPasswordVisibility,
        toggleNewPasswordVisibility,
        showConfirmPassword,
        showCurrentPassword,
        showNewPassword
    }
}