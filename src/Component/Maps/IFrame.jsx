import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        <div className="">
            <div className="">
                <iframe src={src} width="100%"></iframe>
            </div>
        </div>
    );
};

export default Iframe;