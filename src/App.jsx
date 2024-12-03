import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks , setBookmarks] = useState([]);

  const handleBookmark = blog => {
    console.log('bookmarked!!!!!!!!!!');
  }


  return (
    <>
       <Header></Header>
       <div className='md:flex max-w-7xl mx-auto'>
       <Blogs handleBookmark={handleBookmark}></Blogs>
       <Bookmarks></Bookmarks>
       </div>
    </>
  )
}

export default App


 