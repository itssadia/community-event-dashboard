import React from "react";

const CATEGORY_COLORS = {
  Sports: "#dcfce7",
  Education: "#dbeafe",
  Arts: "#fce7f3",
  Health: "#fef9c3",
};

const CATEGORY_TEXT = {
  Sports: "#166534",
  Education: "#1e40af",
  Arts: "#9d174d",
  Health: "#854d0e",
};

function EventCard({ event, onClick }) {
  const spotsPercent = Math.round(
    ((event.spots - event.spotsLeft) / event.spots) * 100
  );
  const almostFull = event.spotsLeft <= 5;

  return (
    <div style={styles.card} onClick={() => onClick(event)}>
      <div style={styles.topRow}>
        <span
          style={{
            ...styles.badge,
            backgroundColor: CATEGORY_COLORS[event.category] || "#f3f4f6",
            color: CATEGORY_TEXT[event.category] || "#374151",
          }}
        >
          {event.category}
        </span>
        {almostFull && <span style={styles.almostFull}>Almost Full</span>}
      </div>

      <h3 style={styles.title}>{event.title}</h3>
      <p style={styles.org}>{event.organization}</p>

      <div style={styles.meta}>
        <span>
          {new Date(event.date).toLocaleDateString("en-CA", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span>{event.time}</span>
      </div>

      <p style={styles.location}>{event.location}</p>

      <div style={styles.progressWrapper}>
        <div style={styles.progressTrack}>
          <div
            style={{ ...styles.progressBar, width: `${spotsPercent}%` }}
          />
        </div>
        <span style={styles.spotsText}>
          {event.spotsLeft} spot{event.spotsLeft !== 1 ? "s" : ""} left
        </span>
      </div>

      <button style={styles.detailBtn}>View Details</button>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "box-shadow 0.2s",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    border: "1px solid #e5e7eb",
  },
  topRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  badge: {
    fontSize: "12px",
    fontWeight: "600",
    padding: "3px 10px",
    borderRadius: "12px",
  },
  almostFull: {
    fontSize: "12px",
    color: "#b45309",
    background: "#fef3c7",
    padding: "3px 10px",
    borderRadius: "12px",
    fontWeight: "600",
  },
  title: { margin: 0, fontSize: "16px", fontWeight: "700", color: "#111827" },
  org: { margin: 0, fontSize: "13px", color: "#6b7280" },
  meta: {
    display: "flex",
    gap: "12px",
    fontSize: "13px",
    color: "#374151",
    fontWeight: "500",
  },
  location: { margin: 0, fontSize: "13px", color: "#6b7280" },
  progressWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "4px",
  },
  progressTrack: {
    flex: 1,
    height: "6px",
    background: "#e5e7eb",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    background: "#1a56db",
    borderRadius: "4px",
    transition: "width 0.3s",
  },
  spotsText: { fontSize: "12px", color: "#6b7280", whiteSpace: "nowrap" },
  detailBtn: {
    marginTop: "8px",
    padding: "8px 0",
    background: "#1a56db",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
  },
};

export default EventCard;
