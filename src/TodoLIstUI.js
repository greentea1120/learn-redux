import React from 'react';
import { Input, Button, List } from 'antd';

const TodoLIstUI = (props) => {
  return (
    <div style={{margin: '10px'}}>
      <Input style={{width: '300px'}} 
      value={props.inputValue}
      onChange={props.handleInputChange}/>
      <Button type="primary" style={{marginLeft: '10px'}}
      onClick={props.handleBtnClick}
      >Primary</Button>

      <List
        bordered
        dataSource={props.list}
        style={{marginTop: '10px', width: '300px'}}
        renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}
// class TodoLIstUI extends Component {
//   render() {
//     return (
//       <div style={{margin: '10px'}}>
//         <Input style={{width: '300px'}} 
//         value={this.props.inputValue}
//         onChange={this.props.handleInputChange}/>
//         <Button type="primary" style={{marginLeft: '10px'}}
//         onClick={this.props.handleBtnClick}
//         >Primary</Button>

//         <List
//           bordered
//           dataSource={this.props.list}
//           style={{marginTop: '10px', width: '300px'}}
//           renderItem={(item,index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     );
//   }
// }

export default TodoLIstUI;