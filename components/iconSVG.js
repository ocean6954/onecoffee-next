import styles from 'styles/icon.module.css'
import Image from 'next/image'
import desert from 'images/kirinuki/desert.png'
import latte2 from 'images/kirinuki/latte2.png'
import latte from 'images/kirinuki/latte.png'
import mug from 'images/kirinuki/mug.png'

const Drink = () => (
  <svg
    width="60%"
    height="60%"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.0358 34.7573C50.0358 29.8073 53.5701 24.8573 60.6437 24.8573C64.3944 24.8573 67.9915 23.3673 70.6437 20.7151C73.2959 18.0629 74.7858 14.4658 74.7858 10.7151V7.53225M30.2358 34.7573V32.2823C30.2358 28.3438 31.8004 24.5666 34.5853 21.7817C37.3702 18.9968 41.1474 17.4323 45.0858 17.4323C47.7115 17.4323 50.2296 16.3892 52.0862 14.5326C53.9428 12.676 54.9858 10.1579 54.9858 7.53225V5.05725M74.7858 47.6273V64.4573C74.7858 72.3342 71.6567 79.8885 66.0869 85.4583C60.5171 91.0282 52.9628 94.1573 45.0858 94.1573H35.1858C27.3089 94.1573 19.7546 91.0282 14.1848 85.4583C8.61494 79.8885 5.48584 72.3342 5.48584 64.4573V47.6273C5.48584 46.8396 5.79875 46.0841 6.35573 45.5271C6.91272 44.9702 7.66815 44.6573 8.45584 44.6573H71.8158C72.6035 44.6573 73.359 44.9702 73.916 45.5271C74.4729 46.0841 74.7858 46.8396 74.7858 47.6273Z"
      stroke="#D9A62E"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.8359 44.657H82.2109C85.493 44.657 88.6406 45.9608 90.9614 48.2815C93.2821 50.6023 94.5859 53.7499 94.5859 57.032C94.5859 60.314 93.2821 63.4617 90.9614 65.7824C88.6406 68.1032 85.493 69.407 82.2109 69.407H74.7859"
      stroke="#D9A62E"
      stroke-width="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const Bean = () => (
  <svg
    width="60%"
    height="60%"
    viewBox="0 0 83 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M72.5122 10.6924C69.111 7.50076 64.9946 5.17107 60.5078 3.89853C56.0211 2.62599 51.2948 2.44766 46.7249 3.3785C35.9469 5.27858 26.0439 10.5342 18.4281 18.3957C10.5395 26.015 5.26811 35.939 3.37115 46.7423C2.44778 51.3066 2.62972 56.0256 3.90179 60.5052C5.17385 64.9849 7.4991 69.095 10.6833 72.4923C13.3428 75.0439 16.4843 77.0394 19.924 78.3621C23.3637 79.6848 27.0326 80.3082 30.716 80.1956C43.6356 79.6759 55.8467 74.1509 64.7674 64.7889C81.8103 47.7377 85.2717 23.4592 72.5122 10.6924ZM7.6546 47.3915C9.42038 37.5154 14.2493 28.4458 21.4569 21.4684C28.4209 14.2437 37.4938 9.41077 47.3739 7.66295C49.0638 7.40747 50.7703 7.27729 52.4795 7.27346C55.5933 7.16561 58.6973 7.68039 61.6096 8.78764C64.522 9.8949 67.1842 11.5724 69.4402 13.7218C69.6215 13.8889 69.7814 14.0779 69.9162 14.2844C67.2212 16.6209 64.109 18.427 60.7435 19.6075C55.8824 21.3561 51.4969 24.2162 47.9364 27.96C44.1935 31.5213 41.334 35.9079 39.5858 40.7701C38.0717 45.1045 35.5335 49.0091 32.1871 52.152C29.033 55.4847 25.133 58.0211 20.8078 59.5524C17.0879 60.8773 13.6418 62.872 10.64 65.4381C7.55527 59.9605 6.49826 53.571 7.6546 47.3915ZM61.6954 61.7163C46.3355 77.0797 24.8317 80.5419 13.7553 69.4629C13.5716 69.2855 13.3982 69.0976 13.2361 68.9003C15.952 66.5704 19.077 64.7654 22.452 63.5772C27.2994 61.8011 31.679 58.9448 35.2591 55.2247C38.9932 51.656 41.8512 47.2717 43.6097 42.4146C45.1238 38.0802 47.662 34.1755 51.0084 31.0327C54.1505 27.6855 58.0542 25.1468 62.3877 23.6323C66.0905 22.279 69.52 20.2707 72.5122 17.7033C79.608 29.4401 75.4111 47.9974 61.6954 61.7163Z"
      fill="#D9A62E"
      stroke="#D9A62E"
      stroke-width="5"
    />
  </svg>
)
const Food = () => (
  <svg
    width="60%"
    height="60%"
    viewBox="0 0 91 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M51.7933 27.6989L15.521 45.3089H75.9749L65.8992 29.928"
      stroke="#D9A62E"
      stroke-width="9"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M59.8535 34.3862C64.3052 34.3862 67.914 30.3942 67.914 25.4697C67.914 20.5453 64.3052 16.5532 59.8535 16.5532C55.4018 16.5532 51.793 20.5453 51.793 25.4697C51.793 30.3942 55.4018 34.3862 59.8535 34.3862Z"
      fill="white"
      stroke="#D9A62E"
      stroke-width="9"
    />
    <path
      d="M63.8843 16.5531L67.9145 5.40747"
      stroke="#D9A62E"
      stroke-width="9"
      stroke-linecap="round"
    />
    <path
      d="M16.5285 56.5815C15.3154 57.2503 14.1869 57.9636 13.1471 58.7126C8.30277 62.2079 5.44531 66.5123 5.44531 71.1667C5.44531 82.8629 23.4888 92.3434 45.7479 92.3434C68.007 92.3434 86.0505 82.8629 86.0505 71.1667C86.0505 66.3964 83.052 61.9983 77.99 58.4585"
      stroke="#D9A62E"
      stroke-width="9"
    />
    <path
      d="M15.521 45.5317H75.9749V72.2812H15.521V45.5317Z"
      stroke="#D9A62E"
      stroke-width="9"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M15.521 45.5317H77.99" stroke="#D9A62E" stroke-width="9" />
  </svg>
)

