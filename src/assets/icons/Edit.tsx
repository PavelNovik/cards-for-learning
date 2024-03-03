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
      <clipPath id={'clip5661_1780'}>
        <rect
          fill={'white'}
          fillOpacity={'0'}
          height={'24.000000'}
          id={'edit-2-outline'}
          width={'24.000000'}
        />
      </clipPath>
    </defs>
    <rect
      fill={'#FFFFFF'}
      fillOpacity={'0'}
      height={'24.000000'}
      id={'edit-2-outline'}
      width={'24.000000'}
    />
    <g clipPath={'url(#clip5661_1780)'}>
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
          'M19 20L5 20C4.73479 20 4.48042 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48042 21.8946 4.73479 22 5 22L19 22C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21C20 20.7348 19.8946 20.4804 19.7071 20.2929C19.5196 20.1054 19.2652 20 19 20Z'
        }
        fill={'#ffffff'}
        fillOpacity={'1.000000'}
        fillRule={'nonzero'}
        id={'Vector'}
      />
      <path
        d={
          'M4.99998 18L5.09 18L9.25999 17.62C9.71678 17.5745 10.144 17.3732 10.47 17.05L19.47 8.05C19.8193 7.68096 20.0081 7.1885 19.995 6.68053C19.9818 6.17256 19.7679 5.6905 19.4 5.34L16.66 2.6C16.3024 2.26409 15.8338 2.07135 15.3433 2.05845C14.8529 2.04554 14.3748 2.21336 14 2.52999L4.99998 11.53C4.67676 11.856 4.47549 12.2832 4.42999 12.74L3.99998 16.91C3.98653 17.0565 4.00552 17.2041 4.05565 17.3424C4.10577 17.4807 4.18579 17.6062 4.28999 17.71C4.38344 17.8027 4.49425 17.876 4.61609 17.9258C4.73792 17.9755 4.86838 18.0008 4.99998 18ZM15.27 4L18 6.73L16 8.68L13.32 6L15.27 4ZM6.37 12.91L12 7.32L14.7 10.02L9.09999 15.62L6.09999 15.9L6.37 12.91Z'
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

export const EditSvg = ForwardRef
