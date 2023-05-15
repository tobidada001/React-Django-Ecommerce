import React from 'react';

export default function NotFound() {
  return (
    <div style={{display: "flex", flexDirection: "column", placeItems: "center", padding: "10% 0"}}>
     <p style={{fontWeight:"700", fontSize: "25pt"}}>Oops! The page you've requested for does not exist.</p>
     <p style={{fontWeight:"480", paddingTop: "4%"}}>How about checking to make sure you're visiting the right URL?</p>
    </div>
  );
}
