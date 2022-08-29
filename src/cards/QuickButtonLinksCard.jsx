import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Button } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  card: {
    marginTop: 0,
    marginRight: spacing40,
    marginBottom: 0,
    marginLeft: spacing40
  },
  button: {
    marginBottom: spacing40
  }
});

const QuickButtonLinksTemplate = (props) => {
  const {
    classes,
    cardInfo: {
      configuration: { customConfiguration }
    },
    cardControl: { navigateToPage }
  } = props;

  const links = customConfiguration.links.map((item, index) => {
    return (
      <Button
        className={classes.navigationButton}
        fluid
        key={item.label}
        onClick={() => {navigateToPage( { route: `page/${index}` }  )} }
      >
        {item.label}
      </Button>
    );
  });
  return <div className={classes.card}>{links}</div>;
};

QuickButtonLinksTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  cardInfo: PropTypes.object.isRequired,
  cardControl: PropTypes.object.isRequired
};

export default withStyles(styles)(QuickButtonLinksTemplate);