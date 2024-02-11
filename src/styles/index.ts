/* eslint-disable import/prefer-default-export */

export const styleBG = (img: string) => {
  const styles = {
    with: '100%',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return styles
}