const CoffeeCup = () => (
  <svg
    id="_レイヤー_1"
    data-name="レイヤー 1"
    xmlns="http://www.w3.org/2000/svg"
    width="5rem"
    height="5rem"
    viewBox="0 0 173.93 139.95"
  >
    <path d="m13.28,97.26c-6.85-9.56-10.79-22.16-10.78-37.72V17.8c0-8.45,6.61-15.29,14.77-15.3h115.42c21.4,0,38.73,17.96,38.74,40.11.01,11.07-4.39,20.92-11.4,27.99-7,7.09-16.58,11.5-27.07,12.12-.75.04-1.48.06-2.19.06-1.57,0-3.08-.12-4.53-.32-3.67,9.42-9.49,17.7-16.91,24.12l.11-.1-.08.07c-.24.21-.54.45-.84.7h22.12v13.97c0,8.97-7.02,16.23-15.68,16.23H18.22c-8.66,0-15.68-7.26-15.68-16.23v-13.97h20.21c-3.53-2.85-6.73-6.15-9.47-9.99Zm-1.14,19.92v4.04c0,3.48,2.73,6.29,6.08,6.3h96.74c3.36,0,6.08-2.82,6.08-6.3v-4.04H12.14Zm30.65-9.94h45.45c3.88-1.47,7.17-3.13,9.68-4.62,2.66-1.58,4.51-3.01,5.23-3.65l-.05.05.08-.07c7.11-6.16,12.5-14.37,15.4-23.75l1.44-4.63,4.5,1.38c1.8.55,3.85.88,6.26.88.54,0,1.09-.02,1.65-.05,8.22-.48,15.61-3.94,20.9-9.3,5.28-5.37,8.5-12.54,8.51-20.88,0-8.35-3.25-15.86-8.53-21.34-5.29-5.47-12.54-8.83-20.61-8.84H17.27c-2.86,0-5.17,2.4-5.18,5.36v41.74c.02,13.88,3.41,24.13,8.89,31.81,5.36,7.48,12.85,12.65,21.8,15.9Z" />

    <path d="m132.95,22.9c10.26,0,18.57,8.32,18.58,18.58,0,10.26-8.32,18.58-18.58,18.58-3.31,0-6.35-.94-8.93-2.36l-2.17-1.19v-30.05l2.17-1.19c2.58-1.43,5.62-2.36,8.93-2.36Zm-2.72,28.35c.88.27,1.78.43,2.72.43,5.63,0,10.19-4.57,10.2-10.2,0-5.63-4.57-10.19-10.2-10.2-.94,0-1.84.17-2.72.43v19.54Z" />
  </svg>
)

