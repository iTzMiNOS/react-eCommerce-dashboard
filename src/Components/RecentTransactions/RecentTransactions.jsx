import React from 'react'
import './RecentTransactions.css'



export default function RecentTransactions() {

    const [transactions, setTransactions] = React.useState([])

    React.useEffect(() => {
        fetch('/api/transactions')
        .then(res => res.json())
        .then(data => setTransactions(data.transactions))
        .catch(err => console.log(err))
        }
   )

    return (
        <div className="recent-transactions">
            <h1 className="mb-[20px] xxl:text-[24px]">Recent Orders</h1>
            <div className="list">
                {transactions.map(user => (
                    <div key={user.id} className="item flex items-center justify-between mb-[30px]">
                        <div className="user flex gap-[20px]">
                            <div className="info flex flex-col gap-[5px]">
                                <span className="name text-[14px] font-[500]">{user.name}</span>
                                <span className="platform text-[12px]">{user.platform}</span>
                            </div>
                        </div>
                        <span className="value font-[500]">${user.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
