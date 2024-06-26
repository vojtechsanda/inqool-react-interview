import { Avatar, ListItem, ListItemAvatar, ListItemText, Tooltip } from '@mui/material';
import { Organization } from '@/types/Organization';
import { getLineLimitationSx } from '@/utils/sxUtils';
import { PlainLink } from '.';
import { motion } from 'framer-motion';
import { getGeneralFadeIn } from '@/utils/animationUtils';

export default function OrganizationListItem(organization: Organization) {
  return (
    <motion.div key={`organization-list-item-${organization.id}`} {...getGeneralFadeIn()}>
      <ListItem
        key={organization.login}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <ListItemAvatar>
          <Avatar src={organization.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <PlainLink to={organization.html_url} target="_blank" rel="noopener noreferrer">
              {organization.name ?? organization.login}
            </PlainLink>
          }
          secondary={
            organization.description && (
              <Tooltip title={organization.description} placement="top">
                <span>{organization.description}</span>
              </Tooltip>
            )
          }
          primaryTypographyProps={{
            sx: getLineLimitationSx(1),
          }}
          secondaryTypographyProps={{
            sx: getLineLimitationSx(1),
          }}
        />
      </ListItem>
    </motion.div>
  );
}
