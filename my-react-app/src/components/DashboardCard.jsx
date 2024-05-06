import React from 'react'
import UnderlinedButtons from './UnderlinedButtons'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const DashboardCard = (props) => {
    return (
        <> <div className="w-[47%] h-[93%] rounded-lg border-[1px] border-black-500">
            <div className="w-full h-[10%] flex justify-around px-[20px]  text-black">
                {props.isMytrajets ? <button className='border-b-4 border-yellow-400 w-[48%] justify-center flex items-end'>Mes Trajets</button> : <>

                    <button className='border-b-4 border-yellow-400 w-[48%] justify-center flex items-end'>Mes annonces</button>
                    <button className='border-b-4 border-yellow-400 w-[48%] justify-center flex items-end'>Mes Livraisons</button>

                </>
                }

            </div>
            <div className="w-full h-full ">
                <div className='h-[25%] flex justify-between  pt-5 items-center px-[7%] w-full'>
                    <h1 className='text-[19px]  text-yellow-400 '>Mes annonces en cours:</h1>
                    <MoreVertIcon style={{ fontSize: '35px', color: "grey" }} />
                </div>
                <div className='w-full h-[65%] flex justify-center items-center flex-col'>
                    <div className='w-[87%] h-[87%] bg-yellow-100  rounded-lg items-center flex flex-col gap-7 justify-center '>
                        <h1 className='bg-black-500'>Aucune annonce n'a ete crée</h1>
                        <button className=' whitespace-nowrap shadow-custom hover:bg-yellow-500 w-auto h-auto px-[10%] py-[5%] rounded-full bg-yellow-400 text-white'>Ajouter une annonce</button>
                    </div>
                    <div className='w-full h-[10%] flex justify-end items-end '>
                        <p className='ml-auto text-[15px] text-yellow-400 mr-10 underline' >Voir plus</p>
                    </div>
                </div>

            </div>

        </div></>
    )
}

export default DashboardCard