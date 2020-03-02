import {withRouter} from "react-router";
import {compose} from "redux";
import {connect} from "react-redux";
import React, {Component, Fragment} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const navigationStyles = () => ({
    btn: {
        fontFamily: 'Montserrat',
        paddingLeft: 15,
        paddingRight: 5,
        color: 'white',
        fontSize: 14,
        textDecoration: 'none',

    },
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        fontFamily: 'Montserrat',
        fontSize: 18,
        textDecoration: 'none',
        color: 'white'
    },
    icon: {
        fontSize: 40,
    },
    link: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white'

    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position='fixed' style={{backgroundColor: '#01579b'}}>
                    <Toolbar className={classes.toolbar}>
                        <NavLink to='/' className={classes.link}>
                            <AssignmentIndIcon className={classes.icon}/>
                            <div className={classes.title}>
                                CV
                            </div>
                        </NavLink>
                        <div className={classes.actions}>
                            <Fragment>
                                <NavLink className={classes.btn} to='/register'>
                                    <Button
                                        color='inherit'>

                                        <div className={classes.btn}>
                                            Sing up
                                        </div>
                                    </Button>
                                </NavLink>
                            </Fragment>
                            <Fragment>
                                <NavLink className={classes.btn} to='/login'>
                                    <Button
                                        color='inherit'>

                                        <div className={classes.btn}>
                                            Sing in
                                        </div>
                                    </Button>
                                </NavLink>
                            </Fragment>

                        </div>


                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default withStyles(navigationStyles)(Navigation);
