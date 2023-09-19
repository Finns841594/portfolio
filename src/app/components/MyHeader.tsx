export const MyHeader = () => {
  return (
    <div className="w-screen h-20 px-6 py-4 bg-gradient-to-r from-rose-quartz to-serenity text-neutral-50 flex flex-row justify-between items-end">
      <h1 className="text-3xl">Feng&#39;s Portfolio</h1>
      <div className="flex flex-row items-center">
        <div className="h-7 w-7 mx-2 bg-white rounded-full"></div>
        <h3> LinkedIn </h3>
        <h3> Github </h3>
      </div>
    </div>
  )
}