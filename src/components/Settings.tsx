
import { MockSettingsData } from "../MockData";

export default function Settings() {

    return (
        <div>
            <div className="panel-header">
                <h3>Settings</h3>
            </div>
            <div className="settings-list">
                {MockSettingsData.map((setting, index) => (
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