const Tea = () => (
  <svg
    width="5.5rem"
    height="5.5srem"
    viewBox="0 0 161 161"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M159.536 25.1635C158.117 21.8158 155.769 18.9901 152.801 16.9846C149.843 14.9815 146.226 13.8029 142.396 13.8029H130.354H123.645H123.238H19.0599C16.904 13.8029 14.8144 14.245 12.9239 15.0456C10.0869 16.2484 7.69457 18.2364 5.99653 20.746C4.29848 23.2535 3.29883 26.3244 3.30324 29.5617V59.0361C3.30104 67.7876 5.08116 76.1612 8.29581 83.7653C13.1249 95.1746 21.1711 104.859 31.3047 111.707C41.436 118.555 53.6965 122.563 66.8284 122.559C75.5803 122.561 83.9557 120.784 91.5577 117.566C102.967 112.737 112.652 104.691 119.502 94.5576C120.815 92.614 122.022 90.5886 123.121 88.4947C123.296 88.4991 123.469 88.5123 123.645 88.5123C128.784 88.5145 133.715 87.4664 138.188 85.5737C144.903 82.7323 150.59 78.0073 154.616 72.0484C158.642 66.0962 161.004 58.87 161 51.16C161 45.4155 161 40.7302 161 37.4775C161 34.2248 161 32.4116 161 32.4116C161 29.8576 160.478 27.3923 159.536 25.1635ZM116.123 59.0357C116.123 65.8613 114.745 72.3267 112.253 78.2215C108.517 87.0573 102.255 94.5991 94.3855 99.9172C86.5075 105.23 77.0617 108.326 66.8284 108.33C60.0029 108.33 53.5352 106.953 47.6427 104.459C38.805 100.724 31.265 94.462 25.9473 86.5928C20.6293 78.7145 17.5341 69.2687 17.5341 59.0357V29.5614C17.5341 29.3338 17.5737 29.1479 17.6489 28.9712C17.7596 28.7058 17.9627 28.458 18.2105 28.2923C18.4624 28.1263 18.719 28.0379 19.0595 28.0335H77.495V41.4018L65.4577 52.3005L65.7983 51.9929C63.649 53.9388 62.4242 56.7028 62.4242 59.604V72.5522C62.4198 75.3713 63.5808 77.9718 65.4313 79.8135C67.2731 81.6644 69.8711 82.8251 72.6927 82.821H92.8227C95.644 82.8254 98.2423 81.6644 100.084 79.8135C101.935 77.9718 103.096 75.3716 103.091 72.5522V59.604C103.091 56.7028 101.867 53.9388 99.7171 51.9929L87.6578 41.0701V28.0335H116.123L116.123 59.0357ZM82.7577 50.348L92.8934 59.5241L92.9287 59.604V72.5522L92.8975 72.6251L92.8224 72.6563H72.6924L72.6172 72.6251L72.5883 72.5522V59.604L72.6235 59.5241L82.7577 50.348ZM146.769 37.4771C146.769 40.7295 146.769 45.4152 146.769 51.1596C146.769 54.3702 146.123 57.3971 144.956 60.1568C143.205 64.2981 140.264 67.8426 136.572 70.3369C134.192 71.94 131.519 73.1031 128.638 73.7355C129.757 69.0124 130.354 64.0906 130.354 59.0361V28.0335H142.396C143.019 28.0379 143.576 28.1574 144.098 28.374C144.872 28.7011 145.553 29.2652 146.027 29.9658C146.5 30.6733 146.767 31.4761 146.77 32.4069C146.769 32.4069 146.769 34.2248 146.769 37.4771Z"
      fill="#4B4B4B"
    />
    <path d="M133.658 132.969H0V147.197H133.658V132.969Z" fill="#4B4B4B" />
  </svg>
)

