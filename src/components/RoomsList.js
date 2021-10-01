import React from 'react'
import { Room } from './Room'

export const RoomsList = ({rooms}) => {
    if(rooms.lenght===0){
        <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
        </div>
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map((room,index)=>{
                        return <Room key={index} room={room} />
                    })
                }
            </div>
        </section>
    )
}
