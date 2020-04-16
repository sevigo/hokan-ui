import { combineReducers } from 'redux'
import config from './config'
import directories from './directories'
import files from './files'
import flow from './flow'
import status from './status'
import targets from './targets'
import version from './version'

export default combineReducers({
  config,
  flow,
  directories,
  version,
  files,
  targets,
  status
})
