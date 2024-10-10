 import React, { useState } from 'react'
import Front from './home/Front'
import Second from './home/Second'
import Menupage from './home/menu/Menupage'
 
 const App = () => {

  const [menuOpen, setmenuOpen] = useState(false)

   return (
     <div className='h-full overflow-hidden w-full'>
      <Menupage menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    < Front  menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    < Second />
     </div>
   )
 }
 
 export default App
 