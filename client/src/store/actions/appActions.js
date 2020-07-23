import { SHOW_ALERT, IN_PROGRESS } from './types'

export function setProgress(showInProgress) {
    return function (dispatch) {
        dispatch({
            type: IN_PROGRESS,
            payload: {
                showInProgress
            }
        });
    }
}
export function showAlert({visible, type, message}) {
    return function (dispatch) {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                visible,
                type,
                message
            }
        });
    }
}