export const logger = store => next => action => {
    console.log('Dispatching', action)
    let result = next(action)
    console.log('Next state', store.getState())
    return result
  }
  
export const crashReporter = store => next => action => {
try {
    return next(action)
} catch (err) {
    console.error(`Error logged: ${err} | action: ${action} | state: ${store.getState()}`)
    throw err
}
}