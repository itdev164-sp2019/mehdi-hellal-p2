import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ButtonBase} from './ButtonBase'

const StyledButton = styled(ButtonBase)`
${props => props.theme.variants.iconButton[props.variants || 'primary']};
`
export const IconButton = styled(({icon, ...props}) => {
let clone = React.cloneElement(icon, ...props)
return <StyledButton as={clone.type} {...props} className={props.className}/>
})`
    // could add style but not necessary
    // mai reason this is a styled componennt is to wrap the styled icon passed in as a prop
`

IconButton.defaultProps = {
    size:24
 }

 IconButton.propTypes = { 
     icon: PropTypes.node.isRequired,
     variant: PropTypes.string
  }