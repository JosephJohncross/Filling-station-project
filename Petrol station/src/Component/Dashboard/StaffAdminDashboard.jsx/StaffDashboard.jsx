import React from 'react'
import { useImmerReducer } from 'use-immer'


const reducerFunction  = () => {

}

const initialState = {

}

const StaffDashboard = () => {

  const [state, dispatch] = useImmerReducer(reducerFunction, initialState)

  return (
    <section></section>
  )
}

export default StaffDashboard