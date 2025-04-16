import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom align="center">
          About Me
        </Typography>
        <Grid container spacing={4}>
          {/* @ts-ignore */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom color="primary">
                Professional Summary
              </Typography>
              <Typography variant="body1" paragraph>
                I am a passionate Full Stack Developer with over 7 years of experience in building modern web applications.
                My journey in software development is driven by a constant desire to learn and create innovative solutions
                that solve real-world problems.
              </Typography>
              <Typography variant="body1" paragraph>
                Throughout my career, I have worked on various projects ranging from e-commerce platforms to enterprise-level
                applications. I have a strong foundation in both front-end and back-end technologies, with expertise in:
              </Typography>
              <Typography variant="body1" component="ul" sx={{ mb: 2 }}>
                <li>Developing responsive and scalable web applications using React.js and Node.js</li>
                <li>Building RESTful APIs and microservices architectures</li>
                <li>Implementing secure authentication and authorization systems</li>
                <li>Optimizing application performance and user experience</li>
                <li>Working with cloud platforms like AWS and Azure</li>
                <li>Managing databases and implementing data-driven solutions</li>
              </Typography>
              <Typography variant="body1" paragraph>
                I am particularly interested in cloud technologies, DevOps practices, and creating efficient, maintainable
                code that follows best practices and industry standards. I enjoy collaborating with cross-functional teams
                and contributing to projects that make a meaningful impact.
              </Typography>
            </Paper>
          </Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom color="primary">
                Skills & Expertise
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Frontend Development"
                    secondary="React.js, TypeScript, Material-UI, HTML5, CSS3, JavaScript, Redux, Next.js"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Backend Development"
                    secondary="Node.js, Express.js, RESTful APIs, GraphQL, MongoDB, PostgreSQL, MySQL, C#.Net"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Cloud & DevOps"
                    secondary="AWS, Azure, Docker, Kubernetes, CI/CD, Git, GitHub Actions, Vercel"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Testing & Quality"
                    secondary="Jest, React Testing Library, Cypress, Unit Testing, E2E Testing"
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Other Skills"
                    secondary="Agile Methodologies, Team Leadership, Code Review, Technical Documentation"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Let's Connect
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/segun-jidonu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://github.com/jidonusegun"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:your.email@example.com"
            >
              Email
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About; 