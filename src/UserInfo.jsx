import { useSelector } from 'react-redux'


export default function UserInfo() {
    let data = useSelector(state =>  state.user)
  return (
    <div>
      <h4>Redux Topics</h4>
      <h2>{data.username}, {data.balance}</h2>
    </div>
  )
}
