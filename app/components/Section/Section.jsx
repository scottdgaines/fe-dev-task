import { useState } from 'react'

export default function Section({ id, question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    const content = isOpen && <div>{answer}</div>

    return(
    <div>
            <h2>{question}</h2>
            <button onClick={() => setIsOpen(!isOpen)}>
                <svg width="100%" height="100%" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_648_20210)">
                <ellipse
                cx="21.5017"
                cy="23.3923"
                rx="20.4383"
                ry="22.7092"
                transform="rotate(30 21.5017 23.3923)"
                fill="#212633"
                ></ellipse>
                <path
                d="M28.5 26.1398L22.4133 19.9858L14.5 27.9858"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_648_20210">
                <rect width="42" height="44.8767" fill="white" transform="translate(0.5 0.98584)"></rect>
                </clipPath>
            </defs>
            </svg>
            </button>
            {content}
    </div>
    )
}