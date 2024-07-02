import React from 'react';
import { useEffect, useRef } from 'react';

import ReactHtmlParser from 'react-html-parser';
// import getEnvironment from "../../../../getenvironment";
import ProxifiedImage from '../../components/ProxifiedImage';
import QRCode from 'qrcode';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button, Text } from '@chakra-ui/react';

// const apiUrl = getEnvironment();

const CertificateContent = ({
  eventId,
  contentBody,
  certiType,
  title,
  certificateOf,
  verifiableLink,
  logos,
  participantDetail,
  signature,
  header,
  footer,
}) => {
  verifiableLink = (verifiableLink == "true")
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
      image.classList.add("qrcode");
      image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', dataUrl);

      svg.appendChild(image);
      if (!verifiableLink) { document.querySelectorAll(".qrcode").forEach((elem) => { elem.remove() }) }
    });
  }, [verifiableLink]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="841.92"
      height="595.499987"
      viewBox="0 0 1122.52 793.7"
      id="svg"
      className="svg-img tw-object-contain"
      ref={svgRef}
    >
      <>
        <path fill="#424847" d="M-4.729-6.627h1131.977v806.954H-4.729Z" />
        <path
          fill="#FFFFFF"
          d="M1098.39 58.344v677.013a3.296 3.296 0 0 1-3.296 3.295c-15.973 0-28.955 12.995-28.955 28.955a3.296 3.296 0 0 1-3.295 3.295H59.681a3.296 3.296 0 0 1-3.295-3.295c0-15.96-12.995-28.955-28.969-28.955a3.296 3.296 0 0 1-3.295-3.295V58.344a3.296 3.296 0 0 1 3.295-3.295c15.974 0 28.969-12.995 28.969-28.955a3.296 3.296 0 0 1 3.295-3.295h1003.163a3.296 3.296 0 0 1 3.295 3.295c0 15.96 12.982 28.955 28.955 28.955a3.296 3.296 0 0 1 3.295 3.295z"
        />
        <path
          fill="#46B4A9"
          d="M1095.094 55.049c-15.973 0-28.955-12.995-28.955-28.955a3.296 3.296 0 0 0-3.295-3.295H59.681a3.296 3.296 0 0 0-3.295 3.295c0 15.96-12.995 28.955-28.969 28.955a3.296 3.296 0 0 0-3.295 3.295v677.013a3.296 3.296 0 0 0 3.295 3.295c15.974 0 28.969 12.995 28.969 28.955a3.296 3.296 0 0 0 3.295 3.295h1003.163a3.296 3.296 0 0 0 3.295-3.295c0-15.96 12.982-28.955 28.955-28.955a3.296 3.296 0 0 0 3.295-3.295V58.344a3.296 3.296 0 0 0-3.295-3.295zm-3.294 677.158c-16.975 1.568-30.537 15.13-32.105 32.105H62.817c-1.555-16.975-15.117-30.537-32.105-32.105V61.494c16.988-1.569 30.55-15.13 32.105-32.105h996.878c1.568 16.975 15.13 30.536 32.105 32.105z"
        />
        <path
          fill="#46B4A9"
          d="M1050.32 753.985H72.2c-.567 0-1.07-.363-1.25-.9-4.553-13.608-15.395-24.45-29.002-29.002a1.32 1.32 0 0 1-.9-1.25V70.869c0-.566.362-1.07.9-1.25 13.607-4.553 24.45-15.394 29.002-29.002.18-.537.683-.9 1.25-.9h978.12c.567 0 1.07.363 1.25.9 4.552 13.608 15.393 24.45 29 29.003.537.18.9.683.9 1.25v651.965c0 .567-.362 1.07-.9 1.25-13.607 4.551-24.448 15.393-29 29-.18.537-.683.9-1.25.9zm-977.18-2.636h976.243c4.876-13.667 15.786-24.577 29.453-29.454V71.807c-13.667-4.878-24.575-15.788-29.453-29.455H73.139c-4.877 13.667-15.787 24.577-29.454 29.455v650.088c13.665 4.877 24.577 15.785 29.454 29.454z"
        />
        <g fill="#3D3D3D">
          <path d="M1007.737 700.413c-2.2-2.853-4.703-5.513-7.615-7.67a29.468 29.468 0 0 0-5.397-3.171c-7.131-4.17-15.426-6.43-23.479-3.17-10.545 4.268-13.753 16.628-9.733 26.52 4.017 9.887 14.686 17.955 25.815 15.34 9.107-2.14 15.273-12.17 10.069-20.625-.244-.394-.987-.133-.791.33 4.3 10.076-3.307 19.576-14.03 19.463-10.136-.107-18.79-9.148-20.976-18.462-2.644-11.269 4.684-22.084 16.585-22.89 3.677-.25 7.175.412 10.503 1.62-1.941-.329-3.924-.405-5.902-.161-10.462 1.289-18.92 12.495-12.257 22.139 2.055 2.973 6.299 5.787 10.11 4.437 2.92-1.035 5.016-5.394 1.644-7.342-2.186-1.261-5.538.781-4.505 3.396.333.845.962 1.297 1.663 1.435-3.173 2.31-6.508-.424-8.201-3.114-1.136-1.804-1.789-4.046-1.836-6.168-.096-4.267 2.276-7.997 5.642-10.475 7.992-5.88 18.556-3.083 25.698 2.776 5.214 4.276 7.858 10.005 11.984 15.078 2.262 2.78 5.567 4.645 8.804 2.229.195-.146.03-.453-.196-.334-6.475 3.418-10.736-7.468-13.599-11.181z" />
          <path d="M959.383 718.19c.413 3.108 2.507 6.14 4.83 8.176 2.148 1.88 5.7 4.27 8.696 3.338.376-.117.565-.624.243-.91-1.935-1.724-4.787-2.283-6.95-3.764-2.783-1.904-4.608-4.28-6.63-6.89-.052-.07-.203-.063-.189.05z" />
          <path d="M969.152 744.738c-2.036-2.073-4.756-3.297-6.807-5.405-2.304-2.368-4.248-5.389-5.234-8.561-.029-.095-.193-.083-.183.025.35 3.553 1.325 6.67 3.578 9.579 1.928 2.49 4.889 5.267 8.243 5.32.502.01.74-.614.403-.958z" />
          <path d="M1020.884 705.465c1.656 4.084 4.226 7.97 4.273 12.52.025 2.552-.63 5.437-2.424 7.37a7.09 7.09 0 0 1-4.38 2.2 3.338 3.338 0 0 1-1.933-.013c-1.211-.024-2.107-.59-2.695-1.685 2.915.67 4.942-3.347 2.054-5.152-4.525-2.827-6.166 4.504-3.14 7.213 4.15 3.716 10.663.889 12.906-3.49 3.244-6.33-.171-14.124-4.279-19.186-.14-.17-.467.017-.382.223z" />
          <path d="M1022.39 706.613c2.967 3.551 6.262 6.866 7.947 11.246 2.472 6.42.365 9.766-3.464 14.645-.397.504-.05 1.266.65 1.105 4.812-1.1 6.389-6.794 5.901-11.148-.196-1.754-.706-3.411-1.434-4.977 1.43 1.267 2.946 2.442 4.108 4.054 1.568 2.172 2.379 4.58 3.588 6.92-.091.371.098.8.587.756 1.627-.145 3.254-.067 4.835.373 1.437.4 2.63 1.292 4.038 1.716.014.004.027-.003.043-.001.143.108.277.224.42.33.371.276.787-.307.483-.618-3.17-3.235-6.793-6.093-10.214-9.068-3.063-2.665-6.055-5.502-9.433-7.772-.162-.108-.31.11-.21.249-2.093-3.053-4.92-5.703-7.679-7.974a.117.117 0 0 0-.166.164zm17.977 20.88c.166.147.34.282.52.407-.208.008-.41.02-.606.038-.026-.187-.047-.373-.085-.56l.17.115zm2.428.458c.18-.05.33-.188.403-.357.144.154.29.306.439.458a14.358 14.358 0 0 0-.842-.1zm-11.71-12.641c-.119-.052-.239-.09-.359-.135-.153-.24-.304-.483-.466-.72.263.295.553.567.825.855z" />
          <path d="M967.373 732.33c-.086-.065-.215.063-.15.149 3.699 4.905 13.453 10.007 19.2 5.57.334-.258.146-.877-.254-.952-3.082-.575-6.272.122-9.422-.416-3.546-.606-6.535-2.218-9.374-4.351z" />
          <path d="M951.47 733.86c2.45-3.729 3.124-8.297 1.773-12.53-.118-.373-.735-.325-.716.096.197 4.207-.477 8.27-3.17 11.672-1.17 1.481-2.541 2.646-4.139 3.666-1.115.713-1.61.848-2.217 1.998a.416.416 0 0 0 .248.604c3.207.919 6.669-3.143 8.222-5.506z" />
          <path d="M955.199 714.935c.347 6.192 2.135 12.294 5.425 17.47 5.866 9.227 17.938 15.756 28.903 11.952.504-.174.296-.853-.216-.775-20.597 3.088-33.274-14.484-32.793-32.433a46.39 46.39 0 0 0 .658-2.397c.067-.276-.248-.488-.467-.398.414-3.985 1.476-7.937 3.274-11.633 5.15-10.577 15.507-15.98 27.288-13.877 11.806 2.106 20.16 10.544 28.904 17.893.24.202.561-.11.348-.344-8.598-9.438-20.096-18.757-33.512-19.32-11.367-.477-20.487 6.383-24.836 16.503-1.893 4.404-2.896 9.254-3.017 14.138-3.217 7.485-6.745 15.466-15.094 18.378-5.913 2.061-13.708.249-15.817-6.312-.916-2.85-.527-6.275 1.712-8.493 1.59-1.461 3.443-2.176 5.558-2.147 3.09-.027 4.834 1.415 5.27 4.288-3.828-4.065-8.033 5.974-1.601 5.325 3.947-.398 4.195-5.137 2.314-7.69-2.238-3.038-6.7-3.486-9.99-2.061-10.353 4.485-3.388 17.974 5.408 19.268 11.16 1.642 18.513-7.827 22.281-17.335z" />
          <path d="M874.596 730.084c1.642.44 42.847-6.08 42.847-6.08l2.44 6.532z" />
          <path d="M1018.85 689.6c-2.886-2.175-5.576-4.65-7.756-7.53a29.007 29.007 0 0 1-3.209-5.336c-4.217-7.051-6.501-15.253-3.205-23.216 4.316-10.426 16.817-13.598 26.82-9.624 9.999 3.973 18.16 14.522 15.515 25.526-2.164 9.005-12.31 15.103-20.86 9.956-.399-.24-.134-.975.334-.781 10.192 4.25 19.8-3.27 19.685-13.873-.108-10.022-9.252-18.578-18.673-20.74-11.396-2.614-22.334 4.632-23.15 16.4-.252 3.636.417 7.094 1.639 10.385-.334-1.92-.41-3.878-.164-5.834 1.304-10.345 12.637-18.708 22.39-12.119 3.008 2.033 5.854 6.229 4.488 9.997-1.046 2.886-5.456 4.96-7.425 1.624-1.276-2.16.79-5.476 3.435-4.455.854.33 1.311.951 1.45 1.645 2.336-3.138-.429-6.436-3.15-8.11-1.824-1.124-4.091-1.767-6.238-1.814-4.315-.097-8.088 2.25-10.594 5.578-5.948 7.903-3.118 18.349 2.807 25.41 4.326 5.156 10.12 7.77 15.25 11.851 2.811 2.237 4.697 5.504 2.255 8.704-.147.194-.458.03-.336-.195 3.457-6.407-7.553-10.62-11.308-13.45z" />
          <path d="M1036.828 641.788c3.145.409 6.21 2.48 8.27 4.777 1.903 2.123 4.318 5.636 3.376 8.598-.119.372-.632.557-.922.24-1.745-1.913-2.309-4.733-3.807-6.873-1.924-2.75-4.328-4.556-6.97-6.554-.065-.052-.06-.203.053-.188z" />
          <path d="M1063.68 651.446c-2.097-2.012-3.334-4.703-5.467-6.73-2.396-2.278-5.45-4.2-8.657-5.173-.097-.03-.085-.191.025-.18 3.592.346 6.745 1.31 9.688 3.538 2.517 1.905 5.327 4.833 5.381 8.15.01.493-.623.729-.97.395z" />
          <path d="M1023.96 702.597c4.13 1.637 8.06 4.18 12.663 4.224 2.58.025 5.497-.622 7.454-2.396a6.957 6.957 0 0 0 2.225-4.33 3.235 3.235 0 0 0-.014-1.912c-.023-1.198-.595-2.084-1.704-2.665.678 2.883-3.385 4.887-5.21 2.031-2.858-4.476 4.555-6.097 7.295-3.105 3.758 4.103.9 10.544-3.53 12.762-6.4 3.206-14.284-.169-19.403-4.232-.174-.137.016-.459.224-.377z" />
          <path d="M1024.952 704.252c2.296 2.728 4.977 5.524 8.063 7.593-.138-.099-.36.049-.251.208 2.297 3.34 5.166 6.299 7.86 9.326 3.01 3.383 5.899 6.964 9.171 10.1.315.301.905-.111.627-.478-.109-.14-.226-.275-.335-.415 0-.015.01-.028.001-.042-.43-1.39-1.33-2.571-1.734-3.994-.446-1.561-.525-3.17-.379-4.78.044-.483-.388-.67-.764-.58-2.366-1.196-4.8-1.998-6.997-3.549-1.63-1.15-2.82-2.649-4.1-4.063 1.584.718 3.26 1.223 5.033 1.418 4.405.482 10.163-1.077 11.275-5.833.162-.692-.609-1.036-1.119-.643-4.934 3.786-8.316 5.868-14.81 3.425-4.43-1.667-7.782-4.925-11.375-7.859a.117.117 0 0 0-.166.166zm21.17 17.44c.189.037.377.059.567.085-.017.192-.029.394-.038.6a5.459 5.459 0 0 0-.413-.514l-.116-.17zm.68 3.403a17.84 17.84 0 0 0-.462-.433c.17-.073.31-.22.361-.398.025.275.06.552.101.831zm-13.751-13.226c.24.16.485.31.729.46.045.12.083.238.136.355-.29-.268-.567-.554-.865-.815z" />
          <path d="M1051.13 649.688c-.067-.086.064-.213.15-.149 4.96 3.659 10.12 13.302 5.634 18.985-.261.33-.889.144-.964-.252-.58-3.048.124-6.202-.42-9.315-.613-3.507-2.243-6.462-4.4-9.269z" />
          <path d="M1052.678 633.964c-3.77 2.422-8.39 3.088-12.67 1.753-.378-.118-.33-.728.097-.708 4.254.194 8.363-.47 11.804-3.134 1.498-1.159 2.676-2.513 3.708-4.094.72-1.103.856-1.592 2.022-2.191.238-.123.532-.019.61.245.926 3.17-3.183 6.593-5.571 8.129z" />
          <path d="M1033.537 637.65c6.262.343 12.434 2.111 17.667 5.364 9.331 5.8 15.936 17.737 12.089 28.58-.177.496-.862.292-.785-.214 3.124-20.365-14.649-32.901-32.8-32.425a48.64 48.64 0 0 1-2.424.65c-.278.067-.493-.244-.404-.462-4.03.41-8.027 1.46-11.763 3.238-10.7 5.092-16.162 15.333-14.037 26.981 2.13 11.675 10.664 19.934 18.097 28.579.204.237-.11.554-.348.344-9.544-8.502-18.969-19.871-19.54-33.136-.482-11.24 6.456-20.258 16.69-24.559 4.454-1.871 9.36-2.862 14.3-2.983 7.57-3.182 15.64-6.67 18.585-14.925 2.085-5.846.251-13.555-6.383-15.64-2.881-.905-6.346-.52-8.59 1.694-1.478 1.572-2.201 3.404-2.171 5.496-.03 3.055 1.43 4.78 4.336 5.21-4.11-3.784 6.043-7.941 5.386-1.583-.402 3.902-5.195 4.147-7.777 2.287-3.072-2.212-3.525-6.625-2.083-9.877 4.536-10.238 18.178-3.35 19.487 5.346 1.662 11.04-7.916 18.31-17.532 22.035z" />
          <path d="M1048.857 557.953c.446 1.624-6.15 42.364-6.15 42.364l6.607 2.413z" />
          <path d="M1047.137 721.834c-.277-.528-.775-.642-1.338-.537-.376.071-.494.6-.225.846l.625.572.107-.82c-.496.22-1.152.377-1.206.989-.01.113.068.208.155.267.486.337 1.132-.133 1.584-.353.292-.142.355-.61.107-.82l-.647-.55-.225.847c.162-.037.383.02.532.088.348.158.72-.17.531-.53z" />
          <path d="m1046.366 725.148.44.428c.35.346.923-.094.68-.519-.318-.561-.794-1.062-1.192-1.57-.323-.412-1.03.035-.873.501.139.408.292.88.753 1.005a.3.3 0 0 0 .325-.13c.244-.36.08-.784-.07-1.149l-.873.502c.403.454.784.97 1.25 1.36l.525-.673-.492-.361c-.36-.265-.781.306-.473.606z" />
          <path d="M1044.327 727.797a20.708 20.708 0 0 0-2.682-.465v.953l1.061.025v-.928c-.744.008-1.488.051-2.231.065l.395.391a.993.993 0 0 0-.142-.563c-.104-.2-.39-.26-.579-.15-.382.223-.101.494-.054.817.025.17.224.284.381.288.745.018 1.487.068 2.232.083.606.01.6-.9 0-.928l-1.061-.05c-.622-.03-.615.912 0 .952.881.06 1.733.061 2.613.006.274-.019.359-.425.067-.496z" />
          <path d="M1032.26 710.943c.293.853.886 1.508 1.433 2.215.497.643 1.003 1.42 1.758 1.777.214.102.453-.064.398-.303-.186-.802-.838-1.465-1.361-2.08-.58-.685-1.097-1.404-1.878-1.874-.172-.102-.417.069-.35.265z" />
          <path d="M1024.081 703.577c2.152 3.18 5.177 5.907 7.851 8.665 2.678 2.762 5.28 5.89 8.464 8.088.23.16.531-.153.382-.378-2.124-3.22-5.211-5.886-7.923-8.622-2.7-2.723-5.366-5.794-8.508-8.016-.158-.114-.371.108-.266.263z" />
          <path d="M1021.183 705.463c2.503 3.706 5.945 6.817 9.038 10.038 3.436 3.577 6.77 7.502 10.713 10.538.225.174.64-.053.439-.335-2.759-3.861-6.358-7.161-9.66-10.567-3.28-3.384-6.44-7.147-10.265-9.937-.157-.115-.37.11-.265.263z" />
          <path d="M1023.984 702.983c-.028.01-.054.022-.082.033-.073.029-.073.117 0 .145l.082.032c.176.07.178-.28 0-.21z" />
          <path d="M1023.782 703.185c1.089 2.172 3.313 3.95 4.996 5.692 1.719 1.778 3.366 3.915 5.463 5.258.168.107.361-.101.266-.263-1.257-2.14-3.345-3.87-5.062-5.654-1.671-1.738-3.366-4.021-5.5-5.193-.109-.06-.216.057-.163.16z" />
          <path d="M117.632 700.413c2.2-2.853 4.703-5.513 7.615-7.67a29.468 29.468 0 0 1 5.397-3.171c7.131-4.17 15.426-6.43 23.479-3.17 10.545 4.268 13.753 16.628 9.733 26.52-4.019 9.887-14.686 17.955-25.816 15.34-9.107-2.14-15.274-12.17-10.07-20.625.243-.394.988-.133.79.33-4.299 10.076 3.307 19.576 14.031 19.463 10.136-.107 18.789-9.148 20.975-18.462 2.644-11.269-4.684-22.084-16.586-22.89-3.677-.25-7.175.412-10.503 1.62 1.942-.329 3.924-.405 5.902-.161 10.462 1.289 18.92 12.495 12.256 22.139-2.055 2.973-6.299 5.787-10.11 4.437-2.918-1.035-5.015-5.394-1.643-7.342 2.186-1.261 5.538.781 4.505 3.396-.333.845-.962 1.297-1.663 1.435 3.174 2.31 6.508-.424 8.201-3.114 1.137-1.804 1.788-4.046 1.836-6.168.098-4.267-2.276-7.997-5.642-10.475-7.992-5.88-18.556-3.083-25.698 2.776-5.214 4.276-7.858 10.005-11.984 15.078-2.262 2.78-5.567 4.645-8.804 2.229-.197-.146-.03-.453.196-.334 6.48 3.418 10.74-7.468 13.603-11.181z" />
          <path d="M165.986 718.19c-.413 3.108-2.507 6.14-4.83 8.176-2.148 1.88-5.7 4.27-8.696 3.338-.376-.117-.564-.624-.243-.91 1.935-1.724 4.787-2.283 6.95-3.764 2.783-1.904 4.608-4.28 6.63-6.89.052-.07.203-.063.189.05z" />
          <path d="M156.217 744.738c2.036-2.073 4.757-3.297 6.806-5.405 2.304-2.368 4.248-5.389 5.233-8.561.03-.095.194-.083.184.025-.35 3.553-1.325 6.67-3.579 9.579-1.928 2.49-4.888 5.267-8.242 5.32-.5.01-.74-.614-.402-.958z" />
          <path d="M104.485 705.465c-1.655 4.084-4.226 7.97-4.273 12.52-.025 2.552.63 5.437 2.424 7.37a7.09 7.09 0 0 0 4.38 2.2c.645.186 1.29.182 1.932-.013 1.211-.024 2.107-.59 2.695-1.685-2.915.67-4.942-3.347-2.055-5.152 4.526-2.827 6.167 4.504 3.141 7.213-4.15 3.716-10.663.889-12.907-3.49-3.243-6.33.172-14.124 4.28-19.186.14-.17.468.017.383.223z" />
          <path d="M102.811 706.447c-2.758 2.27-5.585 4.92-7.678 7.973.1-.137-.049-.357-.21-.249-3.379 2.272-6.37 5.107-9.433 7.772-3.422 2.977-7.043 5.833-10.214 9.069-.305.31.113.893.482.618.142-.107.278-.223.42-.331.015-.001.028.007.044.001 1.408-.424 2.6-1.314 4.038-1.716 1.58-.44 3.208-.518 4.834-.373.49.044.68-.383.59-.756 1.208-2.34 2.019-4.746 3.587-6.92 1.164-1.611 2.678-2.788 4.11-4.053-.727 1.567-1.237 3.222-1.435 4.976-.487 4.356 1.089 10.05 5.9 11.149.7.16 1.049-.603.652-1.106-3.83-4.88-5.935-8.223-3.465-14.645 1.686-4.38 4.98-7.694 7.947-11.246.098-.115-.05-.261-.169-.163zm-17.638 20.931c-.038.187-.058.373-.084.56a14.102 14.102 0 0 0-.606-.038c.18-.127.354-.26.52-.407zm-3.44.674c.148-.152.295-.304.438-.458a.64.64 0 0 0 .403.357c-.279.025-.56.058-.842.1zm13.376-13.598c-.162.238-.313.479-.465.721-.12.044-.24.082-.358.135.27-.288.56-.56.823-.856z" />
          <path d="M157.996 732.33c.086-.065.215.063.15.149-3.699 4.905-13.453 10.007-19.2 5.57-.334-.258-.144-.877.255-.952 3.083-.575 6.272.122 9.422-.416 3.545-.606 6.534-2.218 9.373-4.351z" />
          <path d="M173.899 733.86c-2.45-3.729-3.124-8.297-1.773-12.53.12-.373.735-.325.716.096-.197 4.207.475 8.27 3.17 11.672 1.17 1.481 2.542 2.646 4.139 3.666 1.115.713 1.61.848 2.217 1.998a.416.416 0 0 1-.248.604c-3.207.919-6.669-3.143-8.221-5.506z" />
          <path d="M170.17 714.935c-.347 6.192-2.135 12.294-5.425 17.47-5.866 9.227-17.937 15.756-28.903 11.952-.504-.174-.296-.853.216-.775 20.597 3.088 33.274-14.484 32.793-32.433a46.354 46.354 0 0 1-.658-2.397c-.067-.276.247-.488.467-.398-.414-3.985-1.476-7.937-3.274-11.633-5.15-10.577-15.508-15.98-27.288-13.877-11.806 2.106-20.16 10.544-28.902 17.893-.24.202-.562-.11-.348-.344 8.598-9.438 20.096-18.757 33.51-19.32 11.368-.477 20.488 6.383 24.838 16.503 1.893 4.404 2.895 9.254 3.016 14.138 3.217 7.485 6.745 15.466 15.095 18.378 5.912 2.061 13.708.249 15.816-6.312.916-2.85.527-6.275-1.712-8.493-1.59-1.461-3.442-2.176-5.558-2.147-3.089-.027-4.834 1.415-5.27 4.288 3.827-4.065 8.033 5.974 1.601 5.325-3.947-.398-4.195-5.137-2.314-7.69 2.238-3.038 6.7-3.486 9.99-2.061 10.354 4.485 3.388 17.974-5.407 19.268-11.162 1.642-18.515-7.827-22.283-17.335z" />
          <path d="M250.773 730.084c-1.642.44-42.845-6.08-42.845-6.08l-2.441 6.532z" />
          <path d="M106.519 689.6c2.886-2.175 5.576-4.65 7.756-7.53a29.007 29.007 0 0 0 3.21-5.336c4.217-7.051 6.5-15.253 3.204-23.216-4.315-10.426-16.817-13.598-26.82-9.624-9.999 3.973-18.16 14.522-15.515 25.526 2.164 9.005 12.31 15.103 20.86 9.956.399-.24.134-.975-.333-.781-10.191 4.25-19.8-3.27-19.684-13.873.108-10.022 9.252-18.578 18.67-20.74 11.397-2.614 22.335 4.632 23.152 16.4.252 3.636-.418 7.094-1.64 10.385.334-1.92.41-3.878.164-5.834-1.305-10.345-12.638-18.708-22.39-12.119-3.008 2.033-5.854 6.229-4.488 9.997 1.046 2.886 5.456 4.96 7.425 1.624 1.276-2.16-.79-5.476-3.435-4.455-.855.33-1.311.951-1.45 1.645-2.336-3.138.428-6.436 3.15-8.11 1.825-1.124 4.091-1.767 6.237-1.814 4.315-.097 8.088 2.25 10.594 5.578 5.947 7.903 3.118 18.349-2.808 25.41-4.325 5.156-10.119 7.77-15.25 11.851-2.81 2.237-4.697 5.504-2.253 8.704.147.194.457.03.336-.195-3.457-6.407 7.553-10.62 11.308-13.45z" />
          <path d="M88.54 641.788c-3.144.409-6.21 2.48-8.27 4.777-1.901 2.123-4.317 5.636-3.376 8.598.119.372.631.557.921.24 1.745-1.913 2.31-4.733 3.808-6.873 1.924-2.75 4.328-4.556 6.97-6.554.066-.052.061-.203-.052-.188z" />
          <path d="M61.69 651.446c2.096-2.012 3.333-4.703 5.466-6.73 2.396-2.278 5.45-4.2 8.657-5.173.097-.03.085-.191-.025-.18-3.594.346-6.745 1.31-9.688 3.538-2.517 1.905-5.327 4.833-5.38 8.15-.008.493.622.729.97.395z" />
          <path d="M101.41 702.597c-4.13 1.637-8.06 4.18-12.662 4.224-2.58.025-5.499-.622-7.455-2.396a6.957 6.957 0 0 1-2.224-4.33 3.235 3.235 0 0 1 .013-1.912c.024-1.198.596-2.084 1.704-2.665-.677 2.883 3.386 4.887 5.21 2.031 2.858-4.476-4.555-6.097-7.295-3.105-3.757 4.103-.899 10.544 3.528 12.762 6.401 3.206 14.285-.169 19.404-4.232.174-.137-.014-.459-.223-.377z" />
          <path d="M100.25 704.086c-3.593 2.934-6.944 6.192-11.374 7.859-6.494 2.442-9.877.361-14.811-3.425-.51-.392-1.282-.05-1.12.643 1.113 4.758 6.871 6.317 11.276 5.833 1.774-.195 3.449-.7 5.033-1.418-1.281 1.414-2.47 2.913-4.1 4.063-2.197 1.551-4.632 2.351-6.997 3.548-.377-.09-.81.098-.765.581.147 1.61.068 3.219-.378 4.78-.406 1.423-1.306 2.602-1.734 3.994-.004.014.002.027.001.042-.11.14-.227.274-.335.415-.28.367.311.779.625.477 3.272-3.135 6.161-6.716 9.173-10.1 2.695-3.028 5.563-5.987 7.86-9.325.11-.16-.112-.307-.252-.208 3.088-2.07 5.768-4.865 8.063-7.593.1-.116-.048-.262-.166-.166zm-21.12 17.775c-.15.164-.284.338-.412.514a11.98 11.98 0 0 0-.038-.6c.188-.026.377-.046.567-.084a5.485 5.485 0 0 1-.116.17zm-.462 2.403a.633.633 0 0 0 .361.398c-.157.14-.31.287-.462.433.042-.279.076-.556.101-.831zm12.785-11.58c.053-.117.091-.236.136-.354.245-.152.49-.3.729-.461-.298.26-.575.547-.865.815z" />
          <path d="M74.24 649.688c.066-.086-.065-.213-.15-.149-4.961 3.659-10.12 13.302-5.635 18.985.261.33.889.144.964-.252.581-3.048-.124-6.202.42-9.315.613-3.507 2.243-6.462 4.4-9.269z" />
          <path d="M72.693 633.964c3.77 2.422 8.39 3.088 12.67 1.753.377-.118.33-.728-.097-.708-4.255.194-8.364-.47-11.805-3.134-1.497-1.159-2.676-2.513-3.707-4.094-.721-1.103-.857-1.592-2.022-2.191-.239-.123-.533-.019-.61.245-.928 3.17 3.181 6.593 5.57 8.129z" />
          <path d="M91.832 637.65c-6.262.343-12.434 2.111-17.667 5.364-9.331 5.8-15.936 17.737-12.088 28.58.176.496.861.292.784-.214-3.124-20.365 14.649-32.901 32.8-32.425.822.242 1.634.461 2.424.65.278.067.493-.244.404-.462 4.03.41 8.027 1.46 11.764 3.238 10.697 5.092 16.16 15.333 14.036 26.981-2.13 11.675-10.664 19.934-18.097 28.579-.204.237.11.554.348.344 9.546-8.502 18.97-19.871 19.54-33.136.482-11.24-6.456-20.258-16.69-24.559-4.454-1.871-9.36-2.862-14.299-2.983-7.569-3.182-15.641-6.67-18.586-14.925-2.085-5.846-.253-13.555 6.383-15.64 2.882-.905 6.347-.52 8.59 1.694 1.477 1.572 2.2 3.404 2.17 5.496.029 3.055-1.43 4.78-4.335 5.21 4.11-3.784-6.043-7.941-5.386-1.583.402 3.902 5.195 4.147 7.777 2.287 3.072-2.212 3.525-6.625 2.084-9.877-4.537-10.238-18.179-3.35-19.488 5.346-1.661 11.04 7.916 18.31 17.532 22.035z" />
          <path d="M76.512 557.953c-.446 1.624 6.148 42.364 6.148 42.364l-6.607 2.413z" />
          <path d="M78.232 721.834c.277-.528.775-.642 1.336-.537.377.071.494.6.227.846l-.625.572c-.035-.273-.07-.547-.107-.82.496.22 1.152.377 1.206.989.01.113-.068.208-.155.267-.486.337-1.132-.133-1.584-.353-.292-.142-.355-.61-.107-.82l.647-.55c.075.283.15.565.227.847-.162-.037-.384.02-.533.088-.349.158-.72-.17-.532-.53z" />
          <path d="m79.003 725.148-.439.428c-.35.346-.924-.094-.681-.519.319-.561.794-1.062 1.192-1.57.323-.412 1.031.035.873.501-.14.408-.291.88-.753 1.005a.3.3 0 0 1-.325-.13c-.244-.36-.08-.784.07-1.149l.873.502c-.403.454-.784.97-1.249 1.36l-.526-.673.492-.361c.36-.265.781.306.473.606z" />
          <path d="M81.042 727.797a20.747 20.747 0 0 1 2.682-.465v.953l-1.061.025v-.928c.744.008 1.488.051 2.231.065l-.395.391c-.002-.244.03-.348.143-.563.104-.2.39-.26.579-.15.382.223.101.494.054.817-.025.17-.224.284-.38.288-.746.018-1.488.068-2.232.083-.606.01-.601-.9 0-.928l1.06-.05c.623-.03.615.912 0 .952-.881.06-1.732.061-2.614.006-.273-.019-.359-.425-.067-.496z" />
          <path d="M93.109 710.943c-.293.853-.886 1.508-1.433 2.215-.497.643-1.003 1.42-1.758 1.777-.213.102-.453-.064-.398-.303.186-.802.838-1.465 1.361-2.08.582-.685 1.098-1.404 1.879-1.874.17-.102.416.069.349.265z" />
          <path d="M101.288 703.577c-2.152 3.18-5.177 5.907-7.851 8.665-2.678 2.762-5.28 5.89-8.464 8.088-.23.16-.531-.153-.382-.378 2.124-3.22 5.211-5.886 7.923-8.622 2.7-2.723 5.366-5.794 8.508-8.016.158-.114.371.108.266.263z" />
          <path d="M104.187 705.463c-2.504 3.706-5.945 6.817-9.038 10.038-3.436 3.577-6.769 7.502-10.712 10.538-.226.174-.64-.053-.44-.335 2.76-3.861 6.359-7.161 9.66-10.567 3.28-3.384 6.44-7.147 10.265-9.937.156-.115.37.11.265.263z" />
          <path d="M101.385 702.983c.028.01.054.022.082.033.073.029.073.117 0 .145l-.082.032c-.176.07-.177-.28 0-.21z" />
          <path d="M101.587 703.185c-1.089 2.172-3.313 3.95-4.996 5.692-1.719 1.778-3.366 3.915-5.463 5.258-.167.107-.361-.101-.266-.263 1.257-2.14 3.345-3.87 5.062-5.654 1.672-1.738 3.367-4.021 5.501-5.193.108-.06.215.057.162.16z" />
        </g>
      </>
      <>
        <foreignObject width={'90%'} height={'400'} y={'40'} x={'5%'}>
          <div style={{height:"200px"}} className="tw-flex tw-items-center tw-justify-center tw-w-full">
            {logos.map((item, key) => (
              <div
                key={key}
                className="tw-flex tw-items-center tw-justify-center "
              >
                <div style={{width:`${item.width}px`,height:`${item.height}px`}} className="tw-w-20 tw-shrink-0 tw-mx-6">
                  <img src={item.url} alt="" />
                </div>
                <div className="tw-text-center">
                  {key === num_left && (
                    <>
                      {title.map((item, key) => (
                        <Text fontSize={`${item.fontSize}px`} fontFamily={item.fontFamily} fontStyle={item.italic} fontWeight={item.bold} color={item.fontColor} key={key} className=" tw-text-center">
                          {item.name}
                        </Text>
                      ))
                      }
                      {/* <p className="tw-font-nunito-bold tw-text-xl tw-font-medium">
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
                      </p> */}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </foreignObject>

        <foreignObject x="0%" y="190.473" width="100%" height="200">
          <div className="tw-mt-8 tw-text-center tw-flex-col tw-items-center tw-flex tw-gap-1 tw-justify-center">
            {header.map((item, ind) => (
              <Text width="70%" fontSize={`${item.fontSize}px`} fontFamily={item.fontFamily} fontStyle={item.italic} fontWeight={item.bold} color={item.fontColor} className="tw-uppercase" key={ind}>{item.header}</Text>
            ))}
          </div>
        </foreignObject>

        {/* certificateOf */}
        <foreignObject  y="295.473" width="100%" height="200">
          <Text  width="100%" fontSize={`${certificateOf.fontSize}px`} fontFamily={certificateOf.fontFamily} fontStyle={certificateOf.italic} fontWeight={certificateOf.bold} color={certificateOf.fontColor} className="tw-text-center tw-uppercase opacity-80">
            <div width="90%" className="tw-text-center tw-uppercase">{certificateOf.certificateOf}</div>
          </Text>
        </foreignObject>


        <foreignObject width="100%" x="11%" y="375.473" height="160">
          <Text width="77%" fontSize={`${contentBody.fontSize}px`} fontFamily={contentBody.fontFamily} fontStyle={contentBody.italic} fontWeight={contentBody.bold} color={contentBody.fontColor} className="tw-text-center opacity-80">
                {ReactHtmlParser(contentBody.body)}
          </Text>
        </foreignObject>

        <foreignObject x={'20%'} y={510} width={'60%'} height={400}>
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
                <Text fontSize={`${item.name.fontSize}px`} fontFamily={item.name.fontFamily} fontStyle={item.name.italic} fontWeight={item.name.bold} color={item.name.fontColor} className="tw-text-black">{item.name.name}</Text>
                <Text fontSize={`${item.position.fontSize}px`} fontFamily={item.position.fontFamily} fontStyle={item.position.italic} fontWeight={item.position.bold} color={item.position.fontColor} className="-tw-mt-3 tw-text-gray-900">{item.position.position}</Text>
              </div>
            ))}
          </div>
        </foreignObject>
        {verifiableLink &&
          <foreignObject x={'0%'} y={'91%'} width={'100%'} height={'100'}>
            <div className="tw-text-sm tw-text-center tw-text-gray-700 ">
              {window.location.href}
            </div>
          </foreignObject>}
          <foreignObject x={"0%"} y={'89%'} width={'100%'} height={'100'}><Text className="tw-text-sm tw-text-center tw-text-gray-700 ">Issued On: {footer.footer}</Text></foreignObject>
      </>
      );
    </svg>
  );
};

export default CertificateContent;
