import React from 'react'
import '../App.css'

export default function Mails(props) {

    if (!props.children) {
        return (
            <div className='mail-container'>
                <section >
                    Results: 0 Mail(s)
                </section>
                <hr />
                <section className='mail-list-empty'>
                </section>
            </div>
        )
    }

    return (
        <div className='mail-container'>
            <section >
                Results: {props.number} Mail(s)
            </section>
            <section className='mail-list'>
                {props.children}
            </section>
        </div>


    )
}
