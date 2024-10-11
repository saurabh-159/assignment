 import React, { useState } from 'react'
import Front from './home/Front'
import Second from './home/Second'
import Menupage from './home/menu/Menupage'
import Third from './home/Third'
 
 const App = () => {

  const [menuOpen, setmenuOpen] = useState(false)

   return (
     <div className='h-full overflow-hidden w-full'>
      <Menupage menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    < Front  menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    < Second />
    <Third/>
     </div>
   )
 }
 
 export default App
 