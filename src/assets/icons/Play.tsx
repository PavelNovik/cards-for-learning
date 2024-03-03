import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'16'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'clip5661_2108'}>
        <rect
          fill={'white'}
          fillOpacity={'0'}
          height={'24.000000'}
          id={'play-circle-outline'}
          width={'24.000000'}
        />
      </clipPath>
    </defs>
    <rect
      fill={'#FFFFFF'}
      fillOpacity={'0'}
      height={'24.000000'}
      id={'play-circle-outline'}
      width={'24.000000'}
    />
    <g clipPath={'url(#clip5661_2108)'}>
      <g opacity={'0.000000'}>
        <path
          d={'M0 0L24 0L24 24L0 24L0 0Z'}
          fill={'#ffffff'}
          fillOpacity={'1.000000'}
          fillRule={'evenodd'}
          id={'Vector'}
        />
      </g>
      <path
        d={
          'M12 2C10.0222 2 8.08879 2.58649 6.44431 3.6853C4.7998 4.78412 3.51808 6.3459 2.76122 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32747 20.4696 8.1093 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38641 21.2388 8.17317C20.7363 6.95992 19.9997 5.85751 19.0711 4.92892C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25865 13.3132 2 12 2ZM12 20C10.4178 20 8.87103 19.5308 7.55544 18.6518C6.23985 17.7727 5.21446 16.5233 4.60896 15.0615C4.00346 13.5997 3.84505 11.9911 4.15372 10.4393C4.4624 8.88744 5.22433 7.46196 6.34315 6.34314C7.46198 5.22432 8.88744 4.4624 10.4393 4.15372C11.9911 3.84503 13.5997 4.00346 15.0615 4.60896C16.5233 5.21446 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4178 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1572 14.1217 20 12 20Z'
        }
        fill={'#ffffff'}
        fillOpacity={'1.000000'}
        fillRule={'nonzero'}
        id={'Vector'}
      />
      <path
        d={
          'M12.34 7.45001C12.095 7.2242 11.789 7.07538 11.4601 7.02205C11.1311 6.9687 10.7938 7.0132 10.49 7.15001C10.1951 7.26932 9.94237 7.47385 9.76425 7.73747C9.58612 8.0011 9.49063 8.31184 9.48999 8.63L9.48999 15.37C9.49063 15.6882 9.58612 15.9989 9.76425 16.2625C9.94237 16.5262 10.1951 16.7307 10.49 16.85C10.7068 16.9483 10.942 16.9995 11.18 17C11.6089 16.9981 12.022 16.8378 12.34 16.55L16 13.18C16.1637 13.0301 16.2944 12.8478 16.3838 12.6446C16.4733 12.4415 16.5194 12.222 16.5194 12C16.5194 11.778 16.4733 11.5585 16.3838 11.3554C16.2944 11.1522 16.1637 10.9699 16 10.82L12.34 7.45001ZM11.5 14.6L11.5 9.40001L14.31 12L11.5 14.6Z'
        }
        fill={'#ffffff'}
        fillOpacity={'1.000000'}
        fillRule={'nonzero'}
        id={'Vector'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const PlaySvg = ForwardRef