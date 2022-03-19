

export const Form = () => {
  return (
    <div>
        <form>
            <div className="border-2 rounded justify-self-center pt-2 ">
                <h3 className="font-extralight">Find Your Favourite Movies, Tv shows or people ...</h3>
                <input type='text' className=" border-0 border-b-2 focus:ring-0 focus:border-slate-500 w-full" placeholder="search ..."/>
            </div>
        </form>
    </div>
  )
}
