"use client"
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function ReactCircularProgressbar({ value, text, styles, className }: { value: number, text: string, styles: Object, className :string} ) {
  return (
    <CircularProgressbar styles={buildStyles(styles)} value={value} text={text} className={className}  />
  )
}
