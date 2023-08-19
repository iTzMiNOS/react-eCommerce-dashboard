import { Link } from 'react-router-dom'
import './Menu.css'
import {sideMenu} from './Items'
import Toggle from 'react-toggle'
import React from 'react';


export default function Menu() {

    const [mode, setMode] = React.useState('light');

    function toggleMode() {
        if (mode === 'light') {
          document.documentElement.classList.add('dark');
          setMode('dark');
        } else {
          document.documentElement.classList.remove('dark');
          setMode('light');
        }
      }

    return (
        <div className="menu">
            {sideMenu.map(element =>(
            <div key={element.id} className="item flex flex-col gap-[10px] mb-[20px]">
                <span className="title sm:hidden md:flex text-[12px] font-[200] text-[color:var(--soft-text)]">{element.title}</span>
                {element.items.map(it => (
                    <Link key={it.id} to={it.url} className="item-list flex items-center gap-[10px] p-[10px] hover:bg-[color:var(--soft-bg)]">
                        <img src={it.icon} className="h-[30px] rounded-lg p-1 bg-[#336699]"/>
                        <span className="item-title sm:hidden md:flex">{it.title}</span>
                    </Link>
                ))} 
            </div>
            ))}
            <div className="md:block sm:hidden mt-12">
                <div className="mb-[10px]">Dark Mode</div>
                <Toggle
                    onChange={toggleMode} className="ml-10"/>
            </div>
        </div>
    )
}
