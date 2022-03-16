import Link from "next/link"


function LinkMaker({name,url,}) {
  return (
    <div className="w-full">
    <Link  href={`${url}`} >
        <a onClick className="font-mono block hover:bg-indigo-500 pl-2 pr-5  hover:text-white ">{name}</a>
    </Link>
    </div>
  )
}

export default LinkMaker