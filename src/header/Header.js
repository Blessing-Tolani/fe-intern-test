const Header = () => {
  return (
    <div className="flex h-28 items-center justify-between">
      <div>
        <svg
          width="3.837837em"
          height="1em"
          viewBox="0 0 269 71"
          fill="none"
          className="text-white text-[2.3125rem]"
        >
          <path
            d="M44.078 21.134c-4.495 0-8.03 3.333-8.788 8.332h-.303c-.454-4.999-3.787-8.332-8.736-8.332-4.495 0-8.03 3.333-8.787 8.332h-.202l-.202-7.474h-3.03L14.08 48h3.182V33.052c.404-5.454 3.434-8.989 7.828-8.989 4.09 0 6.817 2.98 6.817 7.524V48h3.131V34.416c0-6.212 3.131-10.353 7.878-10.353 4.09 0 6.818 2.98 6.818 7.524V48h3.13V30.628c0-5.656-3.484-9.494-8.786-9.494zM70.069 48.808c7.272 0 13.382-5.505 13.382-13.938 0-8.282-6.11-13.736-13.382-13.736-7.273 0-13.383 5.454-13.383 13.736 0 8.434 6.11 13.938 13.383 13.938zm0-2.828c-5.96 0-10.151-4.343-10.151-11.11 0-6.615 4.191-10.908 10.15-10.908 5.96 0 10.151 4.293 10.151 10.908 0 6.767-4.191 11.11-10.15 11.11zM99.993 21.134c-4.848 0-8.535 3.333-9.292 8.332h-.253l-.151-7.524h-3.03V48h3.181V34.416c0-6.212 3.333-10.353 8.333-10.353 4.444 0 7.322 2.98 7.322 7.524V48h3.182V30.628c0-5.656-3.737-9.494-9.292-9.494zM137.699 33.608c0-7.424-4.747-12.474-12.019-12.474-7.322 0-12.574 4.848-12.574 13.685 0 9.393 5.353 13.989 12.675 13.989 6.717 0 11.009-4.242 11.767-9.797h-3.232c-.758 4.141-3.939 7.02-8.535 7.02-5.504 0-9.443-3.687-9.494-10.706h21.412v-1.718zm-12.12-9.696c5.303 0 8.636 3.13 8.888 9.09h-18.18c.253-5.505 3.939-9.09 9.292-9.09zM149.577 44.465a2403.741 2403.741 0 00-5.201-14.19l-3.232-8.333h-3.485l10.252 26.159-.556 1.414c-1.969 4.545-3.636 5.252-8.534 5v2.928c7.423.354 9.494-1.868 12.473-9.19l10.504-26.311h-3.484l-3.081 8.282c-1.464 3.888-3.333 8.484-5.504 14.241h-.152zM170.034 31.89l-.202-9.948h-5.959V48h6.161V37.748c.152-7.928 3.182-10.503 11.312-11.008v-5.202c-7.272 0-9.948 2.777-11.11 10.352h-.202zM184.133 48h6.161V21.942h-6.161V48zM206.251 48.808c7.373 0 11.716-3.03 11.716-8.13 0-3.889-2.475-6.111-7.575-7.222l-6.868-1.465c-2.172-.505-3.384-1.616-3.384-3.03 0-2.07 2.071-3.332 5.505-3.332 3.787 0 6.009 1.817 6.009 4.797h5.909c0-5.858-4.495-9.292-12.12-9.292-6.969 0-11.363 3.131-11.363 7.979 0 3.939 2.879 6.413 7.626 7.373l6.565 1.414c2.676.606 3.585 1.465 3.585 3.03 0 2.121-2.121 3.383-5.555 3.383-4.191 0-6.565-1.717-6.767-4.797h-6.06c.202 5.959 4.747 9.292 12.777 9.292zM245.909 34.112c0-7.17-4.898-12.978-12.877-12.978-8.03 0-13.332 5.252-13.332 13.736 0 9.191 5.403 13.938 13.635 13.938 5.807 0 11.564-3.484 12.372-9.898h-5.605c-.657 2.929-3.131 5.1-6.767 5.1-4.444 0-7.575-2.828-7.727-7.877h20.301v-2.02zm-13.13-8.18c4.091 0 6.767 2.524 7.07 6.716h-14.241c.303-4.444 3.333-6.717 7.171-6.717zM256 25a4 4 0 11-8 0 4 4 0 018 0z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <nav>
        <ul className="flex justify-evenly w-40 sm:w-52 text-xxs sm:text-sm font-light  text-white">
          <li>
            <a href="https://risevest.com/">Contact us</a>
          </li>
          <li>
            <a href="https://risevest.com/">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
