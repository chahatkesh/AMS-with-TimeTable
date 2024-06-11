import React from 'react';
import { useEffect, useRef } from 'react';

import ReactHtmlParser from 'react-html-parser';
// import getEnvironment from "../../../../getenvironment";
import ProxifiedImage from '../../components/ProxifiedImage';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// const apiUrl = getEnvironment();

const CertificateContent = ({
  eventId,
  contentBody,
  certiType,
  logos,
  participantDetail,
  signature,
  header,
  footer,
}) => {
  var num_logos = logos.length;
  var num_left = 0;
  if (num_logos % 2 === 0) {
    num_left = num_logos / 2 - 1;
  } else {
    num_left = Math.floor(num_logos / 2);
  }
  const svgRef = useRef();

  useEffect(() => {
    const url = window.location.href; // Replace with your URL
    const svg = svgRef.current;

    QRCode.toDataURL(url, (err, dataUrl) => {
      if (err) throw err;

      const image = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'image'
      );
      image.setAttribute('x', '100');
      image.setAttribute('y', '500');
      image.setAttribute('width', '100');
      image.setAttribute('height', '100');
      image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', dataUrl);

      svg.appendChild(image);
    });
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1124 800"
      id="svg"
      className="svg-img"
      ref={svgRef}
    >
      <>
        <g clipPath="url(#clip0_76_3)">
          <rect width="1122.52" height="798.24" fill="white" />
          <rect
            x="69.2207"
            y="-72.6617"
            width="118.726"
            height="119.478"
            transform="rotate(45.2111 69.2207 -72.6617)"
            fill="#4EABE9"
          />
          <path
            d="M152.854 11.6027L229.363 88.6774L168.822 148.774C155.496 162.003 133.968 161.924 120.739 148.597L68.1832 95.6523L152.854 11.6027Z"
            fill="#A8DDF6"
          />
          <path
            d="M229.564 -64.5L283.51 -10.155C295.961 2.38777 295.886 22.6489 283.343 35.0995L229.344 88.7023L152.854 11.6467L229.564 -64.5Z"
            fill="#81CCF1"
          />
          <rect
            x="139.278"
            y="-94"
            width="84.5135"
            height="64.7605"
            transform="rotate(45.2111 139.278 -94)"
            fill="#61BBED"
          />
          <path
            d="M-15.4595 11.3969L68.1825 95.6575L15.5425 147.911C2.60777 160.751 -18.2865 160.674 -31.1263 147.739L-91.5198 86.8989L-15.4595 11.3969Z"
            fill="#3981AF"
          />
          <rect
            x="1053.83"
            y="870.389"
            width="118.726"
            height="119.478"
            transform="rotate(-134.789 1053.83 870.389)"
            fill="#4EABE9"
          />
          <path
            d="M970.199 786.124L893.691 709.05L954.232 648.953C967.558 635.724 989.086 635.803 1002.31 649.13L1054.87 702.075L970.199 786.124Z"
            fill="#A8DDF6"
          />
          <path
            d="M893.49 862.227L839.544 807.882C827.093 795.339 827.168 775.078 839.711 762.627L893.71 709.025L970.2 786.08L893.49 862.227Z"
            fill="#81CCF1"
          />
          <rect
            x="983.776"
            y="891.727"
            width="84.5135"
            height="64.7605"
            transform="rotate(-134.789 983.776 891.727)"
            fill="#61BBED"
          />
          <path
            d="M1138.51 786.33L1054.87 702.07L1107.51 649.816C1120.45 636.976 1141.34 637.053 1154.18 649.988L1214.57 710.828L1138.51 786.33Z"
            fill="#3981AF"
          />
          <rect
            x="998.877"
            y="-135"
            width="371.036"
            height="177.17"
            transform="rotate(45.2747 998.877 -135)"
            fill="#EFEFEF"
          />
          <rect
            x="-1.12305"
            y="550"
            width="371.036"
            height="177.17"
            transform="rotate(45.2747 -1.12305 550)"
            fill="#EFEFEF"
          />
          <path
            d="M955.961 135.218L946.449 170.24L966.338 165.051L981.038 178.887L989.686 144.73L955.961 135.218Z"
            fill="#142739"
          />
          <path
            d="M993.559 144.541L1003.12 179.548L1017.63 164.989L1037.32 169.456L1027.45 135.633L993.559 144.541Z"
            fill="#142739"
          />
          <path
            d="M969.446 68.1996C972.648 61.8618 980.391 59.3339 986.716 62.5619V62.5619C990.452 64.469 994.885 64.4272 998.585 62.4501L999.342 62.0453C1005.36 58.8321 1012.83 61.2597 1015.81 67.3918V67.3918C1017.62 71.1045 1021.2 73.6314 1025.3 74.0841L1025.85 74.1446C1032.63 74.8926 1037.3 81.3107 1035.92 87.9902V87.9902C1035.09 92.0042 1036.45 96.1574 1039.48 98.9092V98.9092C1044.54 103.488 1044.56 111.423 1039.53 116.027L1039.12 116.4C1036.07 119.186 1034.67 123.34 1035.4 127.402V127.402C1036.62 134.111 1032.01 140.484 1025.26 141.438L1024.41 141.558C1020.26 142.144 1016.65 144.726 1014.76 148.471V148.471C1011.56 154.808 1003.82 157.336 997.491 154.108V154.108C993.754 152.201 989.321 152.243 985.621 154.22L984.864 154.625C978.851 157.838 971.372 155.41 968.393 149.278V149.278C966.589 145.566 963.005 143.039 958.902 142.586L958.353 142.526C951.574 141.778 946.908 135.359 948.287 128.68V128.68C949.116 124.666 947.761 120.513 944.723 117.761V117.761C939.668 113.182 939.649 105.247 944.681 100.643L945.088 100.27C948.134 97.4841 949.536 93.3297 948.802 89.2677V89.2677C947.59 82.5587 952.196 76.1861 958.946 75.2326L959.797 75.1125C963.95 74.5258 967.554 71.9439 969.446 68.1996V68.1996Z"
            fill="#EFEFEF"
          />
          <path
            d="M971.218 71.3385C974.169 65.4963 981.307 63.1661 987.137 66.1417V66.1417C990.581 67.8996 994.668 67.8611 998.078 66.0386L998.776 65.6655C1004.32 62.7036 1011.21 64.9413 1013.96 70.5938V70.5938C1015.62 74.0162 1018.93 76.3455 1022.71 76.7627L1023.21 76.8186C1029.46 77.508 1033.76 83.4242 1032.49 89.5813V89.5813C1031.73 93.2814 1032.98 97.1097 1035.78 99.6463V99.6463C1040.44 103.867 1040.46 111.182 1035.82 115.425L1035.44 115.769C1032.63 118.337 1031.34 122.167 1032.02 125.911V125.911C1033.14 132.096 1028.89 137.97 1022.67 138.849L1021.88 138.959C1018.05 139.5 1014.73 141.88 1012.99 145.332V145.332C1010.04 151.174 1002.9 153.504 997.069 150.528V150.528C993.625 148.771 989.539 148.809 986.128 150.632L985.43 151.005C979.887 153.967 972.993 151.729 970.247 146.076V146.076C968.584 142.654 965.281 140.325 961.499 139.907L960.993 139.852C954.744 139.162 950.443 133.246 951.714 127.089V127.089C952.478 123.389 951.229 119.56 948.428 117.024V117.024C943.769 112.803 943.751 105.488 948.39 101.245L948.765 100.901C951.573 98.3327 952.865 94.5032 952.189 90.7589V90.7589C951.071 84.5746 955.317 78.7004 961.539 77.8215L962.323 77.7108C966.152 77.17 969.474 74.79 971.218 71.3385V71.3385Z"
            fill="#E1BC48"
          />
        </g>
        <rect
          x="1"
          y="1"
          width="1120.52"
          height="796.24"
          stroke="#3981AF"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <clipPath id="clip0_76_3">
            <rect width="1122.52" height="798.24" fill="white" />
          </clipPath>
        </defs>
      </>
      <>
        <foreignObject width={'65%'} height={'400'} y={'80'} x={'210'}>
          <div className="tw-flex tw-items-center tw-justify-center tw-w-full">
            {logos.map((item, key) => (
              <div
                key={key}
                className="tw-flex tw-items-center tw-justify-center "
              >
                <div className="tw-w-20 tw-shrink-0 tw-mx-6">
                  <img src={item} alt="" />
                </div>
                <div className="tw-text-center">
                  {key === num_left && (
                    <>
                      <p className="tw-font-nunito-bold tw-text-xl tw-font-medium">
                        डॉ. बी आर अम्बेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर
                      </p>
                      <p className="tw-font-nunito-bold tw-text-[12px]">
                        जी.टी. रोड, अमृतसर बाईपास, जालंधर (पंजाब), भारत- 144008
                      </p>
                      <p className="tw-font-nunito-bold tw-text-xl tw-font-semibold">
                        Dr. B R Ambedkar National Institute of Technology
                        Jalandhar
                      </p>
                      <p className="tw-font-nunito-bold tw-text-[12px] ">
                        G.T. Road, Amritsar Byepass, Jalandhar (Punjab), India-
                        144008
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </foreignObject>

        <foreignObject x="10%" y="232" width="85%" height="160">
          <div className="tw-mt-8 tw-text-center tw-flex-col tw-flex tw-gap-1">
            {header.map((item, ind) => (
              <h1
                className="tw-text-xl tw-font-semibold tw-text-gray-700 tw-uppercase"
                key={ind}
              >
                {item}
              </h1>
            ))}
          </div>
        </foreignObject>

        <text
          x="575"
          y="340"
          fill="#424847"
          fontFamily="Poppins"
          fontSize="48"
          textAnchor="middle"
          fontWeight="550"
        >
          CERTIFICATE OF APPRECIATION
        </text>
        <text
          x="575"
          y="365"
          fill="#424847"
          fontFamily="Poppins"
          fontSize="18"
          textAnchor="middle"
          fontWeight="400"
        >
          This is to Certify that
        </text>

        <foreignObject x="12.5%" y="390" width="75%" height="160">
          <p className="font-serif text-xl opacity-80">
            <div>{ReactHtmlParser(contentBody)}</div>
          </p>
        </foreignObject>

        <foreignObject x={'20%'} y={540} width={'70%'} height={400}>
          <div className="tw-flex-wrap tw-flex tw-items-center tw-justify-between tw-gap-6 tw-px-6 ">
            {signature.map((item, key) => (
              <div
                key={key}
                className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2"
              >
                <div className="tw-w-[100px]">
                  <ProxifiedImage src={item.url} alt="" />
                </div>
                <div className="tw-bg-gray-500 tw-rounded-xl tw-p-[1px] tw-w-[100px] tw-h-[1px]" />
                <p className="tw-text-black tw-text-[15px] tw-font-semibold">
                  {item.name}
                </p>
                <p className="tw-text-[13px] -tw-mt-3 tw-text-gray-900">
                  {item.position}
                </p>
              </div>
            ))}
          </div>
        </foreignObject>

        <foreignObject x={'18%'} y={'90%'} width={'60%'} height={'100'}>
          <div className="tw-text-sm tw-text-center tw-text-gray-700 ">
            {window.location.href}
          </div>
        </foreignObject>
      </>
      );
    </svg>
  );
};

export default CertificateContent;
