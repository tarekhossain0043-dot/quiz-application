import React from 'react'
import Video from '../Video'
import Classes from '../../styles/videos.module.css'
export default function Home() {
  return (
    <div className={Classes.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  )
}
