import React from 'react';
import {useSelector} from 'react-redux'



export default function Dashboard(){

    const profile = useSelector((state)=>state.mode.userData)


    return(
        <>
        <p>Welcome {profile.username} !</p>
        </>
    )
}