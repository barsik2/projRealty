import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { ABOUTE_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "../../constRoute/consts";

const Header = () => {
  return (
    <div className="header">
          <div className="main_header">
            <Link className="main_header_link" to={HOME_ROUTE}>
            <svg width="244" height="46" viewBox="0 0 244 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.39851 1L1.84353 1L1.84353 0H0.398511L0.398511 1L0.398511 2.57373L1.39851 2.57373L1.39851 1ZM4.73356 1L7.62359 1V0H4.73356V1ZM10.5136 1L13.4036 1L13.4036 0H10.5136L10.5136 1ZM16.2937 1L19.1837 1V0H16.2937V1ZM22.0737 1L24.9638 1V2.14756e-06L22.0737 0V1ZM27.8538 1L30.7438 1V2.65287e-06L27.8538 2.40022e-06V1ZM33.6339 1L36.5239 1V3.15818e-06L33.6339 2.90553e-06V1ZM39.4139 1L42.304 1V3.66349e-06L39.4139 3.41084e-06V1ZM45.194 1L46.0951 1V2.57373L47.0951 2.57373V1L46.639 1V4.04247e-06L45.194 3.91614e-06V1ZM31.557 0.545011L31.9897 1.29242L46.0951 25.6563V24.606H47.0951V27.7534H46.0951V26.6757H45.818H39.8357V44.0645H42.304V45.0645H39.8357V45.1904L38.8357 45.1904V25.7435H39.5511V25.6757H44.9508L31.557 2.54088L18.3823 25.297H28.5222L23.9562 17.5317L24.8183 17.0248L29.8272 25.5436L30.2702 26.297H29.3962H23.4138V44.0645L24.9638 44.0645V45.0645L23.4138 45.0645V45.1904L22.4138 45.1904V45.0645H22.0737V44.0645H22.4138V26.297H17.8034L17.7286 26.4262L17.5055 26.297H17.3663V26.2165L16.8632 25.9252L31.1242 1.29242L31.557 0.545011ZM15.5661 1.28951L15.1351 0.556478L14.7041 1.28951L0.994335 24.606H0.398512L0.398512 25.6193L0 26.297H0.398513L0.398513 27.7534H1.39851V26.297H6.67776V42.1654H6.85629V44.0645H4.73356V45.0645H6.85629V45.1904L7.85629 45.1904L7.85629 25.7435H7.67776V25.297H7.17776H1.74804L15.1351 2.52941L21.8346 13.9234L22.6966 13.4166L15.5661 1.28951ZM30.6887 32.3243L30.6874 31.8243L29.6874 31.827L29.6887 32.327L29.6914 33.3278L29.6928 33.8278L30.6928 33.8251L30.6914 33.3251L30.6887 32.3243ZM30.6968 35.3267L30.6955 34.8267L29.6955 34.8294L29.6969 35.3294L29.7023 37.331L29.7036 37.831L30.7036 37.8283L30.7023 37.3283L30.6968 35.3267ZM30.7077 39.3299L30.7063 38.8299L29.7063 38.8326L29.7077 39.3326L29.7131 41.3342L29.7145 41.8342L30.7145 41.8315L30.7131 41.3315L30.7077 39.3299ZM30.7185 43.3331L30.7172 42.8331L29.7172 42.8358L29.7185 43.3358L29.7205 44.0645H27.8538V45.0645H30.7438V44.0645H30.7205L30.7185 43.3331ZM17.1914 31.675L17.1927 32.175L17.1955 33.2008L17.1969 33.7008L16.1969 33.7035L16.1955 33.2035L16.1927 32.1777L16.1914 31.6778L17.1914 31.675ZM17.1997 34.7523L17.2011 35.2523L17.2066 37.3038L17.208 37.8038L16.208 37.8065L16.2066 37.3065L16.2011 35.255L16.1997 34.755L17.1997 34.7523ZM17.2108 38.8553L17.2122 39.3553L17.2177 41.4068L17.2191 41.9068L16.2191 41.9095L16.2177 41.4095L16.2122 39.358L16.2108 38.858L17.2108 38.8553ZM17.2219 42.9583L17.2233 43.4583L17.2249 44.0645H19.1837V45.0645H16.2937V44.9865L16.2274 44.9867L16.2261 44.4867L16.2233 43.461L16.2219 42.961L17.2219 42.9583ZM17.0764 38.8331H18.1273V37.8331H17.0764V38.8331ZM20.2292 38.8331H22.331V37.8331H20.2292V38.8331ZM24.4328 38.8331H26.5347V37.8331H24.4328V38.8331ZM28.6365 38.8331H29.6874V37.8331H28.6365V38.8331ZM46.0951 8.86865V5.72119H47.0951V8.86865H46.0951ZM46.0951 15.1636V12.0161H47.0951V15.1636H46.0951ZM46.0951 21.4585V18.311H47.0951V21.4585H46.0951ZM46.0951 34.0483V30.9009H47.0951V34.0483H46.0951ZM46.0951 40.3433V37.1958H47.0951V40.3433H46.0951ZM45.194 45.0645H46.639L47.0951 45.0645L47.0951 43.4907H46.0951V44.0645H45.194V45.0645ZM1.39851 44.0645H1.84353L1.84353 45.0645H0.398511L0.398511 44.0645L0.398513 43.4907H1.39851V44.0645ZM13.4036 45.0645H10.5136L10.5136 44.0645H13.4036L13.4036 45.0645ZM36.5239 45.0645H33.6339V44.0645H36.5239V45.0645ZM0.398512 5.72119L0.398512 8.86865H1.39851L1.39851 5.72119H0.398512ZM0.398512 12.0161L0.398512 15.1636H1.39851L1.39851 12.0161H0.398512ZM0.398512 18.311L0.398512 21.4585H1.39851L1.39851 18.311H0.398512ZM0.398513 30.9009L0.398513 34.0483H1.39851L1.39851 30.9009H0.398513ZM0.398513 37.1958L0.398513 40.3433H1.39851L1.39851 37.1958H0.398513Z" fill="white"/>
              <path d="M71.2951 8.81521C69.8951 7.98854 68.3151 7.52854 66.5551 7.43521V20.5952H65.5151V7.43521C63.8217 7.50187 62.2417 7.96187 60.7751 8.81521L60.3751 7.99521C62.0817 6.99521 63.9617 6.49521 66.0151 6.49521C68.0951 6.49521 69.9884 6.99521 71.6951 7.99521L71.2951 8.81521ZM77.2568 19.7752C77.9368 19.7752 78.5634 19.6552 79.1368 19.4152C79.7234 19.1619 80.2101 18.7952 80.5968 18.3152L81.1768 18.9752C80.7234 19.5352 80.1568 19.9619 79.4768 20.2552C78.7968 20.5352 78.0501 20.6752 77.2368 20.6752C76.1968 20.6752 75.2634 20.4485 74.4368 19.9952C73.6234 19.5419 72.9834 18.9152 72.5168 18.1152C72.0634 17.3152 71.8368 16.4019 71.8368 15.3752C71.8368 14.3485 72.0501 13.4352 72.4768 12.6352C72.9168 11.8352 73.5234 11.2085 74.2968 10.7552C75.0701 10.3019 75.9434 10.0752 76.9168 10.0752C77.8234 10.0752 78.6368 10.2885 79.3568 10.7152C80.0901 11.1285 80.6701 11.7085 81.0968 12.4552C81.5368 13.1885 81.7768 14.0152 81.8168 14.9352L72.9968 16.6552C73.2501 17.6152 73.7568 18.3752 74.5168 18.9352C75.2768 19.4952 76.1901 19.7752 77.2568 19.7752ZM76.9168 10.9552C76.1301 10.9552 75.4234 11.1419 74.7968 11.5152C74.1701 11.8752 73.6834 12.3885 73.3368 13.0552C72.9901 13.7085 72.8168 14.4552 72.8168 15.2952C72.8168 15.4419 72.8301 15.6485 72.8568 15.9152L80.8168 14.3552C80.7234 13.7285 80.5034 13.1552 80.1568 12.6352C79.8101 12.1152 79.3568 11.7085 78.7968 11.4152C78.2368 11.1085 77.6101 10.9552 76.9168 10.9552ZM89.6104 10.0752C90.6104 10.0752 91.5037 10.3019 92.2904 10.7552C93.077 11.2085 93.6904 11.8419 94.1304 12.6552C94.5704 13.4552 94.7904 14.3685 94.7904 15.3952C94.7904 16.4085 94.5704 17.3152 94.1304 18.1152C93.7037 18.9152 93.1037 19.5419 92.3304 19.9952C91.557 20.4485 90.677 20.6752 89.6904 20.6752C88.7304 20.6752 87.8837 20.4619 87.1504 20.0352C86.4304 19.6085 85.8637 19.0019 85.4504 18.2152V24.4752H84.4504V15.3952C84.4504 14.3685 84.6704 13.4552 85.1104 12.6552C85.5504 11.8419 86.157 11.2085 86.9304 10.7552C87.717 10.3019 88.6104 10.0752 89.6104 10.0752ZM89.5904 19.7952C90.3904 19.7952 91.1104 19.6085 91.7504 19.2352C92.3904 18.8485 92.8904 18.3219 93.2504 17.6552C93.6104 16.9885 93.7904 16.2352 93.7904 15.3952C93.7904 14.5419 93.6104 13.7819 93.2504 13.1152C92.8904 12.4485 92.3904 11.9285 91.7504 11.5552C91.1237 11.1685 90.4037 10.9752 89.5904 10.9752C88.7904 10.9752 88.0704 11.1619 87.4304 11.5352C86.8037 11.9085 86.3104 12.4285 85.9504 13.0952C85.6037 13.7619 85.4304 14.5219 85.4304 15.3752C85.4304 16.2285 85.6037 16.9885 85.9504 17.6552C86.3104 18.3219 86.8037 18.8485 87.4304 19.2352C88.0704 19.6085 88.7904 19.7952 89.5904 19.7952ZM102.735 10.0752C103.735 10.0752 104.629 10.3019 105.415 10.7552C106.202 11.2085 106.815 11.8419 107.255 12.6552C107.695 13.4552 107.915 14.3685 107.915 15.3952C107.915 16.4085 107.695 17.3152 107.255 18.1152C106.829 18.9152 106.229 19.5419 105.455 19.9952C104.682 20.4485 103.802 20.6752 102.815 20.6752C101.855 20.6752 101.009 20.4619 100.275 20.0352C99.5554 19.6085 98.9887 19.0019 98.5754 18.2152V24.4752H97.5754V15.3952C97.5754 14.3685 97.7954 13.4552 98.2354 12.6552C98.6754 11.8419 99.282 11.2085 100.055 10.7552C100.842 10.3019 101.735 10.0752 102.735 10.0752ZM102.715 19.7952C103.515 19.7952 104.235 19.6085 104.875 19.2352C105.515 18.8485 106.015 18.3219 106.375 17.6552C106.735 16.9885 106.915 16.2352 106.915 15.3952C106.915 14.5419 106.735 13.7819 106.375 13.1152C106.015 12.4485 105.515 11.9285 104.875 11.5552C104.249 11.1685 103.529 10.9752 102.715 10.9752C101.915 10.9752 101.195 11.1619 100.555 11.5352C99.9287 11.9085 99.4354 12.4285 99.0754 13.0952C98.7287 13.7619 98.5554 14.5219 98.5554 15.3752C98.5554 16.2285 98.7287 16.9885 99.0754 17.6552C99.4354 18.3219 99.9287 18.8485 100.555 19.2352C101.195 19.6085 101.915 19.7952 102.715 19.7952ZM120.12 10.1552V20.5952H119.14V18.3952C118.78 19.1152 118.26 19.6752 117.58 20.0752C116.914 20.4752 116.127 20.6752 115.22 20.6752C113.86 20.6752 112.787 20.3019 112 19.5552C111.227 18.7952 110.84 17.6952 110.84 16.2552V10.1552H111.84V16.1752C111.84 17.3485 112.14 18.2419 112.74 18.8552C113.34 19.4685 114.187 19.7752 115.28 19.7752C116.454 19.7752 117.387 19.4085 118.08 18.6752C118.774 17.9419 119.12 16.9552 119.12 15.7152V10.1552H120.12ZM137.423 10.0752C138.716 10.0752 139.73 10.4552 140.463 11.2152C141.21 11.9752 141.583 13.0685 141.583 14.4952V20.5952H140.583V14.5752C140.583 13.4019 140.296 12.5085 139.723 11.8952C139.15 11.2819 138.35 10.9752 137.323 10.9752C136.15 10.9752 135.216 11.3419 134.523 12.0752C133.843 12.8085 133.503 13.7952 133.503 15.0352V20.5952H132.503V14.5752C132.503 13.4019 132.216 12.5085 131.643 11.8952C131.07 11.2819 130.27 10.9752 129.243 10.9752C128.07 10.9752 127.136 11.3419 126.443 12.0752C125.763 12.8085 125.423 13.7952 125.423 15.0352V20.5952H124.423V10.1552H125.383V12.3952C125.73 11.6619 126.243 11.0952 126.923 10.6952C127.616 10.2819 128.436 10.0752 129.383 10.0752C130.33 10.0752 131.13 10.2885 131.783 10.7152C132.45 11.1419 132.923 11.7685 133.203 12.5952C133.55 11.8219 134.09 11.2085 134.823 10.7552C135.57 10.3019 136.436 10.0752 137.423 10.0752ZM149.716 20.6752C148.729 20.6752 147.836 20.4485 147.036 19.9952C146.249 19.5419 145.629 18.9152 145.176 18.1152C144.723 17.3019 144.496 16.3885 144.496 15.3752C144.496 14.3619 144.723 13.4552 145.176 12.6552C145.629 11.8419 146.249 11.2085 147.036 10.7552C147.836 10.3019 148.729 10.0752 149.716 10.0752C150.703 10.0752 151.589 10.3019 152.376 10.7552C153.176 11.2085 153.803 11.8419 154.256 12.6552C154.709 13.4552 154.936 14.3619 154.936 15.3752C154.936 16.3885 154.709 17.3019 154.256 18.1152C153.803 18.9152 153.176 19.5419 152.376 19.9952C151.589 20.4485 150.703 20.6752 149.716 20.6752ZM149.716 19.7752C150.516 19.7752 151.229 19.5885 151.856 19.2152C152.496 18.8419 152.996 18.3219 153.356 17.6552C153.729 16.9885 153.916 16.2285 153.916 15.3752C153.916 14.5219 153.729 13.7619 153.356 13.0952C152.996 12.4285 152.496 11.9085 151.856 11.5352C151.229 11.1619 150.516 10.9752 149.716 10.9752C148.916 10.9752 148.196 11.1619 147.556 11.5352C146.929 11.9085 146.429 12.4285 146.056 13.0952C145.696 13.7619 145.516 14.5219 145.516 15.3752C145.516 16.2285 145.696 16.9885 146.056 17.6552C146.429 18.3219 146.929 18.8419 147.556 19.2152C148.196 19.5885 148.916 19.7752 149.716 19.7752ZM162.853 10.0752C163.853 10.0752 164.746 10.3019 165.533 10.7552C166.319 11.2085 166.933 11.8419 167.373 12.6552C167.813 13.4552 168.033 14.3685 168.033 15.3952C168.033 16.4085 167.813 17.3152 167.373 18.1152C166.946 18.9152 166.346 19.5419 165.573 19.9952C164.799 20.4485 163.919 20.6752 162.933 20.6752C161.973 20.6752 161.126 20.4619 160.393 20.0352C159.673 19.6085 159.106 19.0019 158.693 18.2152V24.4752H157.693V15.3952C157.693 14.3685 157.913 13.4552 158.353 12.6552C158.793 11.8419 159.399 11.2085 160.173 10.7552C160.959 10.3019 161.853 10.0752 162.853 10.0752ZM162.833 19.7952C163.633 19.7952 164.353 19.6085 164.993 19.2352C165.633 18.8485 166.133 18.3219 166.493 17.6552C166.853 16.9885 167.033 16.2352 167.033 15.3952C167.033 14.5419 166.853 13.7819 166.493 13.1152C166.133 12.4485 165.633 11.9285 164.993 11.5552C164.366 11.1685 163.646 10.9752 162.833 10.9752C162.033 10.9752 161.313 11.1619 160.673 11.5352C160.046 11.9085 159.553 12.4285 159.193 13.0952C158.846 13.7619 158.673 14.5219 158.673 15.3752C158.673 16.2285 158.846 16.9885 159.193 17.6552C159.553 18.3219 160.046 18.8485 160.673 19.2352C161.313 19.6085 162.033 19.7952 162.833 19.7952ZM180.238 10.1552V20.5952H179.258V18.3952C178.898 19.1152 178.378 19.6752 177.698 20.0752C177.031 20.4752 176.244 20.6752 175.338 20.6752C173.978 20.6752 172.904 20.3019 172.118 19.5552C171.344 18.7952 170.958 17.6952 170.958 16.2552V10.1552H171.958V16.1752C171.958 17.3485 172.258 18.2419 172.858 18.8552C173.458 19.4685 174.304 19.7752 175.398 19.7752C176.571 19.7752 177.504 19.4085 178.198 18.6752C178.891 17.9419 179.238 16.9552 179.238 15.7152V10.1552H180.238ZM192.24 10.1552V20.5952H191.32V16.9952H187.84C187.6 16.9952 187.427 16.9885 187.32 16.9752L184.74 20.5952H183.64L186.34 16.8552C185.487 16.6685 184.834 16.3019 184.38 15.7552C183.927 15.2085 183.7 14.5019 183.7 13.6352C183.7 12.4885 184.08 11.6219 184.84 11.0352C185.614 10.4485 186.667 10.1552 188 10.1552H192.24ZM184.7 13.6752C184.7 15.3819 185.78 16.2352 187.94 16.2352H191.32V11.0352H188.06C185.82 11.0352 184.7 11.9152 184.7 13.6752ZM62.2551 30.1552H63.2551V34.9152H70.3351V30.1552H71.3351V40.5952H70.3351V35.7952H63.2551V40.5952H62.2551V30.1552ZM79.8935 39.7752C80.5735 39.7752 81.2002 39.6552 81.7735 39.4152C82.3602 39.1619 82.8468 38.7952 83.2335 38.3152L83.8135 38.9752C83.3602 39.5352 82.7935 39.9619 82.1135 40.2552C81.4335 40.5352 80.6868 40.6752 79.8735 40.6752C78.8335 40.6752 77.9002 40.4485 77.0735 39.9952C76.2602 39.5419 75.6202 38.9152 75.1535 38.1152C74.7002 37.3152 74.4735 36.4019 74.4735 35.3752C74.4735 34.3485 74.6868 33.4352 75.1135 32.6352C75.5535 31.8352 76.1602 31.2085 76.9335 30.7552C77.7068 30.3019 78.5802 30.0752 79.5535 30.0752C80.4602 30.0752 81.2735 30.2885 81.9935 30.7152C82.7268 31.1285 83.3068 31.7085 83.7335 32.4552C84.1735 33.1885 84.4135 34.0152 84.4535 34.9352L75.6335 36.6552C75.8868 37.6152 76.3935 38.3752 77.1535 38.9352C77.9135 39.4952 78.8268 39.7752 79.8935 39.7752ZM79.5535 30.9552C78.7668 30.9552 78.0602 31.1419 77.4335 31.5152C76.8068 31.8752 76.3202 32.3885 75.9735 33.0552C75.6268 33.7085 75.4535 34.4552 75.4535 35.2952C75.4535 35.4419 75.4668 35.6485 75.4935 35.9152L83.4535 34.3552C83.3602 33.7285 83.1402 33.1552 82.7935 32.6352C82.4468 32.1152 81.9935 31.7085 81.4335 31.4152C80.8735 31.1085 80.2468 30.9552 79.5535 30.9552ZM96.9871 30.1552V39.4752C96.9871 41.2085 96.5671 42.4885 95.7271 43.3152C94.8871 44.1419 93.6204 44.5552 91.9271 44.5552C90.9671 44.5552 90.0604 44.4085 89.2071 44.1152C88.3538 43.8219 87.6671 43.4152 87.1471 42.8952L87.6871 42.1352C88.2071 42.6152 88.8338 42.9885 89.5671 43.2552C90.3004 43.5219 91.0804 43.6552 91.9071 43.6552C93.2938 43.6552 94.3204 43.3219 94.9871 42.6552C95.6538 42.0019 95.9871 40.9819 95.9871 39.5952V37.8352C95.5604 38.5952 94.9671 39.1819 94.2071 39.5952C93.4471 40.0085 92.5938 40.2152 91.6471 40.2152C90.6738 40.2152 89.7871 40.0019 88.9871 39.5752C88.2004 39.1352 87.5804 38.5285 87.1271 37.7552C86.6738 36.9819 86.4471 36.1085 86.4471 35.1352C86.4471 34.1619 86.6738 33.2885 87.1271 32.5152C87.5804 31.7419 88.2004 31.1419 88.9871 30.7152C89.7871 30.2885 90.6738 30.0752 91.6471 30.0752C92.6071 30.0752 93.4738 30.2885 94.2471 30.7152C95.0204 31.1419 95.6138 31.7419 96.0271 32.5152V30.1552H96.9871ZM91.7271 39.3152C92.5404 39.3152 93.2738 39.1419 93.9271 38.7952C94.5804 38.4352 95.0871 37.9419 95.4471 37.3152C95.8204 36.6752 96.0071 35.9485 96.0071 35.1352C96.0071 34.3219 95.8204 33.6019 95.4471 32.9752C95.0871 32.3485 94.5804 31.8619 93.9271 31.5152C93.2738 31.1552 92.5404 30.9752 91.7271 30.9752C90.9138 30.9752 90.1804 31.1552 89.5271 31.5152C88.8871 31.8619 88.3804 32.3485 88.0071 32.9752C87.6471 33.6019 87.4671 34.3219 87.4671 35.1352C87.4671 35.9485 87.6471 36.6752 88.0071 37.3152C88.3804 37.9419 88.8871 38.4352 89.5271 38.7952C90.1804 39.1419 90.9138 39.3152 91.7271 39.3152ZM107.478 35.2152C109.011 35.4819 109.778 36.3419 109.778 37.7952C109.778 38.7019 109.445 39.3952 108.778 39.8752C108.125 40.3552 107.138 40.5952 105.818 40.5952H101.298V30.1552H105.698C106.858 30.1552 107.765 30.3885 108.418 30.8552C109.085 31.3085 109.418 31.9619 109.418 32.8152C109.418 33.4285 109.245 33.9419 108.898 34.3552C108.565 34.7552 108.091 35.0419 107.478 35.2152ZM102.278 34.9152H105.638C106.531 34.9152 107.218 34.7485 107.698 34.4152C108.178 34.0685 108.418 33.5752 108.418 32.9352C108.418 32.2819 108.178 31.7952 107.698 31.4752C107.231 31.1419 106.545 30.9752 105.638 30.9752H102.278V34.9152ZM105.798 39.7752C107.785 39.7752 108.778 39.1019 108.778 37.7552C108.778 37.0485 108.551 36.5285 108.098 36.1952C107.645 35.8619 106.931 35.6952 105.958 35.6952H102.278V39.7752H105.798ZM122.249 30.1552V40.5952H121.269V38.3952C120.909 39.1152 120.389 39.6752 119.709 40.0752C119.043 40.4752 118.256 40.6752 117.349 40.6752C115.989 40.6752 114.916 40.3019 114.129 39.5552C113.356 38.7952 112.969 37.6952 112.969 36.2552V30.1552H113.969V36.1752C113.969 37.3485 114.269 38.2419 114.869 38.8552C115.469 39.4685 116.316 39.7752 117.409 39.7752C118.583 39.7752 119.516 39.4085 120.209 38.6752C120.903 37.9419 121.249 36.9552 121.249 35.7152V30.1552H122.249ZM135.412 35.7552H132.952V40.5952H131.952V35.7552H129.512L126.032 40.5952H124.812L128.712 35.2352L125.132 30.1552H126.232L129.512 34.8952H131.952V30.1552H132.952V34.8952H135.412L138.692 30.1552H139.792L136.212 35.2352L140.092 40.5952H138.892L135.412 35.7552ZM151.409 30.1552V40.5952H150.429V38.3952C150.069 39.1152 149.549 39.6752 148.869 40.0752C148.203 40.4752 147.416 40.6752 146.509 40.6752C145.149 40.6752 144.076 40.3019 143.289 39.5552C142.516 38.7952 142.129 37.6952 142.129 36.2552V30.1552H143.129V36.1752C143.129 37.3485 143.429 38.2419 144.029 38.8552C144.629 39.4685 145.476 39.7752 146.569 39.7752C147.743 39.7752 148.676 39.4085 149.369 38.6752C150.063 37.9419 150.409 36.9552 150.409 35.7152V30.1552H151.409ZM167.072 30.1552V40.5952H166.152V31.7552L161.612 39.2552H161.152L156.632 31.7752V40.5952H155.712V30.1552H156.692L161.412 38.0552L166.152 30.1552H167.072ZM175.556 40.6752C174.569 40.6752 173.676 40.4485 172.876 39.9952C172.089 39.5419 171.469 38.9152 171.016 38.1152C170.562 37.3019 170.336 36.3885 170.336 35.3752C170.336 34.3619 170.562 33.4552 171.016 32.6552C171.469 31.8419 172.089 31.2085 172.876 30.7552C173.676 30.3019 174.569 30.0752 175.556 30.0752C176.542 30.0752 177.429 30.3019 178.216 30.7552C179.016 31.2085 179.642 31.8419 180.096 32.6552C180.549 33.4552 180.776 34.3619 180.776 35.3752C180.776 36.3885 180.549 37.3019 180.096 38.1152C179.642 38.9152 179.016 39.5419 178.216 39.9952C177.429 40.4485 176.542 40.6752 175.556 40.6752ZM175.556 39.7752C176.356 39.7752 177.069 39.5885 177.696 39.2152C178.336 38.8419 178.836 38.3219 179.196 37.6552C179.569 36.9885 179.756 36.2285 179.756 35.3752C179.756 34.5219 179.569 33.7619 179.196 33.0952C178.836 32.4285 178.336 31.9085 177.696 31.5352C177.069 31.1619 176.356 30.9752 175.556 30.9752C174.756 30.9752 174.036 31.1619 173.396 31.5352C172.769 31.9085 172.269 32.4285 171.896 33.0952C171.536 33.7619 171.356 34.5219 171.356 35.3752C171.356 36.2285 171.536 36.9885 171.896 37.6552C172.269 38.3219 172.769 38.8419 173.396 39.2152C174.036 39.5885 174.756 39.7752 175.556 39.7752ZM188.252 40.6752C187.239 40.6752 186.332 40.4485 185.532 39.9952C184.732 39.5419 184.106 38.9152 183.652 38.1152C183.199 37.3019 182.972 36.3885 182.972 35.3752C182.972 34.3485 183.199 33.4352 183.652 32.6352C184.106 31.8219 184.732 31.1952 185.532 30.7552C186.332 30.3019 187.239 30.0752 188.252 30.0752C189.092 30.0752 189.852 30.2419 190.532 30.5752C191.226 30.8952 191.786 31.3685 192.212 31.9952L191.472 32.5352C191.099 32.0152 190.632 31.6285 190.072 31.3752C189.526 31.1085 188.919 30.9752 188.252 30.9752C187.439 30.9752 186.706 31.1619 186.052 31.5352C185.412 31.8952 184.906 32.4085 184.532 33.0752C184.172 33.7419 183.992 34.5085 183.992 35.3752C183.992 36.2419 184.172 37.0085 184.532 37.6752C184.906 38.3419 185.412 38.8619 186.052 39.2352C186.706 39.5952 187.439 39.7752 188.252 39.7752C188.919 39.7752 189.526 39.6485 190.072 39.3952C190.632 39.1285 191.099 38.7352 191.472 38.2152L192.212 38.7552C191.786 39.3819 191.226 39.8619 190.532 40.1952C189.852 40.5152 189.092 40.6752 188.252 40.6752ZM208.165 30.0752C209.459 30.0752 210.472 30.4552 211.205 31.2152C211.952 31.9752 212.325 33.0685 212.325 34.4952V40.5952H211.325V34.5752C211.325 33.4019 211.039 32.5085 210.465 31.8952C209.892 31.2819 209.092 30.9752 208.065 30.9752C206.892 30.9752 205.959 31.3419 205.265 32.0752C204.585 32.8085 204.245 33.7952 204.245 35.0352V40.5952H203.245V34.5752C203.245 33.4019 202.959 32.5085 202.385 31.8952C201.812 31.2819 201.012 30.9752 199.985 30.9752C198.812 30.9752 197.879 31.3419 197.185 32.0752C196.505 32.8085 196.165 33.7952 196.165 35.0352V40.5952H195.165V30.1552H196.125V32.3952C196.472 31.6619 196.985 31.0952 197.665 30.6952C198.359 30.2819 199.179 30.0752 200.125 30.0752C201.072 30.0752 201.872 30.2885 202.525 30.7152C203.192 31.1419 203.665 31.7685 203.945 32.5952C204.292 31.8219 204.832 31.2085 205.565 30.7552C206.312 30.3019 207.179 30.0752 208.165 30.0752ZM225.218 30.1552V40.5952H224.238V38.3952C223.878 39.1152 223.358 39.6752 222.678 40.0752C222.011 40.4752 221.225 40.6752 220.318 40.6752C218.958 40.6752 217.885 40.3019 217.098 39.5552C216.325 38.7952 215.938 37.6952 215.938 36.2552V30.1552H216.938V36.1752C216.938 37.3485 217.238 38.2419 217.838 38.8552C218.438 39.4685 219.285 39.7752 220.378 39.7752C221.551 39.7752 222.485 39.4085 223.178 38.6752C223.871 37.9419 224.218 36.9552 224.218 35.7152V30.1552H225.218Z" fill="white"/>
            </svg>
            </Link>
          </div>
          <div className="main_header">
            <Link className="main_header_link" to={HOME_ROUTE}>Главная</Link>
          </div>
          <div className="category_header">
            <Link className="category_header_link" to={CATEGORY_ROUTE}>Каталог</Link>
          </div>
          <div className="about_header">
            <Link className="about_header_link" to={ABOUTE_ROUTE}>Оставить заявку</Link>
          </div>
        </div>
  );
};

export default Header;


