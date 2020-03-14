import React from 'react';
import styled from 'styled-components';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
    StyledHeader,
    StyledRMDBLogo,
    StyledTMDBLogo
} from '../styles/StyledHeader'

const Header = () => (
<StyledHeader>
    <div className="header-content">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
        <StyledTMDBLogo src={TMDBLogo} alt="rmdb-logo" />
    </div>
</StyledHeader>
)      //implicit return in arrow function

export default Header;