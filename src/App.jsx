{/*root component, manages all state  */}
import React, { useState, useMemo } from "react";
import events from "./data/events";
import FilterBar from "./components/FilterBar";
import EventCard from "./components/EventCard";
import EventDetail from "./components/EventDetail";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchesCategory =
        selectedCategory === "All" || e.category === selectedCategory;
      const matchesSearch =
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.organization.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <h1 style={styles.heading}>Community Events</h1>
          <p style={styles.subheading}>
            Discover programs and events from local nonprofits in your community
          </p>
        </div>
      </header>

      <main style={styles.main}>
        <FilterBar
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
        />

        <p style={styles.resultsCount}>
          {filtered.length} event{filtered.length !== 1 ? "s" : ""} found
        </p>

        {filtered.length === 0 ? (
          <div style={styles.empty}>
            <p>No events match your search.</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {filtered.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={setSelectedEvent}
              />
            ))}
          </div>
        )}
      </main>

      <EventDetail
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#f3f4f6", fontFamily: "'Segoe UI', sans-serif" },
  header: { background: "#1a56db", padding: "40px 24px 32px" },
  headerInner: { maxWidth: "900px", margin: "0 auto" },
  heading: { margin: 0, fontSize: "28px", fontWeight: "800", color: "#fff" },
  subheading: { margin: "8px 0 0", fontSize: "15px", color: "#bfdbfe" },
  main: { maxWidth: "900px", margin: "0 auto", padding: "32px 24px" },
  resultsCount: { fontSize: "14px", color: "#6b7280", marginBottom: "16px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  empty: {
    textAlign: "center",
    padding: "60px 0",
    color: "#9ca3af",
    fontSize: "16px",
  },
};

export default App;
