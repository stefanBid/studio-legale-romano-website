export const navigateTo = (url: string): void => {
  window.location.href = url;
};

export const openLink = (url: string): void => {
  window.open(url, '_blank');
};

export const emailTo = (email: string): void => {
  window.location.href = `mailto:${email}`;
};
