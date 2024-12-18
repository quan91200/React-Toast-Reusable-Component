import React, { useState } from "react"
import { useToast } from "../context/ToastContext"

const typeOptions = [
    "primary",
    "info",
    "success",
    "warning",
    "outlinePrimary",
    "outlineInfo",
    "outlineSuccess",
    "outlineWarning",
]
const positionOptions = [
    "top-left",
    "top-right",
    "top-center",
    "bottom-left",
    "bottom-right",
    "bottom-center"
]

const durationOptions = [
    "1000",
    "3000",
    "5000",
    "10000",
    "none"
]

const ToastConfigTool = () => {
    const { showToast } = useToast()

    const [config, setConfig] = useState({
        message: "This is a Toast!",
        type: "success",
        pos: "top-right",
        duration: 3000,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setConfig((prev) => ({ ...prev, [name]: value === "none" ? null : value, }))
    }

    const handleShowToast = () => {
        showToast({
            message: config.message,
            type: config.type,
            pos: config.pos,
            duration: parseInt(config.duration, 10),
        })
    }

    return (
        <div className="p-4 border rounded-lg shadow-md w-[400px]">
            <h2 className="text-lg font-bold mb-4">Toast Config Tool</h2>

            <label className="block mb-2">
                Message:
                <input
                    type="text"
                    name="message"
                    value={config.message}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1 outline-none"
                />
            </label>

            <label className="block mb-2">
                Type:
                <select
                    name="type"
                    value={config.type}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1 outline-none"
                >
                    {typeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>

            <label className="block mb-2">
                Position:
                <select
                    name="pos"
                    value={config.pos}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1 outline-none"
                >
                    {positionOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>

            <label className="block mb-4">
                Duration (ms):
                <select
                    name="duration"
                    value={config.duration === null ? "none" : config.duration}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mt-1 outline-none"
                >
                    {durationOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>

            <button
                onClick={handleShowToast}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Show Toast
            </button>
        </div>
    )
}

export default ToastConfigTool