# Community Event Dashboard

A React application for discovering and browsing community events from local nonprofits.

## Features

* Filter events by category (Sports, Education, Arts, Health)
* Search events by name or organization
* View availability with real-time spot tracking
* Detailed event modal with full information

## Tech Stack

* React 18 (hooks: useState, useMemo)
* Component-based architecture
* Pure CSS-in-JS styling (no external UI libraries)

## Getting Started

```bash
npm install
npm start
```

## Project Structure

```
src/
  components/
    FilterBar.jsx     # Search input + category filter pills
    EventCard.jsx     # Event summary card with availability bar
    EventDetail.jsx   # Modal with full event details
  data/
    events.js         # Static event data
  App.jsx             # Root component with state management
  index.js            # React entry point
```

