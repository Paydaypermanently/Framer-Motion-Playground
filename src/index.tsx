import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'antd/dist/antd.min.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {RouterProvider} from 'react-router'
import {RecoilRoot} from 'recoil'

import './index.css'

import routes from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
      <RecoilRoot>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
    </QueryClientProvider>
      </RecoilRoot>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
