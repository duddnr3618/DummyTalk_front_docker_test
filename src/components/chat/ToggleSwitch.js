import React, { useState, useEffect } from 'react';
import './ToggleSwitch.css'; // Make sure this path is correct

const ToggleSwitch = () => {
    const [selected, setSelected] = useState('productive');
    const [isCooldown, setIsCooldown] = useState(false);

    const handleLabelClick = (label) => {
        if (!isCooldown) {
            setSelected(label);
            setIsCooldown(true);
        }
    };

    useEffect(() => {
        if (isCooldown) {
            const timer = setTimeout(() => {
                setIsCooldown(false);
            }, 30000);

            return () => clearTimeout(timer); // Clear the timeout if the component unmounts
        }
    }, [isCooldown]);

    return (
        <div className="uniqueToggleBody">
            <div className="uniqueToggleContainer">
                <form className="uniqueSwitch">
                    <input
                        type="radio"
                        id="creativeChoice"
                        name="choice"
                        value="creative"
                        checked={selected === 'creative'}
                        onChange={() => handleLabelClick('creative')}
                        disabled={isCooldown}
                    />
                    <label htmlFor="creativeChoice">Creative</label>

                    <input
                        type="radio"
                        id="productiveChoice"
                        name="choice"
                        value="productive"
                        checked={selected === 'productive'}
                        onChange={() => handleLabelClick('productive')}
                        disabled={isCooldown}
                    />
                    <label htmlFor="productiveChoice">Productive</label>

                    <div id="uniqueFlap" className="content">
                        <span>{selected === 'creative' ? 'Creative Mode' : 'Productive Mode'}</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ToggleSwitch;