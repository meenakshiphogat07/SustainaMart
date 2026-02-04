import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const AdminEcoApproval = () => {
    const { addEcoPoints } = useContext(ShopContext);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const stored =
            JSON.parse(localStorage.getItem("returnRequests")) || [];
        setRequests(stored);
    }, []);

    const approvePickup = (id, weightKg) => {
        const points = weightKg * 10;

        const updatedRequests = requests.map((req) =>
            req.id === id
                ? { ...req, status: "approved" }
                : req
        );

        localStorage.setItem(
            "returnRequests",
            JSON.stringify(updatedRequests)
        );

        addEcoPoints(points);
        setRequests(updatedRequests);

        alert(`Pickup approved. ${points} EcoPoints credited.`);
    };

    return (
        <div className="border-t pt-16 px-4">
            <Title text1="ADMIN" text2="ECO APPROVAL" />

            <div className="max-w-xl mx-auto mt-8">
                {requests.length === 0 && (
                    <p className="text-sm text-gray-500 text-center">
                        No return requests available.
                    </p>
                )}

                {requests.map((req) => (
                    <div
                        key={req.id}
                        className="border p-4 rounded mb-3 flex justify-between items-center"
                    >
                        <div className="text-sm">
                            <p>{req.weightKg} kg</p>
                            <p className="capitalize text-gray-500">
                                Status: {req.status}
                            </p>
                        </div>

                        {req.status === "pending" && (
                            <button
                                onClick={() =>
                                    approvePickup(req.id, req.weightKg)
                                }
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Approve Pickup
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminEcoApproval;

