import React from "react";


function Card() {
    return (
        <div className="grid place-items-center mt-28">
            <div className="bg-pink-200 shadow-black shadow-lg min-h-20 min-w-20 max-w-sm grid place-items-center rounded-xl p-5">
                
                    <div className="place-items-center rounded-xl">

                        <img src="https://images.pexels.com/photos/24038434/pexels-photo-24038434/free-photo-of-close-up-of-a-kitten-sleeping-in-a-basket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-xl cursor-pointer" />
                    </div>
                    <div className="mt-6 cursor-pointer">
                        <div>
                            <p className="text-xl ">Kitten Lily needs a home. </p>
                        </div>
                        <div>
                            <p className="font-semibold">Contact Us here: </p>
                            <button className="bg-pink-600 rounded-xl px-5 py-2 mt-2  font-normal hover:bg-pink-800 sm:font-semibold">Contact Us</button>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Card