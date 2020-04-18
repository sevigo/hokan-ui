import { combineReducers } from 'redux'
import config from './config'
import directories from './directories'
import files from './files'
import flow from './flow'
import info from './info'
import status from './status'
import targets from './targets'

export default combineReducers({
  config,
  flow,
  directories,
  info,
  files,
  targets,
  status
})
