import reducer, { initialState } from '$mp/modules/global/reducer'
import * as constants from '$mp/modules/global/constants'

describe('global - reducer', () => {
    it('has initial state', () => {
        expect(reducer(undefined, {})).toStrictEqual(initialState)
    })

    describe('GET_DATA_USD_RATE', () => {
        it('handles request', () => {
            const expectedState = {
                ...initialState,
                fetchingDataPerUsdRate: true,
            }

            expect(reducer(undefined, {
                type: constants.GET_DATA_USD_RATE_REQUEST,
                payload: {},
            })).toStrictEqual(expectedState)
        })

        it('handles success', () => {
            const dataPerUsd = 1
            const expectedState = {
                ...initialState,
                dataPerUsd,
                dataPerUsdRateError: null,
            }

            expect(reducer(undefined, {
                type: constants.GET_DATA_USD_RATE_SUCCESS,
                payload: {
                    dataPerUsd,
                },
            })).toStrictEqual(expectedState)
        })

        it('handles failure', () => {
            const errorMessage = 'error'

            const expectedState = {
                ...initialState,
                dataPerUsd: null,
                fetchingDataPerUsdRate: false,
                dataPerUsdRateError: {
                    message: errorMessage,
                },
            }

            expect(reducer(undefined, {
                type: constants.GET_DATA_USD_RATE_FAILURE,
                payload: {
                    error: {
                        message: errorMessage,
                    },
                },
            })).toStrictEqual(expectedState)
        })
    })
})
