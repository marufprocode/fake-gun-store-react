import React, { useState } from 'react';
import Modal from '../modal/Modal';

const GunCard = ({gun, count, setCount}) => {
    const {name, action, category, img} = gun;
    const [modalData, setModalData] = useState({});
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className='max-h-[260px] w-full' /></figure>
                <div className="card-body items-start">
                    <h2 className="card-title">
                    {name}
                    </h2>
                    <p className='text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolores.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{action}</div> 
                        <div className="badge badge-outline">Category: {category}</div>
                    </div>
                    <div className="button-group flex mt-3">
                        <button className="btn btn-sm mr-3" onClick={()=>setCount(count+1)}>Add to Cart</button>
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-info" onClick={()=>setModalData(gun)}
                        >Details</label>
                        {
                            modalData && (<Modal modalData={modalData} setModalData={setModalData}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default GunCard;