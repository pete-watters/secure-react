import React from 'react';
import { Link } from 'react-router-dom';

const Sushi = () => (
  <div>
    <h2>Sushi</h2>
    <div><Link to='/'>Home</Link></div>
    <div><img src="https://img.resized.co/lovindublin_com/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5sb3ZpbmR1Ymxpbi5jb21cXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzEwXFxcLzIyMTEwMTQyXFxcL1N1c2hpMS5qcGdcIixcIndpZHRoXCI6MTIwMCxcImhlaWdodFwiOjY3MixcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvZDI2aGUwMzhhNzBkZ3MuY2xvdWRmcm9udC5uZXRcXFwvd3AtY29udGVudFxcXC90aGVtZXNcXFwvbG92aW5cXFwvYXNzZXRzXFxcL2ltZ1xcXC9jYXJkLWRlZmF1bHQtbG92aW4tZHVibGluLnBuZ1wifSIsImhhc2giOiJhZGI4Zjc0ZGRmYzY1NWVmYTZhZmU1ZWE4MzAxNjg4YWUwNDc3MjdjIn0=/sushi1.jpg" /></div>
  </div>
);

export default Sushi;