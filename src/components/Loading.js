import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () =>(
        <div className='relative'>
            <div className='absolute top-20'>
            <Loader type="Circles" color="#47A1F1 " height={65} width={65} />
            </div>
        </div>
    )
export default Loading
