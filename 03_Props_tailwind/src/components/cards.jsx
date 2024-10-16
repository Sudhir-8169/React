import React from 'react'





// <--------------FIRST WAY TO USING  PROPS-------------->

// function cards(props) { 

//     console.log(props);
    
//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
//     <a href="#">
//         <img className="rounded-t-lg h-96" src={props.img} alt="" />
//     </a>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hey everyone, my name is {props.name} </h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//            {props.btnclick}
             
//         </a>
//     </div>
// </div>
//   )
// }

// export default cards

// <--------------SECOND WAY TO USING PROPS-------------->

function cards({name,btnclick,img}) { 

  // console.log(props);
  
return (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
  <a href="#">
      <img className="rounded-t-lg h-96" src={img} alt="" />
  </a>
  <div className="p-5">
      <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hey everyone, my name is {name} </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         {btnclick}
           
      </a>
  </div>
</div>
)
}

export default cards



