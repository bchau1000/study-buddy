import React from 'react';
import './sidebar.css';

function handleClick(path) {
    window.location.href = path;
}

export default function Sidebar(props) {
    return (
        <div className="sidebar-container">
            <div className="sidebar-collapse">
                
            </div>
            <ul className="sidebar-items-container">
                <li className="sidebar-item" onClick={() => handleClick("")}>
                    <span className="material-icons">search</span>
                    <span htmlFor="home">Browse</span>
                </li>
                <li className="sidebar-item" onClick={() => handleClick("/sets")}>
                    <span className="material-icons">layers</span>
                    <span htmlFor="sets">Sets</span>
                </li>
                <li className="sidebar-item" onClick={() => handleClick("/sets/new")}>
                    <span className="material-icons">library_add</span>
                    <span htmlFor="create">Create</span>
                </li>
                <li className="sidebar-item" onClick={() => handleClick("/settings")}>
                    <span className="material-icons">settings</span>
                    <span htmlFor="settings">Settings</span>
                </li>
            </ul>
        </div>
    );
}