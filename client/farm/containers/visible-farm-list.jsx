import { connect } from 'react-redux'
import FarmList from '../components/farm-list'

const compare = (a,b) => {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

const getVisibleFarms = (farms, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return farms
    case 'SORT_BY_NAME':
      return farms.sort(compare);
  }
}

const mapStateToProps = (state) => ({
    farms: getVisibleFarms(state.farms.data, state.visibilityFilter)
})


const VisibleFarmList = connect(
  mapStateToProps
)(FarmList)

export default VisibleFarmList
