const pageTransitionConfig = {
  defaultStyle: {
    transition: 'all 400ms ease-in-out',
    transform: 'translateY(20vh)scale(0.95)',
    position: 'absolute',
    width: '100%',
    opacity: '0',
  },
  transitionStyles: {
    entering: {
      transform: 'translateY(20vh)',
      opacity: '0',
    },
    entered: {
      transform: 'translateY(0)',
      opacity: '1',
    },
    exiting: {
      transform: 'translateY(100vh)',
      opacity: '0',
    },
  },
  transitionTime: 400,
}

export const elementFadeInConfig = {
  animateIn: 'anim--fade-in-bottom',
  duration: 0.5,
  delay: 650,
  animateOnce: true,
}

export default pageTransitionConfig
