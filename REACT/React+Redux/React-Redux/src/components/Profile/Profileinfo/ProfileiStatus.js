// import React from "react"

// class ProfileiStatus extends React.Component {


//   state = {
//     editMode: false,
//     status: this.props.status

//   }

//   deactivateEditMode = () => {

//     this.setState({ editMode: false })
//     this.props.updateStatus(this.state.status)
//   }

//   onStatusChange=(e)=>{
//     this.setState({status:e.target.value}) 
//   }

//   componentDidUpdate=(prevProps,prevState)=>{

//     if(prevProps.status!==this.props.status){

//       this.setState({status:this.props.status})
//     }
 
//   }

//   render() {

//     return (
//       <div>
//         {
//           !this.state.editMode ?
//             <div>
//               <span onDoubleClick={() => this.setState({ editMode: true })}>{this.props.status?this.props.status:"No Status"}</span>
//             </div> :
//             <div>
//               <input
//                 onChange={this.onStatusChange}
//                 autoFocus={true}
//                 onBlur={this.deactivateEditMode}
//                 value={this.state.status}
//                 type="text"
//               />
//             </div>
//         }
//       </div>

//     )
//   }
// }

// export default ProfileiStatus