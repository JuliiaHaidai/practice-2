import runRover from './task-4.js'
import boundingRect from './task-3.js'
function getExpeditionsTargets(commandSeries) {
    return commandSeries.map(item => runRover(item))
}

export default function boundingRover(commandSeries) {
    return boundingRect(getExpeditionsTargets(commandSeries))
}