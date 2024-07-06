function App() {
  return (
    <div className="container w-10/12 sm:w-7/12 my-6 p-4 shadow-lg rounded-lg">
      <div className="card text-center">
        <div className="card-header">
          <h1 className="sm:text-lg text-sm">Add a new Todo</h1>
        </div>
        <hr className="my-2 border-neutral-400" />
        <div className="card-body">
          <div className="input flex justify-between mb-5">
            <input type="text" name="" id="" className="mt-1 px-2 sm:px-3 py-1 sm:py-2 bg-white border shadow-sm border-neutral-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-9/12 rounded-md sm:text-sm focus:ring-1" />

            <button type="submit" className="mt-1 px-2 sm:px-3 py-1 sm:py-2 bg-white border shadow-sm border-neutral-400 hover:outline-none hover:border-sky-500 hover:ring-sky-500 block w-2/12 rounded-md sm:text-base hover:ring-1 text-xs">Add</button>
          </div>
          {/* Add your todo form here */}
          <div className="todo">
            <ol className="mt-2 flex justify-between shadow-md rounded-md bg-slate-300">
              <li className="p-2 sm:p-3 text-gray-700 sm:text-lg">
                <p>Beli Tepung Terigu</p>
              </li>
              <li className="m-2">
                <button className='hapus p-1 px-2 mx-2 rounded shadow-md bg-slate-100'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-6 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>

                <button className='edit p-1 px-2 rounded shadow-md bg-slate-100'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </button>
              </li>
            </ol>
            <ol className="mt-2 flex justify-between shadow-md rounded-md bg-slate-300">
              <li className="p-2 sm:p-3 text-gray-700 sm:text-lg">
                <p>Beli Tepung Tapioka</p>
              </li>
              <li className="m-2">
                <button className='hapus p-1 px-2 mx-2 rounded shadow-md bg-slate-100'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-6 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>

                <button className='edit p-1 px-2 rounded shadow-md bg-slate-100'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 sm:size-6 text-green-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
