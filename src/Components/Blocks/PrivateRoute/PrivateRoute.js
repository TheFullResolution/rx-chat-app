import { connect } from 'react-redux'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'

export class PrivateRouteComponent extends Component {
    static propTypes = {
        profileLoaded: PropTypes.bool,
        firebaseLoaded: PropTypes.bool,
        loggedIn: PropTypes.bool,
        component: PropTypes.func,
        history: PropTypes.object,
    }

    render() {
        const {
            loggedIn,
            firebaseLoaded,
            profileLoaded,
            component: Component,
            ...rest
        } = this.props

        return (
            <Route
                {...rest}
                render={(props) => {
                    //if the profile or auth object not loaded - wait
                    if (!firebaseLoaded || !profileLoaded) {
                        return 'Loading'
                    }

                    if (loggedIn) {
                        return <Component {...props} />
                    }

                    //if all other conditions not met, go to login page
                    return (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: props.location },
                            }}
                        />
                    )
                }}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    firebaseLoaded: state.firebase.loaded,
    loggedIn: state.auth.loggedIn,
    profileLoaded: state.auth.profileLoaded,
})

export const PrivateRoute = withRouter(connect(mapStateToProps)(PrivateRouteComponent))
