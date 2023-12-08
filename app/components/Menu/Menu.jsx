"use client"
import getData from '../global/getData.js'
import Section from '../Section/Section.jsx'

export default async function Menu() {
    const data = await getData()

    const section = data.sort((elm1, elm2) => {
        return elm1.id - elm2.id
    }).map(entry => {
        return <Section id={entry.id} question={entry.question} answer={entry.answer} />
    })

    return (
        <div>
            {section}
        </div>
    )
}