import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ButtonLink, Card, Container, Section } from './Services.styles';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Services = () => {
  return (
    <Section>
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: '#ff1694',
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          Servicii
        </Typography>
        <Card>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <ListItem>
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="advantage" />
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <CheckIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="advantage" />
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <CheckIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="advantage" />
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <CheckIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="advantage" />
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <CheckIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="advantage" />
              <ListItemIcon
                sx={{
                  minWidth: '41px',
                }}
              >
                <CheckIcon
                  sx={{
                    fill: '#ff1694',
                  }}
                />
              </ListItemIcon>
            </ListItem>
          </List>
          <ButtonLink href="#contact">
            <Button
              variant="contained"
              sx={{
                width: 'fit-content',
                backgroundColor: '#ff1694',
                ':hover': {
                  backgroundColor: '#ff1694',
                },
              }}
            >
              Programeaza o vizita
            </Button>
          </ButtonLink>
        </Card>
      </Container>
    </Section>
  );
};

export default Services;
