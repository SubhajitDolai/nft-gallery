import React from 'react'

const defaultImg = 'https://i.seadn.io/gae/cdKWxDPySCNr6IknWNn5PFpTsPZ496B2qwHEsNquMUe9LhBKFfxARY_hrptQLBIPA8iuBNrFbv3mtrZFA425bmywDpIY1vbWuMgBjQ?auto=format&dpr=1&w=640';

// function Card(props) {}  this also works only thing is everywhere you need to write props.username, props.password, props.anything
function Card({ number = '000', name = 'Monkey', price = '100', img = defaultImg }) {
    // assign default value if user don't give anything
    return (
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] m-2">
            <div>
                <img
                    src={img}
                    alt="test"
                    className="object-cover object-center rounded-t-xl"
                />
            </div>
            <div className="flex flex-col py-3 px-3 pb-10">
                <div className="flex justify-between ">
                    <h1 className="font-bold text-sm">{name}</h1>
                    <h1 className='text-base'>Price</h1>
                </div>
                <div className="flex justify-between text-base">
                    <p>#{number}</p>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card