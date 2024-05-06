import * as React from "react"

export function Sun(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_10_60)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 0c.534 0 .967.433.967.967v3.866a.967.967 0 01-1.934 0V.967c0-.534.433-.967.967-.967zM4.247 4.247a.967.967 0 011.367 0L8.348 6.98a.967.967 0 01-1.367 1.367L4.247 5.614a.967.967 0 010-1.367zm-3.28 9.286a.967.967 0 000 1.934h3.866a.967.967 0 000-1.934H.967zm3.28 11.22a.967.967 0 010-1.367l2.734-2.734a.967.967 0 111.367 1.367l-2.734 2.734a.967.967 0 01-1.367 0zm19.92-11.22a.967.967 0 000 1.934h3.866a.967.967 0 000-1.934h-3.866zm-3.515-5.185a.967.967 0 010-1.367l2.734-2.734a.967.967 0 111.367 1.367l-2.734 2.734a.967.967 0 01-1.367 0zm-5.185 15.819a.967.967 0 00-1.934 0v3.866a.967.967 0 001.934 0v-3.866zm5.185-3.515a.966.966 0 011.367 0l2.734 2.734a.966.966 0 11-1.367 1.367l-2.734-2.734a.966.966 0 010-1.367zM10.633 14.5a3.867 3.867 0 117.734 0 3.867 3.867 0 01-7.734 0zM14.5 8.7a5.8 5.8 0 100 11.6 5.8 5.8 0 000-11.6z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_60">
          <path fill="#fff" d="M0 0H29V29H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
