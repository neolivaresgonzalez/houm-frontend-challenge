import Image from 'next/image'
import React from 'react'
interface LogoProps {
    size: number,
    withPokemon?: Boolean
}

const Logo = (props: LogoProps) => {
    return (
        <div
            style={{
                position: "relative",
                width: "auto",
                display: "flex",
                justifyContent: "space-around",
                top: "0",
                left: "0"
            }}
        >
            <div style={{
                width: `${props.size}px`,
                height: `${props.size}px`,
                position: "relative",
                overflow: "hidden",
                borderRadius: "50%",
                border: `5px solid white`,
                top: "0",
                left: "0",
            }}>
                <img
                    src="/images/me-4.jpeg"
                    alt="logo"
                    style={{
                        display: "inline",
                        width: "auto",
                        margin: "0 auto",
                        height: "100%"
                    }}
                />
            </div>
            {props.withPokemon ?

                <div style={{
                    position: "absolute",
                    marginTop: `${0.5 * props.size}px`,
                    marginLeft: `${-0.1 * props.size}px`,
                    top: "0px",
                    left: "0px",
                    height: "120px",
                    width: "120px"
                }}>
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png"
                        alt="logo"
                        style={{
                            height: "auto",
                            width: "100%"
                        }} />

                </div>

                : ""}
        </div>
    )
}

export default Logo