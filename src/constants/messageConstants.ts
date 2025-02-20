import { ExternalMessageInfo } from '@/types';

export const MAIL_MESSAGES_MAP: Record<ExternalMessageInfo, { subject: string; body: string }> = {
  legalConsultation: {
    subject: 'Richiesta di consulenza legale',
    body: 'Gentile Studio Legale,\n\nDesidero richiedere una consulenza legale. Potreste fornirmi maggiori dettagli sui vostri servizi e sulle modalità di prenotazione?\n\nCordiali saluti,\n[Il tuo Nome]',
  },
  appointment: {
    subject: 'Richiesta di appuntamento',
    body: 'Gentile Studio Legale,\n\nVorrei fissare un appuntamento per discutere una questione legale. Potreste indicarmi le vostre disponibilità e il processo di prenotazione?\n\nCordiali saluti,\n[Il tuo Nome]',
  },
  generalInformation: {
    subject: 'Richiesta di informazioni generali',
    body: 'Gentile Studio Legale,\n\nAvrei alcune domande riguardo ai vostri servizi e alle vostre competenze. Potreste fornirmi maggiori dettagli?\n\nCordiali saluti,\n[Il tuo Nome]',
  },
  professionalCollaboration: {
    subject: 'Proposta di collaborazione professionale',
    body: 'Gentile Studio Legale,\n\nSono interessato/a a una possibile collaborazione professionale con il vostro studio. Sarebbe possibile organizzare un incontro per discutere questa opportunità?\n\nCordiali saluti,\n[Il tuo Nome]',
  },
};

export const WHATS_APP_MESSAGES_MAP: Record<ExternalMessageInfo, string> = {
  legalConsultation: 'Ciao, vorrei richiedere una consulenza legale.',
  appointment: 'Ciao, vorrei fissare un appuntamento.',
  generalInformation: 'Ciao, avrei bisogno di informazioni generali.',
  professionalCollaboration: 'Ciao, sono interessato/a a una collaborazione professionale.',
};
