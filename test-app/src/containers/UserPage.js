import React, { Component, Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

import EditIcon from '@material-ui/icons/Edit';
import withStyles from '@material-ui/core/styles/withStyles';
import EditUser from '../components/EditUser';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { cancelEditMode, editUser } from '../redux/actions';



const userStyles = {

    mainBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: '70px'
    },
    card: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'column',
        padding: 25,
        '& > *': {
            fontFamily: 'Montserrat',
            fontSize: 20,
        }

    },
    mainInfoBlock: {
        display:        'flex',
        justifyContent: 'space-evenly',
        flexDirection:  'row',
        alignItems:     'center',
    },
    mainInfo: {
        display:        'flex',
        justifyContent: 'center',
        flexDirection:  'column',
        alignItems:     'center',
        padding:        50,
    },
    info: {
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        flexDirection:  'column',
        textAlign:      'center',
        paddingRight:   '45px',
        paddingLeft:    '45px',
        fontSize:       25,
        '& > *':        {
            textOverflow: 'ellipsis',
            overflow:     'hidden',
        },
    },
    hr: {
        width: '50%',
        color: '#311B92',
    },
    btn: {
        width:          '60%',
        display:        'flex',
        justifyContent: 'right',
        fontSize:       '3vw',
        textDecoration: 'none',
    },

    avatar: {
        width:          '130px',
        height:         '130px',
        opacity:        0.8,
        color:          'white',
        backgroundColor: '#c2185b',
        borderRadius:   '50%',
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        fontSize: 25,
        '& > *':        {
            fontSize: 60,
        },
    },

    content: {
        lineHeight:     2,
        fontSize:       25,
        textDecoration: 'none',
    },
    icons: {
        height: '25px',
    },
};

class UserPage extends Component {
    constructor (props) {
        super(props);
        const { editMode = false } = props;
        this.state = {
            id: '1',
            firstName: 'Lina',
            lastName: 'Dovhaniuk',
            email: 'l.d@gmail.com',
            editMode: false
        };
    }

    // getAbbreviation = (user) => `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;

    onEditIconClick = () => {
        this.setState({ editMode: true });
    };

    onSave = (user) => {
        this.setState({
            editMode: false,
        });
        this.props.editUser({
            ...user,
        });
    };

    onCancel = (user) => {
        this.setState({ editMode: false });
        this.props.cancelEditMode();

    };

    render () {
        const { classes } = this.props;
        const {id, firstName, lastName, email, editMode } = this.state;
        // const ab = this.getAbbreviation(user);
        const ab = '';

        return (
            <Box className = { classes.mainBox }>
                <Card className = { classes.card }>
                    <Box className = { classes.mainInfoBlock }>
                        <Avatar
                            className = { classes.avatar }
                            src = 'public/images/avatar-person.jpeg'>

                            {ab === '' ?
                                undefined
                                : ab
                            }
                        </Avatar>
                        <Box className = { classes.mainInfo }>
                            {editMode ? (
                                <EditUser
                                    onCancel = { this.onCancel }
                                    onSave = { this.onSave }
                                    user = { this.state }
                                />
                            ) : (


                                <Fragment>
                                    <Typography className = { classes.content } variant = 'h4' >{`${firstName} ${lastName}`}</Typography>
                                    <Typography className = { classes.content } variant = 'h5' >{email}</Typography>
                                </Fragment>


                            )}
                        </Box>
                        <CardActions>
                            <EditIcon
                                color = 'primary'
                                onClick = { this.onEditIconClick }
                                className = { classes.icons }
                            />
                        </CardActions>
                    </Box>

                    <CardContent>
                        <Box className = { classes.info }>
                            <h3>Your achievements</h3>
                            <hr className = { classes.hr } />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        );
    }
}

export default compose(
    withStyles(userStyles),
    connect(null, { editUser, cancelEditMode })
)(UserPage);
