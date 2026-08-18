import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContentProvider, LiveEdit } from '@coreshift/live-edit'
import './index.css'
import App from './App'
import siteContent from './content/site.json'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContentProvider content={siteContent}>
      <App />
      <LiveEdit
        config={{
          apiBase: import.meta.env.VITE_LIVE_EDIT_API ?? '',
          repo: 'CoreshiftHQNZ/ezyconvey-website',
          contentPath: 'src/content/site.json',
          baseBranch: 'main',
        }}
        siteName="EzyConvey"
        demo={!import.meta.env.VITE_LIVE_EDIT_API}
        demoPassword="preview"
      />
    </ContentProvider>
  </StrictMode>,
)
