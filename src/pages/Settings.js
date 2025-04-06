import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [username, setUsername] = useState("User123");
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const handleSave = () => {
    alert("Settings Saved Successfully!");
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className={`settings-container ${darkMode ? "dark" : ""}`}>
      <h2>Settings</h2>

      <form className="settings-form">
        {/* Profile Picture */}
        <div className="profile-section">
          <label>Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleProfilePicChange} />
          {profilePic && <img src={profilePic} alt="Profile" className="profile-pic" />}
        </div>

        {/* Username */}
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        {/* Email */}
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        {/* Password */}
        <label>New Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" />

        {/* Theme Selection */}
        <label>Theme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        {/* Dark Mode Toggle */}
        <div className="toggle-container">
          <label>Dark Mode</label>
          <label className="toggle-switch">
            <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <span className="slider"></span>
          </label>
        </div>

        {/* Language Selection */}
        <label>Language</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>

        {/* Notifications Toggle */}
        <div className="toggle-container">
          <label>Enable Notifications</label>
          <label className="toggle-switch">
            <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
            <span className="slider"></span>
          </label>
        </div>

        {/* Auto-Save Toggle */}
        <div className="toggle-container">
          <label>Auto-Save Settings</label>
          <label className="toggle-switch">
            <input type="checkbox" checked={autoSave} onChange={() => setAutoSave(!autoSave)} />
            <span className="slider"></span>
          </label>
        </div>

        {/* Save Button */}
        <button type="button" className="save-btn" onClick={handleSave}>Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;
