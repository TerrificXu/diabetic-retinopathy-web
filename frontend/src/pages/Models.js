import React, { useEffect, useState } from "react";
import axios from "axios";

const Models = () => {
    const [models, setModels] = useState([]);  // Ensure models is initialized as an empty array

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/models")
            .then(response => {
                console.log("Received models:", response.data);
                if (response.data && response.data.models) {
                    setModels(response.data.models);
                } else {
                    setModels([]);
                }
            })
            .catch(error => {
                console.error("Error fetching models:", error);
                setModels([]);
            });
    }, []);

    return (
        <div>
            <h1>Model List</h1>
            {models.length > 0 ? (
                <ul>
                    {models.map((model, index) => (
                        <li key={index}>{model}</li>
                    ))}
                </ul>
            ) : (
                <p>No available models</p>
            )}
        </div>
    );
};

export default Models;
