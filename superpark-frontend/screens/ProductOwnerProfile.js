import * as React from 'react';
import { View, Text } from "react-native";
import sampleStyles from '../constants/SampleStyles';
import { useState } from "react";

function ProfileScreen() {
    return (
      <View style={sampleStyles.container}>
        <Text style={sampleStyles.labelText}>Profile Screen</Text>
        <ProfilePage />
      </View>
    );
}

export default ProfileScreen;

function ProfilePage() {
  const [name, setName] = useState("Owner");
  const [email, setEmail] = useState("owner@gmail.com");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#000", padding: "16px" }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "24px", backgroundColor: "#1e1e1e", borderRadius: "16px", boxShadow: "0 4px 6px rgba(255, 255, 255, 0.1)", color: "white" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "96px", height: "96px", borderRadius: "50%", overflow: "hidden", border: "2px solid #ccc", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#333" }}>
            {avatar ? <img src={avatar} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <ion-icon name="person-outline" style={{ fontSize: "48px", color: "#777" }}></ion-icon>}
          </div>
          <label style={{ cursor: "pointer", color: "#4f83ff" }}>
            <span>Change Profile Picture</span>
            <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: "none" }} />
          </label>
        </div>
        
        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <input style={{ padding: "8px", border: "1px solid #555", backgroundColor: "#2b2b2b", color: "white", borderRadius: "8px", width: "100%" }} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input style={{ padding: "8px", border: "1px solid #555", backgroundColor: "#2b2b2b", color: "white", borderRadius: "8px", width: "100%" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input style={{ padding: "8px", border: "1px solid #555", backgroundColor: "#2b2b2b", color: "white", borderRadius: "8px", width: "100%" }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
          <button style={{ width: "100%", backgroundColor: "#4f83ff", color: "white", padding: "12px", borderRadius: "8px", marginTop: "8px", border: "none", cursor: "pointer" }}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
