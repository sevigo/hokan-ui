import { combineReducers } from 'redux'
import files from './files'
import status from './status'
import targets from './targets'
import version from './version'

export default combineReducers({
  version,
  files,
  targets,
  status
})
