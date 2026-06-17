import React from "react";

const CATEGORIES = ["All", "Sports", "Education", "Arts", "Health"];

function FilterBar({ selected, onSelect, searchQuery, onSearch }) {
  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.categoryRow}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            style={{
              ...styles.pill,
              backgroundColor: selected === cat ? "#1a56db" : "#f0f4ff",
              color: selected === cat ? "#fff" : "#1a56db",
              fontWeight: selected === cat ? "600" : "400",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: { marginBottom: "24px" },
  searchInput: {
    width: "100%",
    padding: "10px 14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    marginBottom: "12px",
    boxSizing: "border-box",
    outline: "none",
  },
  categoryRow: { display: "flex", gap: "8px", flexWrap: "wrap" },
  pill: {
    padding: "6px 16px",
    borderRadius: "20px",
    border: "1px solid #1a56db",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s",
  },
};

export default FilterBar;
