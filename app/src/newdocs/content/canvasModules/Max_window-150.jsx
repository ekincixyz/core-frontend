/* eslint-disable max-len */
import moduleDescription from './Max_window-150.md'

export default {
    id: 150,
    name: 'Max (window)',
    path: 'Time Series: Statistics',
    help: {
        outputNames: [],
        inputs: {},
        helpText: moduleDescription,
        inputNames: [],
        params: {},
        outputs: {},
        paramNames: [],
    },
    inputs: [
        {
            id: 'ep_9jxEyUYIT0qm2eixzWzWeg',
            name: 'in',
            longName: 'Max (window).in',
            type: 'Double',
            connected: false,
            canConnect: true,
            export: false,
            drivingInput: true,
            canToggleDrivingInput: true,
            acceptedTypes: [
                'Double',
            ],
            requiresConnection: true,
            canHaveInitialValue: true,
            initialValue: null,
        },
    ],
    outputs: [
        {
            id: 'ep_zD8yBbqkRvmzDGrPQCIwcw',
            name: 'out',
            longName: 'Max (window).out',
            type: 'Double',
            connected: false,
            canConnect: true,
            export: false,
            noRepeat: false,
            canBeNoRepeat: true,
        },
    ],
    params: [
        {
            id: 'ep_TTbSMd7mQaGaBFdAt-MSRQ',
            name: 'windowLength',
            longName: 'Max (window).windowLength',
            type: 'Double',
            connected: false,
            canConnect: true,
            export: false,
            value: 0,
            drivingInput: false,
            canToggleDrivingInput: true,
            acceptedTypes: [
                'Double',
            ],
            requiresConnection: false,
            defaultValue: 0,
        },
        {
            id: 'ep_DcvgRyYvSk2nbsirQ2vPlg',
            name: 'windowType',
            longName: 'Max (window).windowType',
            type: 'String',
            connected: false,
            canConnect: true,
            export: false,
            value: 'events',
            drivingInput: false,
            canToggleDrivingInput: true,
            acceptedTypes: [
                'String',
            ],
            requiresConnection: false,
            defaultValue: 'events',
            isTextArea: false,
            possibleValues: [
                {
                    name: 'events',
                    value: 'EVENTS',
                },
                {
                    name: 'seconds',
                    value: 'SECONDS',
                },
                {
                    name: 'minutes',
                    value: 'MINUTES',
                },
                {
                    name: 'hours',
                    value: 'HOURS',
                },
                {
                    name: 'days',
                    value: 'DAYS',
                },
            ],
        },
        {
            id: 'ep_0ZwTW2oMTSKrBc-bgHGm8w',
            name: 'minSamples',
            longName: 'Max (window).minSamples',
            type: 'Double',
            connected: false,
            canConnect: true,
            export: false,
            value: 0,
            drivingInput: false,
            canToggleDrivingInput: true,
            acceptedTypes: [
                'Double',
            ],
            requiresConnection: false,
            defaultValue: 0,
        },
    ],
}
