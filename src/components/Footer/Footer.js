import React from 'react';
import './styles.scss';
import 'materialize-css/sass/materialize.scss';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

export const FooterTemplate = ({ data }) => {
  console.log( 'footer data: '+ JSON.stringify(data) )
  const { logoImage, socialLinks, Headding, tagline, menuItems } = data;
  const classes = useStyles();

  return (
      <footer className="page-footer indigo darken-4">
        {/* <div style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row" p={1} m={1} >
          <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
    <Grid container spacing={3}>
        <Grid item xs={6}>
        <Avatar alt="Remy Sharp" variant="square" src={logoImage.image} className={classes.large} />
          <h4>{tagline}</h4>
        </Grid>
        <Grid item xs={6}>
        <ul id="nav-mobile" className="right hide-on-med-and-down footer-socialLink">
        {menuItems.map(menuItem => (
              <li key={menuItem.linkURL}>
                <a href={menuItem.linkURL}>
                  {menuItem.label}
                </a>
              </li>
            ))}
            </ul>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>

      </Box>
      </div> */}
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <img src={logoImage.image} alt={logoImage.imageAlt} />
              <h5 className="white-text">{Headding}</h5>
              <p className="grey-text text-lighten-4">{tagline}</p>
            </div>
            <div className="col l6 s12">
              <div className="row">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  {menuItems.map((menuItem) => (
                      <div className="col s3">
                        <li key={menuItem.linkURL}>
                          <a href={menuItem.linkURL} className="white-text">
                            {menuItem.label}
                          </a>
                        </li>
                      </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2020 Copyright Text</div>
        </div>
      </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14)
  }
}));

const Footer = (props) => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export { Footer };
