
export default function utils() {
  return (
    <div>utils</div>
  )
}


export const SectionHeader =({title}:{title:string})=>{
    return (
        <>
        <div className="flex flex-col items-center group hover:cursor-pointer">
        <span className="font-bold hover:bg-white pt-3 pb-0.5 hover:text-blue-500 transition-all relative text-lg">
          <span>{title}</span>
          <span className="absolute left-0 right-0  bottom-0 h-1 w-1 mx-auto bg-black rounded-full group-hover:bg-blue-500 "></span>
        </span>
      </div>
        </>
    )
}
