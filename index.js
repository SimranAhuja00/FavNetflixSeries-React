import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';

ReactDOM.render( 
  <>
  <h1 className='heading_style'>My favourite Netflix series:-</h1>
  <Card imgsrc="https://wallpapercave.com/w/wp4786354.jpg"
  title = "A Netflix Original Series"
  sname = "Black Mirror"
  link = "https://www.netflix.com/in/title/70264888" />

  <Card imgsrc="https://wallpapercave.com/w/wp11827124.jpg"
  title = "A Netflix Original Series"
  sname = "Stranger Things"
  link = "https://www.netflix.com/in/title/80057281"/>

  <Card imgsrc="https://wallpapercave.com/w/wp3920138.jpg"
  title = "A Netflix Original Series"
  sname = "Atypical"
  link = "https://www.netflix.com/in/title/80117540"/>

  <Card imgsrc="https://wallpapercave.com/w/wp5149318.jpg"
  title = "A Netflix Original Series"
  sname = "Friends"
  link = "https://www.netflix.com/in/title/70153404"/>

  <Card imgsrc="https://wallpapercave.com/w/wp5941640.jpg"
  title = "A Netflix Original Series"
  sname = "The Office"
  link = "https://www.netflix.com/in/title/70136120"/>
  </>
  ,document.getElementById('root'));
