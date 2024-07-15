import React from 'react'
import styled from 'styled-components'

function Button({ name, icon, onClick, bPad, color }) {
    return (

        <button style={
            {

                padding: bPad,
                color: color,
            }

        }
            onClick={onClick}
            className='flex w-full  justify-center items-center gap-5 bg-black transition-all duration-[0.4s] ease-[ease-in-out] cursor-pointer rounded-lg border-[none] outline: none hover:bg-gray-900 text-lg font-semibold '
        >
            {icon} {name}
        </button>
    )
}
const ButtonStyled = styled.button`
    outline:none;
    border: none;
    font-family: inherit;
    font-size:inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    transition: all .4s ease-in-out;
    cursor: pointer;
    
`
export default Button