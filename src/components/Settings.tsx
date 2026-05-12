export default function Settings() {
    const mockSettings = [
        { label: "Theme", value: "Light", options: ["Light", "Dark"] },
        { label: "Notifications", value: "Enabled", options: ["Enabled", "Disabled"] },
        { label: "Currency", value: "USD", options: ["USD", "EUR", "GBP"] },
        { label: "Language", value: "English", options: ["English", "Spanish", "French"] },
    ]

    return (
        <div>
            <div className="panel-header">
                <h3>Settings</h3>
            </div>
            <div className="settings-list">
                {mockSettings.map((setting, index) => (
                    <div key={index} className="setting-item">
                        <label>{setting.label}</label>
                        <select defaultValue={setting.value}>
                            {setting.options.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}