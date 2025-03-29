import React from 'react';

const GenarateImage = () => {
    const handelClick = (e) => {
        e.preventDefault()
    }
    return (
        <div className='container mx-auto px-5 py-5'>
            <h3 className='text-3xl font-medium text-center'>Genarate an Image </h3>
            <form
                onClick={handelClick}
                className='place-items-center pt-20'>

                <fieldset className="w-80">

                    <div className="join">
                        <input
                            type="text"
                            placeholder="type your message here"
                            className="input input-bordered join-item w-full" />
                        <button className="btn btn-primary join-item">Genarate</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default GenarateImage;