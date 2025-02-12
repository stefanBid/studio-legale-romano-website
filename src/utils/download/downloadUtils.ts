export const dowloadFile = (fileName: string, fileHref: string): void => {
  // Create a new <a> element for the download simulation
  const link = document.createElement('a');
  link.href = fileHref;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