const Maruta = () => (
  <svg width="6rem" height="6rem" viewBox="0 0 177 177" fill="none">
    <g clip-path="url(#clip0_108_362)">
      <path
        d="M104.208 49.6813C99.5269 47.4267 94.097 46.2305 88.5035 46.2305C81.0052 46.2371 73.8961 48.3666 68.4793 52.2229C65.6895 54.219 63.4784 56.5764 61.9117 59.2234C60.2118 62.0814 59.3127 65.2802 59.3161 68.4755C59.3127 71.6643 60.2118 74.8596 61.9117 77.7179C64.2417 81.6454 68.0026 84.9465 72.7923 87.2631C77.4662 89.5146 82.9 90.7104 88.5038 90.7139C95.9914 90.7073 103.101 88.5778 108.521 84.7183C111.308 82.7288 113.519 80.3749 115.092 77.7179C116.795 74.8596 117.691 71.6608 117.685 68.4789C117.691 65.2905 116.795 62.0917 115.092 59.2265C112.755 55.2921 108.991 51.9913 104.208 49.6813ZM106.687 72.7411C105.366 74.9827 102.978 77.013 99.9628 78.4642C96.6075 80.089 92.6457 80.9443 88.4689 80.9443C83.0694 80.9443 77.8538 79.4246 74.1544 76.771C72.4988 75.5887 71.1737 74.1955 70.315 72.7373C69.4908 71.3441 69.085 69.9509 69.085 68.4789C69.085 66.9969 69.4908 65.5968 70.315 64.2005C71.6332 61.9624 74.0213 59.9283 77.0362 58.4771C80.3919 56.8557 84.3467 56.0008 88.4789 56.0008H88.537C93.9296 56.0008 99.1418 57.5198 102.845 60.1703C104.501 61.3526 105.826 62.7458 106.684 64.2005C107.512 65.6041 107.914 67.0007 107.914 68.4755C107.914 69.944 107.516 71.3407 106.687 72.7411Z"
        fill="#4B4B4B"
      />
      <path
        d="M126.916 40.133C116.601 32.7716 102.961 28.7141 88.5035 28.7075C74.042 28.7141 60.3989 32.7716 50.0838 40.1299C39.3628 47.7706 33.4596 58.0857 33.4596 69.1814C33.4596 80.2598 39.3628 90.5714 50.0838 98.2091C60.4023 105.57 74.0493 109.628 88.5035 109.635C102.954 109.628 116.598 105.571 126.916 98.2125C137.637 90.5711 143.54 80.2598 143.54 69.1814C143.54 58.0892 137.637 47.7706 126.916 40.133ZM122.249 91.6818C113.3 98.0825 101.329 101.609 88.5374 101.609L88.5035 103.005V101.609H88.4693C75.6741 101.609 63.7 98.0825 54.7508 91.6818C46.1967 85.5536 41.4854 77.5612 41.4854 69.1811C41.4854 60.787 46.1967 52.7885 54.7508 46.6599C63.6962 40.2592 75.6706 36.733 88.5374 36.733C101.329 36.733 113.3 40.2592 122.246 46.6599C130.806 52.7916 135.518 60.7905 135.515 69.1811C135.518 77.5612 130.806 85.5498 122.249 91.6818Z"
        fill="#4B4B4B"
      />
      <path
        d="M135.787 13.7762L136.618 14.1814L136.68 14.2087L135.787 13.7762Z"
        fill="#4B4B4B"
      />
      <path
        d="M169.404 42.8347C162.185 30.6728 150.637 20.9572 136.683 14.2122L136.618 14.1814C122.651 7.4568 106.149 3.65165 88.5035 3.64508H88.5C64.9365 3.66202 43.4103 10.407 27.2424 21.9248L27.2393 21.9283C19.1585 27.7026 12.3997 34.7269 7.59683 42.8347C2.78983 50.9317 -0.00345383 60.1637 3.2051e-06 69.8725V107.131C-0.00345383 116.836 2.78983 126.064 7.59648 134.169C14.8186 146.33 26.3671 156.042 40.3204 162.791C54.3013 169.533 70.8232 173.348 88.5 173.355H88.5035C112.063 173.334 133.593 166.599 149.761 155.075L150.708 154.397L149.761 155.072C157.841 149.301 164.6 142.277 169.403 134.169C174.21 126.068 177.003 116.839 177 107.131V69.8725C177.003 60.1637 174.21 50.9317 169.404 42.8347ZM157.399 89.7978C151.914 99.0809 142.566 107.199 130.616 112.966C118.669 118.737 104.157 122.144 88.5035 122.144C67.6278 122.151 48.7856 116.073 35.3502 106.46C28.6287 101.657 23.2634 95.9883 19.6014 89.7981C15.9359 83.6017 13.9598 76.9044 13.9533 69.8728C13.9598 66.3539 14.4538 62.9166 15.408 59.5919C16.341 56.3285 17.7277 53.1736 19.506 50.1321L19.6014 49.9479L19.6048 49.9378L19.6556 49.8628C20.4663 48.5004 21.3797 47.1715 22.3504 45.8634C22.6536 45.4617 22.9737 45.0662 23.2869 44.6645C24.0468 43.7072 24.8474 42.7666 25.6923 41.8435C26.0498 41.4484 26.4007 41.0533 26.7754 40.6647C27.9235 39.4758 29.1262 38.3108 30.407 37.19L30.761 36.8869C32.0491 35.7796 33.4181 34.7169 34.8355 33.6812C35.3122 33.3406 35.8027 33.0067 36.2867 32.6731C37.3871 31.9098 38.5214 31.1741 39.6864 30.4623C40.2042 30.1456 40.7152 29.8252 41.2469 29.522C42.8617 28.5886 44.5207 27.6856 46.2513 26.8476L46.3875 26.7761L46.5375 26.708C48.2854 25.87 50.0976 25.0967 51.9505 24.361C52.5057 24.1397 53.0748 23.9351 53.6403 23.7208C55.085 23.1825 56.5567 22.6781 58.0522 22.2045C58.6347 22.0206 59.2138 21.8298 59.8066 21.6562C63.8811 20.457 68.1391 19.5066 72.5441 18.8284C73.1982 18.7295 73.8622 18.6479 74.5229 18.5594C76.1581 18.3378 77.8174 18.1574 79.4899 18.0177C80.1779 17.9562 80.8589 17.895 81.5476 17.8473C83.8399 17.6972 86.153 17.5987 88.5038 17.5987H88.5069C90.8473 17.5987 93.1539 17.6976 95.4393 17.8473C96.1445 17.895 96.8394 17.9596 97.5377 18.0177C99.1933 18.1608 100.832 18.3378 102.45 18.5559C103.125 18.6444 103.806 18.7295 104.474 18.8318C108.879 19.5097 113.133 20.4601 117.201 21.6593C117.787 21.8298 118.356 22.0171 118.932 22.201C120.444 22.6781 121.929 23.1891 123.388 23.7342C123.939 23.9389 124.495 24.1397 125.036 24.3541C126.937 25.1105 128.797 25.9008 130.586 26.7622L130.616 26.7761H130.613L130.705 26.8238C132.463 27.6756 134.145 28.5917 135.791 29.5424C136.285 29.8252 136.762 30.1249 137.242 30.4181C138.472 31.1675 139.664 31.9409 140.819 32.7412C141.248 33.0409 141.681 33.3337 142.103 33.6369C145.111 35.8276 147.84 38.1881 150.259 40.6993C150.606 41.0567 150.933 41.4249 151.267 41.7893C152.133 42.7396 152.957 43.7103 153.737 44.698C154.04 45.0797 154.353 45.4613 154.639 45.853C155.61 47.1577 156.52 48.4828 157.331 49.8417L157.399 49.9475C158.234 51.3545 158.952 52.7989 159.609 54.2602L159.824 54.6795C160.472 56.1681 161.003 57.6906 161.459 59.2272L161.592 59.5881C162.546 62.9166 163.04 66.3504 163.047 69.8725C163.039 76.9041 161.064 83.6014 157.399 89.7978Z"
        fill="#4B4B4B"
      />
    </g>
    <defs>
      <clipPath id="clip0_108_362">
        <rect width="177" height="177" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const Frame = () => (
  <svg
    id="_レイヤー_1"
    data-name="レイヤー 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 410 620"
  >
    <path
      class="cls-1"
      d="m359,1.5H51c0,27.34-22.16,49.5-49.5,49.5v518c27.34,0,49.5,22.16,49.5,49.5h308c0-27.34,22.16-49.5,49.5-49.5V51c-27.34,0-49.5-22.16-49.5-49.5Z"
      fill=" none"
      stroke="#d9a62e"
      stroke-miterlimit="10"
      stroke-width="3px"
    />
  </svg>
)

const PaperBag = ({ slug, eyecatch }) => (
  <div className={styles.test2}>
    <svg
      width="1315"
      height="1414"
      viewBox="0 0 1315 1414"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.bag}
    >
      <path
        d="M332.48 8H982.16C1025.24 8 1066.55 24.3654 1097.01 53.496C1127.47 82.6267 1144.58 122.136 1144.58 163.333V304.686C1144.58 364.972 1159.26 424.429 1187.46 478.349L1264.12 624.984C1292.32 678.903 1307 738.36 1307 798.646V1250.67C1307 1291.86 1289.89 1331.37 1259.43 1360.5C1228.97 1389.63 1187.66 1406 1144.58 1406H170.06C126.983 1406 85.6713 1389.63 55.2116 1360.5C24.7519 1331.37 7.63989 1291.86 7.63989 1250.67V798.646C7.64418 738.36 22.3247 678.903 50.5188 624.984L170.06 396.333V163.333C170.06 122.136 187.172 82.6267 217.632 53.496C248.091 24.3654 289.403 8 332.48 8Z"
        fill="#E53352"
        stroke="#636363"
        stroke-width="15"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M170.057 1406C213.133 1406 254.446 1389.63 284.905 1360.5C315.365 1331.37 332.477 1291.86 332.477 1250.67V798.647C332.473 738.361 317.792 678.904 289.598 624.984L170.057 396.334M391.183 318.667H915.623"
        stroke="#636363"
        stroke-width="15"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <div className={styles.imageContainer}>
      <Image
        src={eyecatch.url}
        alt=""
        layout="responsive"
        width={eyecatch.width}
        height={eyecatch.height}
        placeholder="blur"
        blurDataURL={eyecatch.blurDataURL}
        className={styles.image}
      />
    </div>
  </div>
)

