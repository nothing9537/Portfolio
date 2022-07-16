import React from 'react'

export default function Github({ width = 32, height = 32, link, ...props }) {
    return (
        <a href={link} target="_blank">
            <svg {...props} width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 1C7.52829 1 0.666626 7.86167 0.666626 16.3333C0.666626 23.1183 5.05579 28.8492 11.1508 30.8808C11.9175 31.015 12.205 30.555 12.205 30.1525C12.205 29.7883 12.1858 28.5808 12.1858 27.2967C8.33329 28.0058 7.33663 26.3575 7.02996 25.495C6.85746 25.0542 6.10996 23.6933 5.45829 23.3292C4.92163 23.0417 4.15496 22.3325 5.43913 22.3133C6.64663 22.2942 7.50913 23.425 7.79663 23.885C9.17663 26.2042 11.3808 25.5525 12.2625 25.15C12.3966 24.1533 12.7991 23.4825 13.24 23.0992C9.82829 22.7158 6.26329 21.3933 6.26329 15.5283C6.26329 13.8608 6.85746 12.4808 7.83496 11.4075C7.68163 11.0242 7.14496 9.4525 7.98829 7.34417C7.98829 7.34417 9.27246 6.94167 12.205 8.91583C13.4316 8.57083 14.735 8.39833 16.0383 8.39833C17.3416 8.39833 18.645 8.57083 19.8716 8.91583C22.8041 6.9225 24.0883 7.34417 24.0883 7.34417C24.9316 9.4525 24.395 11.0242 24.2416 11.4075C25.2191 12.4808 25.8133 13.8417 25.8133 15.5283C25.8133 21.4125 22.2291 22.7158 18.8175 23.0992C19.3733 23.5783 19.8525 24.4983 19.8525 25.9358C19.8525 27.9867 19.8333 29.635 19.8333 30.1525C19.8333 30.555 20.1208 31.0342 20.8875 30.8808C26.9441 28.8492 31.3333 23.0992 31.3333 16.3333C31.3333 7.86167 24.4716 1 16 1Z" fill="white" />
            </svg>
        </a>
    )
}
