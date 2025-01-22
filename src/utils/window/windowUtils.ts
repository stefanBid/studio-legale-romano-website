export const navigateTo = (url: string): void => {
  window.location.href = url;
};

export const openLink = (url: string): void => {
  window.open(url, '_blank');
};
