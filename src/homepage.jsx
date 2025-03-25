import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Welcome to SkillSort</h1>
            <p>An AI-powered resume screening and ranking system</p>
            <div style={{ marginTop: '20px' }}>
                <Link to="/student" style={{ marginRight: '20px', textDecoration: 'none', padding: '10px 20px', background: '#007bff', color: 'white', borderRadius: '5px' }}>Student Portal</Link>
                <Link to="/admin" style={{ textDecoration: 'none', padding: '10px 20px', background: '#28a745', color: 'white', borderRadius: '5px' }}>Admin Portal</Link>
            </div>
        </div>
    );
};

export default HomePage;