import React from 'react'
import PropTypes from 'prop-types'

mapDispatchToDashboard = (dispatch,props)=>{
  onMount:(page)=>{
    getConstructionDraws(page)
  }

}
