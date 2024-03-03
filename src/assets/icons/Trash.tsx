import { Ref, SVGProps, forwardRef } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'white'}
    height={'16'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <defs>
      <filter
        colorInterpolationFilters={'sRGB'}
        filterUnits={'userSpaceOnUse'}
        height={'32.000000'}
        id={'filter_5661_1775_dd'}
        width={'32.000000'}
        x={'0.000000'}
        y={'0.000000'}
      >
        <feFlood floodOpacity={'0'} result={'BackgroundImageFix'} />
        <feColorMatrix
          in={'SourceAlpha'}
          result={'hardAlpha'}
          type={'matrix'}
          values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
        />
        <feOffset dx={'0'} dy={'4'} />
        <feGaussianBlur stdDeviation={'1.33333'} />
        <feComposite in2={'hardAlpha'} k2={'-1'} k3={'1'} operator={'out'} />
        <feColorMatrix type={'matrix'} values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'} />
        <feBlend in2={'BackgroundImageFix'} mode={'normal'} result={'effect_dropShadow_1'} />
        <feBlend
          in={'SourceGraphic'}
          in2={'effect_dropShadow_1'}
          mode={'normal'}
          result={'shape'}
        />
      </filter>
      <clipPath id={'clip5661_1775'}>
        <rect
          fill={'white'}
          fillOpacity={'0'}
          height={'24.000000'}
          id={'trash-outline'}
          transform={'translate(4.000000 0.000000)'}
          width={'24.000000'}
        />
      </clipPath>
    </defs>
    <g filter={'url(#filter_5661_1775_dd)'}>
      <rect
        fill={'#FFFFFF'}
        fillOpacity={'0'}
        height={'24.000000'}
        id={'trash-outline'}
        transform={'translate(4.000000 0.000000)'}
        width={'24.000000'}
      />
      <g clipPath={'url(#clip5661_1775)'}>
        <g opacity={'0.000000'}>
          <path
            d={'M4 0L28 0L28 24L4 24L4 0Z'}
            fill={'#ffffff'}
            fillOpacity={'1.000000'}
            fillRule={'evenodd'}
            id={'Vector'}
          />
        </g>
        <path
          d={
            'M25 6L20 6L20 4.33001C19.9765 3.68982 19.7002 3.08506 19.2316 2.6483C18.7629 2.21153 18.1402 1.9784 17.5 2L14.5 2C13.8598 1.9784 13.2371 2.21153 12.7684 2.6483C12.2998 3.08506 12.0235 3.68982 12 4.33001L12 6L7 6C6.73479 6 6.48042 6.10536 6.29289 6.2929C6.10536 6.48043 6 6.73479 6 7C6 7.26522 6.10536 7.51958 6.29289 7.70711C6.48042 7.89465 6.73479 8 7 8L8 8L8 19C8 19.7957 8.31607 20.5587 8.87868 21.1213C9.44128 21.6839 10.2043 22 11 22L21 22C21.7957 22 22.5587 21.6839 23.1213 21.1213C23.6839 20.5587 24 19.7957 24 19L24 8L25 8C25.2652 8 25.5196 7.89465 25.7071 7.70711C25.8946 7.51958 26 7.26522 26 7C26 6.73479 25.8946 6.48043 25.7071 6.2929C25.5196 6.10536 25.2652 6 25 6ZM14 4.33001C14 4.17001 14.21 4 14.5 4L17.5 4C17.79 4 18 4.17001 18 4.33001L18 6L14 6L14 4.33001ZM22 19C22 19.2652 21.8946 19.5196 21.7071 19.7071C21.5196 19.8946 21.2652 20 21 20L11 20C10.7348 20 10.4804 19.8946 10.2929 19.7071C10.1054 19.5196 10 19.2652 10 19L10 8L22 8L22 19Z'
          }
          fill={'#ffffff'}
          fillOpacity={'1.000000'}
          fillRule={'nonzero'}
          id={'Vector'}
        />
      </g>
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const TrashSvg = ForwardRef
