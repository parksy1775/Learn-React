import React from 'react';
import PropTypes from 'prop-types';

export default class ContactDetail extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isEdit: false,
      name: '',
      phone: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e){
    let nextState={};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleToggle(){
    if(this.props.isSelected){
      if(!this.state.isEdit){
        this.setState({
          name: this.props.contact.name,
          phone: this.props.contact.phone
        });
      }
      else {
              this.handleEdit();
      }
        this.setState({
          isEdit: !this.state.isEdit
        });//비동기 여기선 보통 console실행 후 setState 실행
      console.log('isEdit?',this.state.isEdit);
    }
  }

  handleEdit(){
    this.props.onEdit(this.state.name, this.state.phone);
  }

  render()
  {

    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    const blank = (<div>not selected</div>);
    const edit = (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
      </div>
    );
    const view = this.state.isEdit ? edit : details;

    return (
      <div>
      dd
      <div>{ this.props.isSelected ? view : blank }</div>

        <button onClick={this.handleToggle}>{this.state.isEdit? 'OK' : 'Edit'}</button>
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
    );
  }
}

ContactDetail.defaultProps={
  contact:{
    name: '',
    phone: ''
  },
  onRemove: ()=> {console.error('remove error');},
  onEdit: ()=> {console.error('edit error');}
};
ContactDetail.propTypes={
  contact : PropTypes.object,
  onRemove : PropTypes.func,
  onEdit: PropTypes.func
};
