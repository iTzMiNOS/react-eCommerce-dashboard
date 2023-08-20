
import './Navbar.css'

export default function Navbar() {

    return (
        <div className="navbar w-[100%] p-[20px] flex justify-between">
            <div className="logo flex items-center font-bold gap-[10px]">
                <img src="/logo.svg"/>
                <span>LLM e-Commerce</span>
            </div>
            <div className="icons text-[color:var(--soft-text)] flex gap-[20px]">
                <img src="/notifications.svg" className="icon sm:hidden lg:flex items-center h-[40px] mt-4 rounded-lg p-2 bg-[#336699] hover:translate-y-[-2px]"/>
                
                <div className="notif relative sm:hidden lg:flex flex ">
                    <span className="bg-red-600 flex text-[12px] w-[10px] h-[10px] rounded-[50%] absolute top-[19px] right-[24px]"></span>
                </div>
                
                <div className="user flex sm:hidden lg:flex items-center gap-[10px]">
                    <img className="w-[26px] h-[26px] object-cover rounded-[50%]" src="/user-avatar.jpg" />
                    <span>Name</span>
                </div>
                <img src="/settings.svg" className="icon ml-7 h-[40px] mt-4 rounded-lg p-2 bg-[#336699] hover:translate-y-[-2px]" />
            </div>
        </div>
    )
}
