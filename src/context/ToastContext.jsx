import React, { createContext, useContext, useState } from "react"
import Toast from "../components/Toast"

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({
        open: false,
        message: "",
        type: "success",
        pos: "top-right",
        duration: 3000,
    })

    // Hàm để hiển thị Toast
    const showToast = ({ message, type = "success", pos = "top-right", duration = 3000 }) => {
        setToast({ open: true, message, type, pos, duration })
    }

    // Hàm ẩn Toast
    const hideToast = () => {
        setToast((prev) => ({ ...prev, open: false }))
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast
                open={toast.open}
                message={toast.message}
                type={toast.type}
                pos={toast.pos}
                duration={toast.duration}
                onClose={hideToast}
            />
        </ToastContext.Provider>
    )
}

// Custom hook để sử dụng Toast
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast phải được sử dụng trong ToastProvider")
    }
    return context
}