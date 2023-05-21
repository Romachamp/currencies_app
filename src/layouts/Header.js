import React, {useState} from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {useNavigate} from "react-router";

function Header(props) {

    const [isOpen, setOpenState] = useState(undefined);
    let headerNavClass = 'header-nav ' + isOpen;
    const navigate = useNavigate();

    function handleOpen(e) {
        setOpenState((prevOpenState) => {
            let newOpenState = prevOpenState;
            if (prevOpenState === undefined) {
                newOpenState = 'opened';
            } else {
                newOpenState = undefined;
            }
            return newOpenState;
        });
    }

    function navigateTo(e, to) {
        e.preventDefault();
        setOpenState(undefined);
        navigate(to);
    }

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <AccountBalanceIcon />
                </div>
                <nav className={headerNavClass}>
                    <ul className="header-menu">
                        <li><a href="#" className="header-link" onClick={(e) => navigateTo(e, '/')}>Home</a></li>
                        <li><a href="#" className="header-link" onClick={(e) => navigateTo(e, '/conversation')}>Conversion</a></li>
                        <li><a href="" className="header-link" onClick={(e) => navigateTo(e, '/inflation')}>Inflation</a></li>
                    </ul>
                </nav>
                <div className="header-icon" onClick={handleOpen}>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;