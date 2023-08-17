import './Navbar.css'



export default function Navbar() {
    return (
        <div className="navbar w-[100%] p-[20px] flex justify-between">
            <div className="logo flex items-center font-bold gap-[10px]">
                <img src="/logo.svg"/>
                <span>LLM e-Commerce</span>
            </div>
            <div className="icons flex gap-[20px]">
                <img src="/search.svg" className="icon hover:translate-y-[-2px]" />
                <img src="/app.svg" className="icon hover:translate-y-[-2px]" />
                <img src="/expand.svg" className="icon hover:translate-y-[-2px]" />
                <img src="/notifications.svg" className="icon hover:translate-y-[-2px]"/>
                <div className="notif relative flex ">
                    <span className="bg-red-600 flex text-[12px] w-[10px] h-[10px] rounded-[50%] absolute top-[20px] right-[20px]"></span>
                </div>
                <div className="user flex items-center gap-[10px]">
                    <img className="w-[26px] h-[26px] object-cover rounded-[50%]" src="/user-avatar.jpg" />
                    <span>Name</span>
                </div>
                <img src="/settings.svg" className="icon ml-7  hover:translate-y-[-2px]" />
            </div>
        </div>
    )
}
