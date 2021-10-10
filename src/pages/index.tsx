import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/pageTitles/pageTitle';
import { PageTitleContainer } from 'ui/components/data-display/pageTitles/pageTitle.style';
import { Input } from '@mui/material';

export default function Home() {
  return (
    <div >
      <SafeEnvironment/>
    
        <PageTitle

          title = {'Conhecendos os Profissionais'}
          subtitle = {'Preencha seu endereço e veja todos os  profissionais perdo do seu local.'}
      
        />
    </div>
  );
}
