import React from 'react';

const GenarateImage = () => {


    const handelSubmit = (e) => {
        e.preventDefault()
        const prompt = e.target.prompt.value;
        const form = new FormData()
        form.append('prompt', prompt)
        fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': import.meta.env.VITE_CD_KEY,
            },
            body: form,
        }).then(response => response.arrayBuffer())
            .then(buffer => {
                const blob = new Blob([buffer], { type: "image/png" });
                const url = URL.createObjectURL(blob);
                console.log(url)
            })

    }
    return (
        <div className='container mx-auto px-5 py-5'>
            <h3 className='text-3xl font-medium text-center'>Genarate an Image </h3>
            <form
                onSubmit={handelSubmit}
                className='place-items-center pt-20'>

                <fieldset className="w-80">

                    <div className="join">
                        <input
                            type="text"
                            name='prompt'
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