import React, { useState, useEffect } from "react";

function EventDetail({ event, onClose }) {
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    setRegistered(false);
  }, [event]);

  if (!event) return null;

  const spotsPercent = Math.round(
    ((event.spots - event.spotsLeft) / event.spots) * 100
  );

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <span style={styles.category}>{event.category}</span>
        <h2 style={styles.title}>{event.title}</h2>
        <p style={styles.org}>{event.organization}</p>

        <div style={styles.infoGrid}>
          <div style={styles.infoItem}>
            <span style={styles.label}>Date</span>
            <span style={styles.value}>
              {new Date(event.date).toLocaleDateString("en-CA", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Time</span>
            <span style={styles.value}>{event.time}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Location</span>
            <span style={styles.value}>{event.location}</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>Contact</span>
            <span style={styles.value}>{event.contact}</span>
          </div>
        </div>

        <p style={styles.description}>{event.description}</p>

        <div style={styles.spotsSection}>
          <div style={styles.spotsHeader}>
            <span style={styles.label}>Availability</span>
            <span style={styles.spotsCount}>
              {event.spotsLeft} / {event.spots} spots remaining
            </span>
          </div>
          <div style={styles.progressTrack}>
            <div
              style={{ ...styles.progressBar, width: `${spotsPercent}%` }}
            />
          </div>
        </div>

        {registered ? (
          <div style={styles.successBox}>
            <span style={styles.successIcon}>✓</span>
            <div>
              <p style={styles.successTitle}>You're registered!</p>
              <p style={styles.successSub}>
                A confirmation will be sent to you by {event.contact}
              </p>
            </div>
          </div>
        ) : (
          <button style={styles.registerBtn} onClick={() => setRegistered(true)}>
            Register Now
          </button>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modal: {
    background: "#fff",
    borderRadius: "16px",
    padding: "32px",
    maxWidth: "560px",
    width: "100%",
    position: "relative",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  closeBtn: {
    position: "absolute",
    top: "16px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#6b7280",
    lineHeight: 1,
  },
  category: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#1a56db",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  title: { margin: "8px 0 4px", fontSize: "22px", fontWeight: "800", color: "#111827" },
  org: { margin: "0 0 20px", fontSize: "14px", color: "#6b7280" },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
    marginBottom: "20px",
    background: "#f9fafb",
    borderRadius: "10px",
    padding: "16px",
  },
  infoItem: { display: "flex", flexDirection: "column", gap: "2px" },
  label: { fontSize: "11px", fontWeight: "700", color: "#9ca3af", textTransform: "uppercase" },
  value: { fontSize: "14px", color: "#111827", fontWeight: "500" },
  description: { fontSize: "15px", color: "#374151", lineHeight: "1.6", marginBottom: "20px" },
  spotsSection: { marginBottom: "24px" },
  spotsHeader: { display: "flex", justifyContent: "space-between", marginBottom: "8px" },
  spotsCount: { fontSize: "14px", fontWeight: "600", color: "#374151" },
  progressTrack: {
    height: "8px",
    background: "#e5e7eb",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressBar: { height: "100%", background: "#1a56db", borderRadius: "4px" },
  registerBtn: {
    width: "100%",
    padding: "12px",
    background: "#1a56db",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
  },
  successBox: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    background: "#f0fdf4",
    border: "1px solid #86efac",
    borderRadius: "10px",
    padding: "16px",
  },
  successIcon: {
    fontSize: "24px",
    color: "#16a34a",
    fontWeight: "800",
  },
  successTitle: {
    margin: 0,
    fontSize: "15px",
    fontWeight: "700",
    color: "#15803d",
  },
  successSub: {
    margin: "4px 0 0",
    fontSize: "13px",
    color: "#166534",
  },
};

export default EventDetail;
