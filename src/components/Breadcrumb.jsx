import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname
        .split('/')
        .filter((x) => x && x !== 'page'); // Filter out 'page' and empty segments

    return (
        <nav aria-label="breadcrumb">
            <ol style={breadcrumbStyle}>
                <li>
                    <Link to="/" style={linkStyle}>Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    
                    return (
                        <React.Fragment key={to}>
                            <span style={separatorStyle}> &gt; </span>
                            <li>
                                {isLast ? (
                                    <span style={lastItemStyle}>{capitalize(value)}</span> // Apply red color here
                                ) : (
                                    <Link to={to} style={linkStyle}>{capitalize(value)}</Link>
                                )}
                            </li>
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
};

// Helper function to capitalize the first letter
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const breadcrumbStyle = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    paddingLeft:"0px"
};

const linkStyle = {
    textDecoration: 'none',
    color: '#000',
};

const separatorStyle = {
    margin: '0 8px',
    color: '#000',
};

// Style for the last breadcrumb item
const lastItemStyle = {
    color: '#888',
    fontWeight: '400',
};

export default Breadcrumb;
