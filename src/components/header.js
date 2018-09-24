import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const StyledMainDiv = styled.div`
  background: gray;
  margin-bottom: 0;
`

const StyledChildDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledH1 = styled.h1`
  margin: 0;
`


const Header = ({ siteTitle }) => (
  <StyledMainDiv>
      <StyledChildDiv>
        <StyledH1>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </StyledH1>
      </StyledChildDiv>
    </StyledMainDiv>

)

export default Header
