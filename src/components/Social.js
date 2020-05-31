import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link'

function Social() {
    return (
        <>
            <Link target="_blank" href="https://www.linkedin.com/in/anton-de-joya">
                <IconButton>
                <LinkedInIcon color="secondary" fontSize="large">
                </LinkedInIcon>
                </IconButton>
            </Link>
            <Link target="_blank" href="https://github.com/AntonJaie">
                <IconButton size="medium">
                <GitHubIcon color="secondary" fontSize="large">
                </GitHubIcon>
                </IconButton>
            </Link>
            <Link target="_blank" href="mailto:antonjaie.dejoya@gmail.com">
                <IconButton>
                <EmailIcon color="secondary" fontSize="large">antonjaie.dejoya@gmail.com</EmailIcon>
                </IconButton>
            </Link>
        </>
    )
}

export default Social;