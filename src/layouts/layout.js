/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Footer, Main, Section, IconButton, Button} from '../components/Element'
import Header from "../components/Element/Header/Header"
import "./layout.css"
import {ThemeProvider} from "styled-components"
import {DefaultTheme as theme } from "../themes/DefaultTheme"
import {ReactLogo} from "styled-icons/boxicons-logos"



const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0`,
            
            
            paddingTop: 0,
          }}
        >
          <Main style={{minHeight: `38rem`, margin:`10px`}}>{children}</Main>
          <Footer style={{color:`white`, padding: `0px 1.0875rem 1.45rem`, background: `#d48f2f`, height:`100px`, paddingTop:`20px` }}> 
            <div>
            Mehdi © {new Date().getFullYear()}
           
            <p style={{float:`right`}}>
            Build with Gatsby &amp;ReactJs
             <IconButton icon= {<ReactLogo/>} />
             </p>
            </div>
          </Footer>
        </div>
      </>
    )}
  />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
