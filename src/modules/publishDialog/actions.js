// @flow

import { createAction } from 'redux-actions'

import {
    INIT_PUBLISH,
    SET_STEP,
} from './constants'

import { publishFreeProduct } from '../product/actions'
import type { ProductId } from '../../flowtype/product-types'
import type { StoreState, PublishStep } from '../../flowtype/store-state'
import { publishFlowSteps } from '../../utils/constants'
import { selectProduct } from './selectors'
import type { StepActionCreator, ProductIdActionCreator } from './types'

export const initPublish: ProductIdActionCreator = createAction(
    INIT_PUBLISH,
    (id: ProductId) => ({
        id,
    }),
)

export const setStep: StepActionCreator = createAction(
    SET_STEP,
    (step: PublishStep) => ({
        step,
    }),
)

export const publishProduct = () => (dispatch: Function, getState: () => StoreState) => {
    const product = selectProduct(getState())

    if (product) {
        if (/* paid product */false) {
            // Publish paid product
        } else {
            dispatch(publishFreeProduct(product.id || ''))
            dispatch(setStep(publishFlowSteps.COMPLETE))
        }
    }
}
