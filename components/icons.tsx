type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  bilibili: (props: IconProps) => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1478"
      width="200"
      height="200"
      {...props}
    >
      <path
        d="M262.4 64h499.2C892.8 64 960 131.2 960 262.4v499.2c0 131.2-67.2 198.4-198.4 198.4H262.4C131.2 960 64 892.8 64 761.6V262.4C64 131.2 131.2 64 262.4 64z"
        fill="#FF5CA1"
        p-id="1479"
      ></path>
      <path
        d="M707.2 454.4c3.2 0 16-3.2 16-3.2l6.4 48-12.8 3.2c0-6.4-9.6-44.8-9.6-48m25.6-6.4l6.4 51.2h19.2c-3.2-19.2-9.6-51.2-9.6-51.2h-16m-12.8 70.4s28.8-6.4 38.4-3.2c6.4 19.2 16 128 16 131.2-6.4 0-28.8 3.2-28.8 3.2-3.2-6.4-25.6-124.8-25.6-131.2m105.6-64h16c0 3.2 3.2 48 0 48h-12.8c0-3.2-3.2-44.8-3.2-48m22.4 0v51.2h19.2v-51.2c-6.4 0-12.8-3.2-19.2 0m-19.2 67.2s28.8-3.2 38.4 0c3.2 22.4 3.2 128 3.2 131.2h-28.8c0-6.4-12.8-128-12.8-131.2m-67.2-131.2c16 86.4 28.8 236.8 32 246.4h28.8c-12.8-92.8-22.4-243.2-22.4-246.4-3.2-6.4-38.4 0-38.4 0m-38.4 208c-3.2-25.6-89.6-51.2-140.8-44.8 0 0-6.4-54.4-9.6-105.6-3.2-44.8 0-89.6 0-96-3.2-3.2-38.4 16-57.6 22.4 0 0 22.4 96 38.4 297.6 0 0 25.6 3.2 70.4-6.4 51.2-9.6 102.4-35.2 99.2-67.2M617.6 640l-9.6-54.4c3.2 0 48 16 54.4 19.2 0 3.2-44.8 35.2-44.8 35.2m-275.2-185.6c3.2 0 16-3.2 16-3.2l6.4 48c-3.2 0-12.8 3.2-12.8 3.2 0-6.4-9.6-44.8-9.6-48m25.6-6.4l6.4 51.2h19.2c-3.2-19.2-6.4-51.2-6.4-51.2h-19.2m-12.8 70.4s28.8-6.4 38.4-3.2c6.4 19.2 16 128 16 131.2-6.4 0-28.8 3.2-28.8 3.2-3.2-6.4-25.6-124.8-25.6-131.2m105.6-64h16c0 3.2 3.2 48 0 48h-12.8c0-3.2-3.2-44.8-3.2-48m25.6 0v51.2h19.2v-51.2c-6.4 0-12.8-3.2-19.2 0m-22.4 67.2s28.8-3.2 38.4 0c3.2 22.4 3.2 128 3.2 131.2h-28.8c0-6.4-12.8-128-12.8-131.2m-67.2-131.2c16 86.4 28.8 236.8 32 246.4h28.8c-9.6-92.8-19.2-243.2-19.2-249.6-6.4-3.2-41.6 3.2-41.6 3.2m-38.4 208c-3.2-25.6-89.6-51.2-140.8-44.8 0 0-6.4-54.4-9.6-105.6-3.2-44.8 0-89.6 0-96-3.2-3.2-38.4 16-57.6 22.4 0 0 22.4 96 38.4 297.6 0 0 25.6 3.2 70.4-6.4s105.6-35.2 99.2-67.2M252.8 640l-6.4-54.4c3.2 0 48 16 54.4 19.2-3.2 3.2-48 35.2-48 35.2"
        fill="#FFFFFF"
        p-id="1480"
      ></path>
    </svg>
  ),
  external: (props: IconProps) => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="17530"
      width="200"
      height="200"
      {...props}
    >
      <path
        d="M512.001274 15.045039a497.880869 497.880869 0 0 1 496.99699 497.086142c0 137.285182-55.886849 261.573274-145.67566 351.652466-89.81301 90.098296-214.335444 145.167493-351.32133 145.167494-137.262257 0-261.529972-55.069197-351.31751-145.173862-89.788811-90.079192-145.67566-214.367284-145.67566-351.646098a497.880869 497.880869 0 0 1 496.99317-497.086142zM489.215293 932.144136V771.518957a405.118201 405.118201 0 0 0-129.123952 26.595319 137.138718 137.138718 0 0 0-17.101903 6.511917c3.53042 7.062113 6.785742 14.098754 10.570881 20.887043 25.514032 45.602527 55.33538 80.88762 88.987717 101.223193a372.744559 372.744559 0 0 0 46.671078 5.40898z m320.120674-717.103117a128.736778 128.736778 0 0 0-10.591259-10.061441 441.222218 441.222218 0 0 1-58.315604 36.934404c27.141693 70.795612 43.939205 156.01602 46.672351 247.447775h144.843999a419.629601 419.629601 0 0 0-122.609487-274.320738z m-46.672352-40.41388a415.300634 415.300634 0 0 0-85.71329-49.415687 434.384259 434.384259 0 0 1 33.623044 51.562976c3.805517 7.062113 7.861934 15.201692 11.942549 23.339997 13.571483-8.138305 27.117495-16.556802 40.137509-25.493654z m-181.233302-77.3572c-15.172399-2.404557-30.921738-4.056417-46.64688-5.133883V253.306336a429.022402 429.022402 0 0 0 129.127773-26.588951c5.985921-2.177856 11.392353-4.356986 17.076431-6.787015-2.954752-7.337211-7.036641-14.373851-10.541588-20.887043-24.989309-46.15527-55.610477-80.888893-89.013189-101.774662z m-92.217567-5.133883c-15.723868 1.077466-31.473207 2.729325-46.671078 5.133883-33.652337 20.887043-63.473685 55.619393-88.987717 101.774662-3.781319 6.510644-7.036641 13.547285-10.816686 20.887042 5.684078 2.430029 11.392353 4.609159 17.351529 6.787016a428.859382 428.859382 0 0 0 129.123952 26.595318V92.130962z m-142.141419 33.075396a414.845959 414.845959 0 0 0-85.732395 49.415687c13.020014 8.940673 26.591498 17.355349 40.412607 25.493654a233.26369 233.26369 0 0 1 11.667451-23.339997c10.041064-19.007209 21.708515-35.811089 33.652337-51.562976z m-122.088585 79.763031c-3.255322 3.004423-7.060839 6.536116-10.316162 10.061441a419.628328 419.628328 0 0 0-122.614581 274.32456h144.874565c2.703853-91.430482 19.529385-176.648342 46.370508-247.447775a478.47757 478.47757 0 0 1-58.31433-36.934405zM92.051999 535.189712a420.779662 420.779662 0 0 0 122.614581 274.319464l10.316162 10.293237a425.318773 425.318773 0 0 1 58.318151-37.413278c-26.841123-71.096182-43.666655-155.742195-46.370508-247.19815H92.051999z m169.286933 314.488813a415.88267 415.88267 0 0 0 85.732395 49.383847 360.53328 360.53328 0 0 1-33.652337-51.562976c-4.075521-7.313012-8.137031-15.176219-11.667451-22.788528a416.635367 416.635367 0 0 0-40.412607 24.962563z m273.441954 82.465611a371.780443 371.780443 0 0 0 46.646879-5.40898c33.402711-20.335574 64.02388-55.620666 89.013189-101.223194 3.504948-6.787015 7.586836-13.823656 10.541589-20.887042a133.885943 133.885943 0 0 0-17.076431-6.511918 405.259571 405.259571 0 0 0-129.120132-26.594045v160.625179z m142.169439-33.081764a416.339892 416.339892 0 0 0 85.71329-49.383847 390.678122 390.678122 0 0 0-40.137509-24.962563c-4.075521 7.612308-8.137031 15.475516-11.942548 22.788528-10.592533 18.706639-21.684316 36.362558-33.623045 51.562976z m121.789288-79.259959l10.591259-10.293237a420.780936 420.780936 0 0 0 122.614582-274.319464H787.101455c-2.729325 91.455954-19.530658 176.101968-46.672351 247.198149a395.620965 395.620965 0 0 1 58.315604 37.414552z m-99.82478-558.105599a203.624467 203.624467 0 0 1-19.004662 7.33721 460.617875 460.617875 0 0 1-145.124191 29.826442v190.500018h206.195866c-2.452954-84.393841-17.375727-162.553409-42.064466-227.66367z m-209.69954 37.163652a456.062207 456.062207 0 0 1-144.873292-29.826442 187.929892 187.929892 0 0 1-19.530658-7.33721c-24.412368 65.110261-39.608965 143.269829-42.064466 227.66367H489.215293V298.860466z m0 426.554165v-190.224919H282.746877c2.454228 84.144215 17.652098 161.977742 42.064466 227.388572 6.510644-2.428756 13.020014-5.158081 19.530658-7.33721 45.019218-17.354076 93.864332-27.396413 144.873292-29.826443z m45.570687 0a465.365857 465.365857 0 0 1 144.874566 29.826443c6.50937 2.17913 12.743643 4.908455 19.254287 7.33721 24.688739-65.410831 39.608965-143.244357 42.064466-227.388572H534.78598v190.224919z"
        fill="#3B3F51"
        p-id="17531"
      ></path>
    </svg>
  ),
  weibo: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="20676"
      width="200"
      height="200"
    >
      <path
        d="M382.48 698.688c-8.66 0.277-16.34 7.787-17.514 16.939-1.088 9.088 4.821 16.384 13.546 16.256 8.875-0.15 16.896-7.872 18.027-17.174 0.917-9.28-5.397-16.512-14.059-16.021z m-58.944 10.41c-26.666 1.26-50.816 24.513-54.293 52.566-3.627 28.224 15.168 50.859 42.027 50.39 27.242-0.427 52.352-24.3 55.68-53.1 2.986-28.863-16.363-50.986-43.414-49.855z"
        fill="#FFFFFF"
        p-id="20677"
      ></path>
      <path
        d="M766.46 673.685c-12.204-127.594-183.852-215.53-383.404-196.437-199.552 19.093-351.424 137.984-339.22 265.6C56.058 870.443 227.706 958.4 427.258 939.307c199.552-19.115 351.424-138.006 339.2-265.622z m-251.137 49.451c-9.067 83.03-89.237 151.339-175.85 150.976-83.606-0.32-139.563-64.981-127.809-142.997 11.542-76.523 84.48-140.886 165.718-145.238 84.053-4.693 147.008 55.979 137.941 137.259z"
        fill="#FFFFFF"
        p-id="20678"
      ></path>
      <path
        d="M1022.096 313.877C988.411 125.653 838.758 50.091 735.056 42.88c-19.498-1.877-37.61 9.877-40.298 28.715-2.582 18.325 10.538 36.565 28.714 40.298 67.84 14.976 196.203 34.731 230.166 225.75 2.965 19.37 18.922 40.021 43.05 34.773 17.664-3.904 33.451-13.717 25.408-58.539zM720.38 261.291a24.363 24.363 0 0 0-27.499 17.45c-3.946 13.142 3.328 28.182 16.683 30.976 28.373 5.931 42.261 25.494 46.379 46.358 0 0 3.626 14.144 17.258 18.048 13.334 3.818 37.42-6.038 30.486-32.299-6.89-35.733-42.41-74.112-83.307-80.533z"
        fill="#E79014"
        p-id="20679"
      ></path>
      <path
        d="M737.638 160.427c-29.782-5.142-43.414 16.213-43.414 33.258 0 17.024 12.16 29.312 34.603 35.563 59.605 16.533 97.877 42.667 108.373 111.68 3.051 20.032 21.355 30.72 34.646 30.72 17.941 0 32.47-14.55 32.47-32.47 0-0.66-0.065-1.322-0.108-1.962l0.171-0.043c-11.35-88.533-77.696-161.365-166.741-176.746z"
        fill="#E79014"
        p-id="20680"
      ></path>
      <path
        d="M731.6 697.472c-11.968 124.053-188.842 223.381-380.65 218.496-177.75-4.395-296.192-97.984-276.566-206.57C93.52 603.924 238.8 512.767 409.68 502.677c183.552-10.817 333.59 74.58 321.92 194.794z m-27.968-198.805c-7.082 0.192-10.069 1.024-11.136-1.515-0.874-2.07 0.171-4.33 3.99-13.973 10.645-26.859 27.562-82.07-7.232-112.875-22.955-20.33-120.15-35.84-222.57 35.2-5.1 3.541-13.377 11.093-17.558 9.707-4.608-1.558-5.59-6.528-6.208-15.915-3.35-50.603 39.21-191.232-70.57-179.563-116.694 19.755-274.134 204.16-319.126 293.355-159.68 316.459 71.232 445.397 297.11 452.139 245.055 7.232 493.311-131.904 525.951-318.038 21.781-124.245-124.48-149.589-172.65-148.522z"
        fill="#D62629"
        p-id="20681"
      ></path>
      <path
        d="M377.382 585.877c-81.238 4.374-154.176 68.715-165.718 145.238-11.733 78.016 44.203 142.677 127.808 142.997 86.614 0.363 166.784-67.947 175.851-150.976 9.067-81.28-53.888-141.952-137.941-137.259zM366.95 758.955c-3.328 28.8-28.438 52.65-55.68 53.098-26.88 0.47-45.675-22.165-42.027-50.389 3.477-28.053 27.627-51.307 54.293-52.565 27.051-1.131 46.4 20.992 43.414 49.856z m11.562-27.094c-8.704 0.128-14.613-7.168-13.546-16.256 1.173-9.13 8.853-16.661 17.514-16.938 8.64-0.491 14.976 6.741 14.06 16-1.132 9.322-9.153 17.045-18.028 17.194z"
        fill="#030000"
        p-id="20682"
      ></path>
    </svg>
  ),
};
