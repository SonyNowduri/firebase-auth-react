import { Paper, Grid, Typography, Box, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import coverImage from '../../../assets/images/coverImage.png'
import geometry from '../../../assets/images/geometry.png'
import './index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      color: 'green',
      borderWidth: 4
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    shrink: true
  },
  bordercolor: {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' }
  }
}))

export const TellMeabout = (props) => {
  const aboutTexts = [
    {
      name: 'I’m seeking treatment for myself',
      bgcolor: '#080808',
      color: '#FFFFFF'
    },
    {
      name: ' I’m learning about treatment for someone else',
      bgcolor: '#FFFFFF',
      color: '#080808'
    }
  ]
  return (
    <div className="login-wrapper">
      <Grid container spacing={0} xs={12}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper className="login-form">
            <Grid item>
              <Grid
                className="inputs-wrapper"
                xs={11}
                sm={11}
                md={9}
                lg={9}
                xl={6}
              >
                <Box className="content">
                  <Typography component="div" variant="h4" gutterBottom>
                    Tell us more about you
                  </Typography>
                  <p className="para-wrapper">
                    Donec auctor lacus et neque euismod blandit non non dui.
                  </p>
                </Box>
                <Box
                  width="70%"
                  height="80px"
                  bgcolor="#080808"
                  color="#FFFFFF"
                  textAlign="center"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignSelf="center"
                  m={1}
                  p={3}
                  // display="inline-block"
                  className="border-radius border-color justify-content-center"
                >
                  <p>I’m seeking treatment for myself</p>
                </Box>
                <Box
                  width="70%"
                  height="80px"
                  bgcolor="#080808"
                  color="#FFFFFF"
                  textAlign="center"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignSelf="center"
                  m={1}
                  p={3}
                  // display="inline-block"
                  className="border-radius border-color justify-content-center"
                >
                  <p>I’m learning about treatment for someone else</p>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper className="login-side">
            <img
              src={coverImage}
              alt={coverImage}
              className="img-responsive-image"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )

  // return (
  //   <div className={useStyles.root}>
  //     <Grid container spacing={0} xs={12}>
  //       <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
  //         <Box>
  //           <Grid
  //             container
  //             // style={{ width: "100%", height: "100%" }}
  //             className="inputs-wrapper"
  //             textAlign="center"
  //             xs={11}
  //             sm={11}
  //             md={9}
  //             lg={9}
  //             xl={6}
  //           >
  //             <Grid direction="row" justifyContent="center" alignItems="center">
  //               <Typography component="div" variant="h4" gutterBottom>
  //                 Tell us more about you
  //               </Typography>
  //               <p className="para-wrapper">
  //                 Donec auctor lacus et neque euismod blandit non non dui.
  //               </p>
  //               {aboutTexts.map((aboutText, index) => {
  //                 return (
  //                   <Box
  //                     key={index}
  //                     width="70%"
  //                     height="80px"
  //                     bgcolor={aboutText.bgcolor}
  //                     color={aboutText.color}
  //                     textAlign="center"
  //                     display="flex"
  //                     flexDirection="column"
  //                     justifyContent="center"
  //                     alignSelf="center"
  //                     m={1}
  //                     p={3}
  //                     // display="inline-block"
  //                     className="border-radius border-color justify-content-center"
  //                   >
  //                     {aboutText.name}
  //                   </Box>
  //                 )
  //               })}
  //             </Grid>
  //           </Grid>
  //         </Box>
  //       </Grid>

  //       <Hidden only={['sm', 'xs']}>
  //         <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
  //           <Paper className="login-side">
  //             <img
  //               src={coverImage}
  //               alt={coverImage}
  //               className="img-responsive-image"
  //             />
  //           </Paper>
  //         </Grid>
  //       </Hidden>
  //       <Hidden only={['md', 'lg', 'xl']}>
  //         <Grid
  //           item
  //           xs={12}
  //           sm={12}
  //           md={6}
  //           lg={6}
  //           xl={6}
  //           container
  //           direction="row"
  //           justifyContent="flex-end"
  //           alignItems="flex-end"
  //         >
  //           <Box width="60%">
  //             <Box className="login-side">
  //               <img
  //                 src={geometry}
  //                 alt={geometry}
  //                 className="img-responsive-image"
  //               />
  //             </Box>
  //           </Box>
  //         </Grid>
  //       </Hidden>
  //     </Grid>
  //   </div>
  // )
}
