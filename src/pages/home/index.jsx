import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import homeActions from '@/actions/home'
import str from '@/utils/string'
import { SET_HOME_AGE } from '@/constants/actionTypes'
import './styles.less'

export default connect(state => ({
  data: state.home.data,
}), {
  SET_HOME_AGE: homeActions[str(SET_HOME_AGE)],
})(Home)
function Home (props) {
  useEffect(() => {
    // props[SET_HOME_AGE]({
    //   limit: 6,
    //   page: 2,
    // })
  }, [])

  return (
    <div className="pages-home">
      <button>点我</button>
    </div>
  )
}
// export default @connect(state => ({
//   data: state.home.data,
// }), {
//   SET_HOME_AGE: homeActions[str(SET_HOME_AGE)],
// })
// class Home extends React.PureComponent {
//   onClick = () => {
//     this.props[SET_HOME_AGE]({
//       limit: 6,
//       page: 2,
//       token: 'BCYAjkLKEqwi6Y6QPnqggKwCfy49gRAy',
//     })
//   }

//   render () {
//     return (
//       <div className="pages-home">
//         <button onClick={this.onClick}>点我</button>
//       </div>
//     )
//   }
// }
