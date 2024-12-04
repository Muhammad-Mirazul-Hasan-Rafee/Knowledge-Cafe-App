import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks , setBookmarks] = useState([]);

  const handleBookmark = blog => {
   
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks);
  
  };
  const [readingTime , setReadingTime] = useState(0);
  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time);
  };


  return (
    <>
       <Header></Header>
       <div className='md:flex max-w-7xl mx-auto'>
       <Blogs handleBookmark={handleBookmark}
       handleMarkAsRead = {handleMarkAsRead}
       
       ></Blogs>
       <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
       </div>
    </>
  )
}

export default App


 