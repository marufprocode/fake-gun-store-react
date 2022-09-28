import React, { useEffect, useState } from 'react';
import GunCard from '../gunCard/GunCard';

const AllGun = ({count, setCount}) => {
    const [guns, setGuns] = useState([]);

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
        .then(res => res.json())
        .then (data => setGuns(data));
    },[]);
    return (
        <div>
            <h1 className='text-3xl font-bold mt-5'>Copa Samsu Gun Store</h1>
            <p className='px-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magnam nobis cum, perferendis quod impedit reprehenderit nulla ullam accusamus esse odio mollitia beatae at ipsum veniam, necessitatibus blanditiis.</p>
            <div className="card-container w-[96%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 my-5">
            {
                guns.map(gun => <GunCard gun={gun} key={gun.id} count={count} setCount={setCount}/>)
            }
            </div>
        </div>
    );
};

export default AllGun;