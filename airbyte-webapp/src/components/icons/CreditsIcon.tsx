import { theme } from "theme";

interface Props {
  color?: string;
}

export const CreditsIcon = ({ color = theme.greyColor20 }: Props) => (
  <svg width="30" height="24" viewBox="0 0 30 24" fill={color}>
    <path
      d="M17 2C18.83 1.99913 20.6049 2.62567 22.0289 3.77513C23.4528 4.92458 24.4396 6.52748 24.8247 8.31647C25.2098 10.1055 24.9699 11.9724 24.1451 13.6059C23.3202 15.2395 21.9603 16.5408 20.292 17.293C19.7588 18.4719 18.9475 19.5039 17.9279 20.3004C16.9082 21.097 15.7106 21.6343 14.4376 21.8663C13.1647 22.0984 11.8545 22.0182 10.6194 21.6327C9.38423 21.2472 8.26104 20.5678 7.34611 19.6529C6.43119 18.738 5.75184 17.6148 5.36632 16.3796C4.9808 15.1445 4.90062 13.8343 5.13266 12.5614C5.3647 11.2884 5.90203 10.0908 6.69857 9.07114C7.49511 8.05148 8.52709 7.24024 9.706 6.707C10.3401 5.30389 11.3656 4.1135 12.6593 3.27861C13.9531 2.44371 15.4602 1.99976 17 2ZM13 8C12.2121 8 11.4319 8.1552 10.7039 8.45672C9.97595 8.75825 9.31451 9.20021 8.75736 9.75736C8.20021 10.3145 7.75825 10.9759 7.45673 11.7039C7.1552 12.4319 7 13.2121 7 14C7 14.7879 7.1552 15.5681 7.45673 16.2961C7.75825 17.0241 8.20021 17.6855 8.75736 18.2426C9.31451 18.7998 9.97595 19.2417 10.7039 19.5433C11.4319 19.8448 12.2121 20 13 20C14.5913 20 16.1174 19.3679 17.2426 18.2426C18.3679 17.1174 19 15.5913 19 14C19 12.4087 18.3679 10.8826 17.2426 9.75736C16.1174 8.63214 14.5913 8 13 8ZM17 4C16.1527 3.99901 15.3148 4.17794 14.5418 4.52496C13.7688 4.87198 13.0783 5.37918 12.516 6.013C13.6463 5.94439 14.7782 6.1165 15.837 6.51795C16.8958 6.9194 17.8573 7.54105 18.6579 8.34178C19.4586 9.14252 20.0801 10.1041 20.4814 11.1629C20.8828 12.2218 21.0547 13.3537 20.986 14.484C21.8952 13.6756 22.5372 12.6099 22.8268 11.4283C23.1164 10.2467 23.04 9.00491 22.6076 7.86772C22.1753 6.73053 21.4074 5.75164 20.4059 5.06088C19.4044 4.37013 18.2166 4.00014 17 4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9338 10.8869C11.8855 9.81015 13.4616 9.49428 14.7573 10.1158C16.4788 10.9417 17.1068 13.0455 16.1696 14.6684L14.0611 18.3151C13.9433 18.5189 13.7494 18.6675 13.522 18.7285C13.2946 18.7894 13.0524 18.7576 12.8484 18.6401L15.4011 14.2243C16.0811 13.0464 15.6263 11.5197 14.3782 10.9186C13.4417 10.4676 12.2969 10.6929 11.6051 11.4685C11.2235 11.8943 11.0092 12.4441 11.0021 13.0158C10.9949 13.5875 11.1954 14.1425 11.5662 14.5777C11.6329 14.6558 11.7046 14.7294 11.7809 14.7981L10.2907 17.3806C10.2324 17.4816 10.1548 17.5701 10.0623 17.641C9.96985 17.712 9.8643 17.7641 9.7517 17.7942C9.6391 17.8244 9.52166 17.8321 9.40609 17.8169C9.29051 17.8017 9.17906 17.7639 9.0781 17.7056L10.6959 14.9019C10.4635 14.5669 10.2967 14.1909 10.2041 13.7938L9.2127 15.5153C9.09485 15.7191 8.90096 15.8678 8.67359 15.9287C8.44622 15.9897 8.20396 15.9579 8 15.8404L10.5637 11.3997C10.6704 11.2174 10.7944 11.0456 10.9338 10.8869ZM13.8928 12.3004C14.5103 12.657 14.7235 13.45 14.3662 14.0671L11.9078 18.3145C11.79 18.5183 11.5961 18.667 11.3687 18.7279C11.1413 18.7889 10.8991 18.7571 10.6951 18.6396L12.9778 14.6852C12.7947 14.6466 12.6221 14.5688 12.4719 14.457C12.3218 14.3453 12.1977 14.2023 12.1082 14.0379C12.0187 13.8735 11.966 13.6916 11.9536 13.5049C11.9413 13.3181 11.9696 13.1309 12.0366 12.9561C12.1037 12.7814 12.2078 12.6233 12.342 12.4927C12.4761 12.3621 12.6369 12.2622 12.8134 12.1999C12.9899 12.1375 13.1778 12.1142 13.3641 12.1316C13.5505 12.1489 13.7309 12.2065 13.8928 12.3004ZM12.9986 13.0986C12.9564 13.131 12.9209 13.1715 12.8943 13.2176H12.8942C12.8541 13.2871 12.8355 13.3669 12.8407 13.447C12.846 13.527 12.8748 13.6037 12.9237 13.6674C12.9725 13.731 13.0392 13.7787 13.1151 13.8045C13.1911 13.8303 13.273 13.833 13.3505 13.8122C13.428 13.7915 13.4976 13.7482 13.5505 13.6879C13.6034 13.6275 13.6372 13.5529 13.6477 13.4733C13.6581 13.3938 13.6448 13.3129 13.6093 13.241C13.5738 13.169 13.5178 13.1092 13.4483 13.0691C13.4022 13.0425 13.3513 13.0252 13.2985 13.0182C13.2457 13.0113 13.192 13.0148 13.1405 13.0286C13.0891 13.0424 13.0409 13.0662 12.9986 13.0986Z"
      fill="currentColor"
    />
  </svg>
);
