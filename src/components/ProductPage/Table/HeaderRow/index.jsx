// @flow

import React from 'react'

import pageStyles from '../../productPage.pcss'

import TableRow from '../Row'
import type { Props } from '../Row'

export const HeaderRow = (props: Props) => (
    <TableRow className={pageStyles.headerCell} {...props} />
)

export default HeaderRow