const Test2 = ({ eyecatch }) => (
  <div className={styles.test2}>
    <svg
      width="359"
      height="403"
      viewBox="0 0 359 403"
      z-index="1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.bag}
    >
      <path
        d="M92.25 5H266.75C278.32 5 289.416 9.60058 297.598 17.7897C305.779 25.9788 310.375 37.0855 310.375 48.6667V88.4033C310.376 105.351 314.319 122.065 321.892 137.223L342.483 178.444C350.056 193.602 353.999 210.316 354 227.263V354.333C354 365.914 349.404 377.021 341.223 385.21C333.041 393.399 321.945 398 310.375 398H48.625C37.0549 398 25.9587 393.399 17.7775 385.21C9.59619 377.021 5 365.914 5 354.333V227.263C5.00115 210.316 8.94423 193.602 16.517 178.444L48.625 114.167V48.6667C48.625 37.0855 53.2212 25.9788 61.4025 17.7897C69.5837 9.60058 80.6799 5 92.25 5Z"
        stroke="#F74040"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48.625 398C60.1951 398 71.2913 393.399 79.4725 385.21C87.6538 377.021 92.25 365.914 92.25 354.333V227.263C92.2488 210.316 88.3058 193.602 80.733 178.444L48.625 114.167M157.688 92.3334H201.312M179.5 267C179.5 278.581 184.096 289.688 192.277 297.877C200.459 306.066 211.555 310.667 223.125 310.667C234.695 310.667 245.791 306.066 253.973 297.877C262.154 289.688 266.75 278.581 266.75 267C266.75 255.419 262.154 244.312 253.973 236.123C245.791 227.934 234.695 223.333 223.125 223.333C211.555 223.333 200.459 227.934 192.277 236.123C184.096 244.312 179.5 255.419 179.5 267Z"
        stroke="#F74040"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <div className={styles.imageContainer}>
      <Image
        src={eyecatch.url}
        alt=""
        layout="responsive"
        width={eyecatch.width}
        height={eyecatch.height}
        placeholder="blur"
        blurDataURL={eyecatch.blurDataURL}
        className={styles.image}
      />
    </div>
  </div>
  // <span className={styles.test2}>あいうえお</span>
)

