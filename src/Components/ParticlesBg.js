import React from 'react'
import Particles from 'react-tsparticles';
import ParticlesConfig from './Config/ParticlesConfig';

const ParticlesBg = () => {
  return (
    <>
        <Particles params={ParticlesConfig} height="50vh" width='50vw'></Particles>
    </>
  )
}

export default ParticlesBg;