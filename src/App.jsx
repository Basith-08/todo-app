function App() {
  return (
    <div className="container w-10/12 sm:w-7/12 my-6 p-4 shadow-lg rounded-lg">
      <div className="card text-center">
        <div className="card-header">
          <h1 className="sm:text-lg text-sm">Add a new task</h1>
        </div>
        <hr className="my-2 border-neutral-400" />
        <div className="card-body">
          <div className="input flex justify-between">
            <input type="text" name="" id="" className="mt-1 px-2 sm:px-3 py-1 sm:py-2 bg-white border shadow-sm border-neutral-400 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-9/12 rounded-md sm:text-sm focus:ring-1" />
            
            <button type="submit" className="mt-1 px-2 sm:px-3 py-1 sm:py-2 bg-white border shadow-sm border-neutral-400 hover:outline-none hover:border-sky-500 hover:ring-sky-500 block w-2/12 rounded-md sm:text-base hover:ring-1 text-xs">Add</button>
          </div>
          {/* Add your task form here */}
          <div className="task">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
