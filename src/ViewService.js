import React from 'react'

class ViewService extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items
    }
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.login} {item.password}
          </li>
        ))}
      </ul>
    )
  }
}

export default ViewService;
