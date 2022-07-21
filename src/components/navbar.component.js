import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const TopBar = () => {
    return(
        <Navbar bg="dark" variant="dark" className="Topbar">
            <Container>
                <Navbar.Brand>
                    <h4>
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> <AdminPanelSettingsIcon/>Admin</Link>{' | '}
                        
                        <Link to="/Paymnet/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Paymnet</Link>
                        <Link to="/Employee/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Employee</Link>
                        <Link to="/FeedBack/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>FeedBack</Link>
                        <Link to="/Customer/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Customer</Link>
                        <Link to="/Delivery/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Delivery</Link>
                        <Link to="/Invetory/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Invetory</Link>
                        <Link to="/Sales/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Sales</Link>
                        <Link to="/Supplier/" style={{marginLeft: "1rem", textDecoration: "none", color: "white", fontWeight: "300"}}>Supplier</Link>
                    </h4>
                    
           
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;