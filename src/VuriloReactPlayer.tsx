import React from 'react'
import ReactPlayer from 'react-player'
// import styles from './styles.module.css'

interface Props {
  text: string
}

export const VuriloReactPlayer: React.FC<Props> = () => {
  return <ReactPlayer></ReactPlayer>
}

export default VuriloReactPlayer
