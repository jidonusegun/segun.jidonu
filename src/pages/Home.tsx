import React from 'react';
import { Container, Typography, Box, Grid, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/passport.jpg';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
    zIndex: 1,
  },
}));

const ProfileImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
});

const AnimatedText = styled(motion.div)({
  display: 'inline-block',
});

const Home: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleViewWork = () => {
    navigate('/projects');
  };

  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={6} alignItems="center">
        {/* @ts-ignore */}
        <Grid item xs={12} md={6}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mb: 2,
                }}
              >
                Hi, I'm Segun Jidonu
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Chip
                icon={<WorkIcon />}
                label="5+ Years of Experience"
                sx={{
                  mb: 4,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  color: 'white',
                  '& .MuiChip-icon': {
                    color: 'white',
                  },
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  maxWidth: '600px !important',
                  mb: 4,
                }}
              >
                I'm a passionate Full Stack Developer with expertise in building modern web applications.
                I specialize in React, Node.js, and cloud technologies, creating scalable and efficient solutions.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={handleViewWork}
                sx={{
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  borderRadius: '30px',
                  padding: '12px 30px',
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2 30%, #21CBF3 90%)',
                  },
                }}
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>
        </Grid>

        {/* @ts-ignore */}  
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: -20,
                  bottom: -10,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '20px',
                  zIndex: -1,
                },
              }}
            >
              <ProfileImage src={profileImage} alt="Segun Jidonu" />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Home; 