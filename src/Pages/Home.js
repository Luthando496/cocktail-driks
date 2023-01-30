import React, { Fragment } from 'react'
import Boxes from '../components/Boxes'
import Card from '../components/Card'
import Create from '../components/Create'
import Grid from '../components/Grid'
import GridPhotos from '../components/GridPhotos'
import MainSlider from '../components/MainSlider'


const Home = () => {
  return (
    <Fragment>
        <MainSlider />
      <Boxes/>
      <Create />
      <Grid />
      <Card />
      <GridPhotos />
    </Fragment>
  )
}

export default Home