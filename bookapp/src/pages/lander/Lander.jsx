import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Login from '../../components/login/Login';
import SignUp from '../../components/signup/SignUp';



const useStyles = makeStyles({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#A8A8A8',
        zIndex: '1',
    },
    main2: {
        width: '45%',
        height: '60%',
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: '100px',
        left: '360px',
        zIndex: 5,
        borderRadius: '21px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        opacity: '1',
        zIndex: '2',
    },
    imgtext: {
        width: '50%',
        height: '76%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    maintext: {
        fontSize: 'large',
        fontWeight: '500',
        position: 'relative',
        left: '15px',
    },
    image: {
        border: '0px solid red',
        height: '80%',
        width: '75%',
    },
    image1: {
        height: '100%',
        width: '100%',
        borderRadius: '180px',
        position: 'relative',
        left: '10px',
        top: '8px'
    },
    image2: {
        height:'30px',
        width:'30px',
        position:'relative',
        bottom:'200px',
        left:'75px',
    },
    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
        main2: {
           display: 'none',
        },        
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        main2: {
            display: 'none',
         },
    },
    ['@media only screen and (min-width: 721px) and (max-width: 1024px)']: {
        main2: {
            width: '50%',
            height: '58%',            
            top: '170px',
            left: '100px',

        },
        imgtext: {
            border: '0px solid blue',
            width: '60%',
            height: '76%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        image: {
            width: '12rem',
            height: '12rem',
        },
        image2: {
            width: '18px',
            bottom: '150px',
            left: '47px',        
        },
        maintext: {
            position:'relative',
            top :'10px',
            fontSize:'15px',
        }
    }

})

function Lander() {

    const [toggle, setToggle] = useState(false)

        const listenTologin1 = () => {
            setToggle(true)
        }
        const listenTosignup1 = () => {
            setToggle(false)
        }
    const classes = useStyles()
    return (
        <div>
            <Box className={classes.container}>
                <Box className={classes.main2}>
                    <Box className={classes.imgtext}>
                        <Box className={classes.image}>
                            <img className={classes.image1} src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A634ba680-536e-4b6f-b4a3-41986b9b22f5&params=version%3A0&token=1671038071_da39a3ee_46d35ed84c3d03e50096918a347b6330bb925847&api_key=CometServer1' />
                            <img className={classes.image2} src='data:image/jpeg;base64,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' />
                        </Box>
                        <Box className={classes.maintext}>ONLINE BOOK SHOPPING</Box>
                    </Box>
                </Box>
                <div>
                    {
                        toggle ? <SignUp listenTosignup1={listenTosignup1} /> : <Login listenTologin1={listenTologin1} />
                    }
                </div>
            </Box>

        </div>
    )
}

export default Lander