const Desert = () => (
  <div className={styles.itemContainer}>
    <Image
      src={desert}
      alt=""
      layout="responsive"
      width={desert.width}
      height={desert.height}
      placeholder="blur"
      blurDataURL={desert.blurDataURL}
    />
  </div>
)

const Latte = () => (
  <div className={styles.itemContainer}>
    <Image
      src={latte}
      alt=""
      layout="responsive"
      width={latte.width}
      height={latte.height}
      placeholder="blur"
      blurDataURL={latte.blurDataURL}
    />
  </div>
)
const Latte2 = () => (
  <div className={styles.itemContainer}>
    <Image
      src={latte2}
      alt=""
      layout="responsive"
      width={latte2.width}
      height={latte2.height}
      placeholder="blur"
      blurDataURL={latte2.blurDataURL}
    />
  </div>
)
const Mug = () => (
  <div className={styles.itemContainer}>
    <Image
      src={mug}
      alt=""
      layout="responsive"
      width={mug.width}
      height={mug.height}
      placeholder="blur"
      blurDataURL={mug.blurDataURL}
    />
  </div>
)

const BagBase = () => (
  <svg
    width="1315"
    height="1414"
    viewBox="0 0 1315 1414"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M332.48 8H982.16C1025.24 8 1066.55 24.3654 1097.01 53.496C1127.47 82.6267 1144.58 122.136 1144.58 163.333V304.686C1144.58 364.972 1159.26 424.429 1187.46 478.349L1264.12 624.984C1292.32 678.903 1307 738.36 1307 798.646V1250.67C1307 1291.86 1289.89 1331.37 1259.43 1360.5C1228.97 1389.63 1187.66 1406 1144.58 1406H170.06C126.983 1406 85.6713 1389.63 55.2116 1360.5C24.7519 1331.37 7.63989 1291.86 7.63989 1250.67V798.646C7.64418 738.36 22.3247 678.903 50.5188 624.984L170.06 396.333V163.333C170.06 122.136 187.172 82.6267 217.632 53.496C248.091 24.3654 289.403 8 332.48 8Z"
      fill="#E53352"
      stroke="#636363"
      stroke-width="15"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M170.057 1406C213.133 1406 254.446 1389.63 284.905 1360.5C315.365 1331.37 332.477 1291.86 332.477 1250.67V798.647C332.473 738.361 317.792 678.904 289.598 624.984L170.057 396.334M391.183 318.667H915.623"
      stroke="#636363"
      stroke-width="15"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const HeaderBean = () => (
  <svg
    width="17"
    height="20"
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_148_11)">
      <path
        d="M4.48522 2.0706C6.88651 0.871456 9.34125 2.01077 10.0265 2.32878C12.2788 3.37475 13.3101 5.24094 14.0098 6.50574C14.8292 7.98879 16.4382 10.8994 15.2783 13.9176C15.0661 14.4702 14.2501 16.3545 12.178 17.3498C9.91204 18.4383 7.71644 17.7082 6.95964 17.3986C4.58961 16.4303 3.55367 14.3749 2.70073 12.6833C1.88644 11.0683 0.777365 8.86687 1.44124 6.23805C1.59145 5.64395 2.20676 3.20783 4.48522 2.0706Z"
        fill="#D9A62E"
      />
      <path
        d="M6.03841 3.66981V3.66981C5.91724 5.93058 6.79628 8.13027 8.44215 9.6849V9.6849V9.6849C10.088 11.2395 10.9671 13.4392 10.8459 15.7V15.7"
        stroke="white"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_148_11">
        <rect
          width="13.628"
          height="16.8759"
          fill="white"
          transform="translate(0 2.87903) rotate(-12.1959)"
        />
      </clipPath>
    </defs>
  </svg>
)

export {
  Drink,
  Bean,
  Food,
  CoffeeCup,
  Tea,
  Maruta,
  Frame,
  Test2,
  PaperBag,
  Desert,
  Mug,
  Latte,
  Latte2,
  BagBase,
  HeaderBean,
}
