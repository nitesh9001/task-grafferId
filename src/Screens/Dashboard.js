import React,{ useEffect, useState } from 'react'
import { getPeople } from '../services/peopleService'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner';

const Dashboard = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const peopleData = useSelector((state) => state?.people?.people);
    console.log(peopleData);

    useEffect(() => {
        getPeople(dispatch, setIsLoading);
    }, []);

    return (
        <div className="main_card_wrap">
            
        {isLoading ?
        <>
          <Spinner/>
        </>
            :
        <>
            {peopleData && peopleData?.length !== 0 ? peopleData.map((data, i) => (<Card key={data?._id} data={data} /> )) : 
             <div style={{color:"white", textAlign:"center", fontSize:"40px"}}>
                <b>No data Found</b>
             </div>
            }
            </>
        }
        </div>
    )
}

export default Dashboard
