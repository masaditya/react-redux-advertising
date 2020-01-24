import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Profile extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container w-50 py-5">
                    <div className="card mx-auto">
                        <h5 className="card-header text-center">Update Profile</h5>
                        <div className="card-body bg-white text-center">
                            <img width={100} src={require('../../../assets/img/avatar.png')} alt="profile-image" />
                            <div className="px-5 my-4">
                                <div className="custom-file bg-success">
                                    <input id="image-profile" className=" custom-file-input" type="file" name="image" />
                                    <label htmlFor="image-profile" className="custom-file-label">Change Avatar</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control my-3" name="email" id="email" aria-describedby="helpId" placeholder="email" />
                                    <input type="text" className="form-control my-3" name="username" id="username" aria-describedby="helpId" placeholder="username" />
                                    <input type="password" className="form-control my-3" name="password" id="password" aria-describedby="helpId" placeholder="password" />
                                    <input type="password" className="form-control my-3" name="password" id="confirmPassword" aria-describedby="helpId" placeholder="new password" />
                                    <button className="mt-4 px-5 btn btn-rounded btn-info">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
