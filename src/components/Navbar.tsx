/* This is the navbar that will be displayed when we're in the problem solving page. */

import React, { useState } from 'react'

const Navbar = () => {
  {/* This useState is for the background color when the link is selected.
  So, for example when I click on Home I'll use it to assign the activePage to 'Home' there are a total of 4 (equal to the number of links) activePage: Description, Solution, Discussion, Submission.
*/}
  const [activePage, setActivePage] = useState<string | null>(null)
  return (
    <div>
      <ul id="nav" className='flex flex-col bg-black w-20 h-screen text-white'>
        {/* Problem description */}
        <li className={`flex items-center justify-center ${activePage==='Description'?"bg-orange-500 text-black":""}`}><a href="#" className={`h-20 flex items-center justify-center w-full ${activePage==='Description'?"bg-orange-500 text-black":""}`} onClick={() => setActivePage("Description")}>Desc</a></li>
        {/* Solutions. All the other users solution + official solution by us will be here. */}
        <li className={`flex items-center justify-center ${activePage==='Solution'?"bg-orange-500 text-black":""}`}><a href="#" className={`h-20 flex items-center justify-center w-full ${activePage==='Solution'?"bg-orange-500 text-black":""}`} onClick={() => setActivePage("Solution")}>Solutions</a></li>
        {/* Here, we'll just have simple discussions. No answers. Small hints are allowed. */}
        <li className={`flex items-center justify-center ${activePage==='Discussion'?"bg-orange-500 text-black":""}`}><a href="#" className={`h-20 flex items-center justify-center w-full ${activePage==='Discussion'?"bg-orange-500 text-black":""}`} onClick={() => setActivePage("Discussion")}>Discussion</a></li>
        {/* All of the users submissions will be here. */}
        <li className={`flex items-center justify-center ${activePage==='Submission'?"bg-orange-500 text-black":""}`}><a href="#" className={`h-20 flex items-center justify-center w-full ${activePage==='Submission'?"bg-orange-500 text-black":""}`} onClick={() => setActivePage("Submission")}>Submission</a></li>
      </ul>
    </div>
  );
};

export default Navbar