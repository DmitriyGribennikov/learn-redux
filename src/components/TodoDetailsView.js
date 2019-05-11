import React from  'react';
// eslint-disable-next-line
import styles from './todolist.scss';


class TodoDetailsView extends React.Component {

  render() {
    const { item } = this.props;
    if (!item) {
      return <div> Nothing selected</div>
    }
    return <div>
        active todo item: {item.title} <input />
        <div> 
           status: {item.status}
        </div>
        <div> 
           new status:  <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        </div>
        <div>
            details: <textarea> 

            </textarea>
        </div>
        <button> update</button>
    </div>
  }
}

export default TodoDetailsView;
