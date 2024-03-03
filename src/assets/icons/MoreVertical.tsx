import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <clipPath id={'clip15_7174'}>
        <rect
          fill={'white'}
          fillOpacity={'0'}
          height={'12.000000'}
          id={'more-vertical-outline'}
          transform={'translate(6.000000 6.000000)'}
          width={'12.000000'}
        />
      </clipPath>
    </defs>
    <circle
      cx={'12.000000'}
      cy={'12.000000'}
      id={'Ellipse 106'}
      r={'8.500000'}
      stroke={'#FFFFFF'}
      strokeOpacity={'1.000000'}
      strokeWidth={'1.000000'}
    />
    <rect
      fill={'#FFFFFF'}
      fillOpacity={'0'}
      height={'12.000000'}
      id={'more-vertical-outline'}
      transform={'translate(6.000000 6.000000)'}
      width={'12.000000'}
    />
    <g clipPath={'url(#clip15_7174)'}>
      <g opacity={'0.000000'}>
        <path
          d={'M6 18L6 6L18 6L18 18L6 18Z'}
          fill={'#FFFFFF'}
          fillOpacity={'1.000000'}
          fillRule={'evenodd'}
          id={'Vector'}
        />
      </g>
      <path
        d={
          'M13 12C13 12.5522 12.5523 13 12 13C11.4477 13 11 12.5522 11 12C11 11.4478 11.4477 11 12 11C12.5523 11 13 11.4478 13 12Z'
        }
        fill={'#FFFFFF'}
        fillOpacity={'1.000000'}
        fillRule={'evenodd'}
        id={'Vector'}
      />
      <path
        d={
          'M13 8.5C13 9.05225 12.5523 9.5 12 9.5C11.4477 9.5 11 9.05225 11 8.5C11 7.94775 11.4477 7.5 12 7.5C12.5523 7.5 13 7.94775 13 8.5Z'
        }
        fill={'#FFFFFF'}
        fillOpacity={'1.000000'}
        fillRule={'evenodd'}
        id={'Vector'}
      />
      <path
        d={
          'M13 15.5C13 16.0522 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0522 11 15.5C11 14.9478 11.4477 14.5 12 14.5C12.5523 14.5 13 14.9478 13 15.5Z'
        }
        fill={'#FFFFFF'}
        fillOpacity={'1.000000'}
        fillRule={'evenodd'}
        id={'Vector'}
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const MenuSvg = ForwardRef
