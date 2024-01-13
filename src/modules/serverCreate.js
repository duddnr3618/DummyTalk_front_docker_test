// CreateServerComponent.js
import React, { useState } from 'react';
import WebSocketService from './WebSocketService';

function CreateServerComponent() {
    const [serverName, setServerName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        WebSocketService.send("/app/server/create", { name: serverName });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={serverName}
                onChange={(e) => setServerName(e.target.value)}
            />
            <button type="submit">Create Server</button>
        </form>
    );
}

export default CreateServerComponent;
