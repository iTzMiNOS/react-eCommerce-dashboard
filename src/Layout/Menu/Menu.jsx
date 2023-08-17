import { Link } from 'react-router-dom'
import './Menu.css'
import {sideMenu} from './Items'


export default function Menu() {
    return (
        <div className="menu">
            {sideMenu.map(element =>(
            <div key={element.id} className="item flex flex-col gap-[10px] mb-[20px]">
                <span className="title text-[12px] font-[200] text-[color:var(--soft-text)]">{element.title}</span>
                {element.items.map(it => (
                    <Link key={it.id} to="/" className="item-list flex items-center gap-[10px] p-[10px] hover:bg-[color:var(--soft-bg)]">
                        <img src={it.icon} />
                        <span className="item-title">{it.title}</span>
                    </Link>
                ))} 
            </div>
            ))}
        </div>
    )
}
