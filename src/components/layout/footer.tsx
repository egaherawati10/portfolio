export default function Footer() {

  return (

    <footer
      className="
      border-t border-border
      mt-24
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-10
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-6
        "
      >

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Ega Herawati. All rights reserved.
        </p>

        <div className="flex items-center gap-6">

          {/* GitHub */}

          <a
            href="https://github.com/egaherawati10/"
            target="_blank"
            className="text-muted hover:text-text transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.74.11 3.03.74.81 1.19 1.83 1.19 3.09 0 4.44-2.69 5.42-5.26 5.71.41.35.78 1.04.78 2.1v3.11c0 .3.21.65.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
          </a>

          {/* Instagram */}

          <a
            href="https://www.instagram.com/egaherawati10?igsh=cWF1NnFyNGZqa2tp"
            target="_blank"
            className="text-muted hover:text-text transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm4.25 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.25-.88a1.13 1.13 0 1 0 0 2.25 1.13 1.13 0 0 0 0-2.25Z"/>
            </svg>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/egaherawati10/"
            target="_blank"
            className="text-muted hover:text-text transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05C21 8.59 22 10.46 22 13.17V21h-4v-6.96c0-1.66-.03-3.8-2.32-3.8-2.32 0-2.68 1.81-2.68 3.68V21h-4V9Z"/>
            </svg>
          </a>

        </div>

      </div>

    </footer>

  )

}