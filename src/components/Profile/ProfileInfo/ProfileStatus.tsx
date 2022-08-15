import React, {ChangeEvent} from 'react';

type ProfileStatustype = {
    status: string,
    updateStatus: (status: string) => void

}

class ProfileStatus extends React.Component<ProfileStatustype> {


    state = {
        editeMode: false,
        status: this.props.status
    }
    activateEditeMode = () => {
        this.setState({
            editeMode: true
        })
    }
    daActivateEditeMode = () => {
        this.setState({
            editeMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange=(e: ChangeEvent<HTMLInputElement>)=> {

        this.setState({
            status: e.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                {!this.state.editeMode
                    ? <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status || 'no status' }</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} value={this.state.status}
                               onBlur={this.daActivateEditeMode} autoFocus/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
