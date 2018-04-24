// @flow

import React from 'react'
import type { Currency } from '../../../../flowtype/common-types'
import Switcher from './Switcher'

import styles from './fixedPriceSelector.pcss'

type Props = {
    value: ?Currency,
    onChange: (Currency) => void,
    onValue: Currency,
    offValue: Currency,
}

// TODO: use icon from streamr-icons
const path = 'M8,0 C3.5888,0 0,3.5896 0,8 C0,12.412 3.5888,16 8,16 C12.4112,16 16,12.412 16,8 ' +
    'C16,3.5896 12.4112,0 8,0 Z M8,13 C7.448,13 7,12.5528 7,12 C7,11.448 7.448,11 8,11 ' +
    'C8.552,11 9,11.448 9,12 C9,12.5528 8.552,13 8,13 Z M8.8,9.5 L8.8,10.4 L7.2,10.4 ' +
    'L7.2,8 L8,8 C8.8832,8 9.6,7.2824 9.6,6.4 C9.6,5.5168 8.8832,4.8 8,4.8 ' +
    'C7.1168,4.8 6.4,5.5168 6.4,6.4 L4.8,6.4 C4.8,4.636 6.236,3.2 8,3.2 C9.764,3.2 11.2,4.636 11.2,6.4 ' +
    'C11.2,7.8888 10.1784,9.1432 8.8,9.5 Z'
const Icon = () => (
    <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="Create-product-+-Publish-flows" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Set-Price-01" transform="translate(-615.000000, -552.000000)" fill="#C3C3C3" fillRule="nonzero">
                <g id="Question-icon" transform="translate(615.000000, 552.000000)">
                    <path
                        d={path}
                        id="Shape-Copy-3"
                    />
                </g>
            </g>
        </g>
    </svg>
)

const FixedPriceSelector = ({ value, onChange, onValue, offValue }: Props) => (
    <div className={styles.fixedPriceSelector}>
        <span className={styles.text}>
            Fix price in USD
        </span>
        <div className={styles.iconContainer}>
            <Icon className={styles.icon} />
            <div className={styles.tooltip}>
                Fixing the price in fiat will protect you from changes in the DATA price
            </div>
        </div>
        <Switcher on={value === onValue} onChange={(v: boolean) => onChange(v ? onValue : offValue)} className={styles.switcher} />
    </div>
)

export default FixedPriceSelector
