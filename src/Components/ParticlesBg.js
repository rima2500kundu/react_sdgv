import React from 'react'
import Particles from 'react-tsparticles';
import ParticlesConfig from './Config/ParticlesConfig';

function ParticlesBg() {
  return (
    <>
        <Particles params={ParticlesConfig}></Particles>
    </>
  )
}

export default ParticlesBg;